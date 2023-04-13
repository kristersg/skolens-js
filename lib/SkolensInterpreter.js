import SkolensVisitor from './SkolensVisitor.js';
import SkolensParser from './SkolensParser.js';

// ctx.getText() - Text of all tokens in the stream
// ctx.getChildCount() - How many children are there? If there is none, then this node represents a leaf node
// ctx.getChild(n) - Get the n-th child of the node

const types = ['skaitlis', 'teksts', 'būls', 'saraksts', 'funkcija'];

export default class SkolensInterpreter extends SkolensVisitor {
  variablesStack = [new Map()];
  functions = new Map();
  functionHasReturned = false;
  functionReturnedVal = undefined;
  functionReturnedLine = -1;
  insideLoop = false;
  loopContinue = false;
  loopBreak = false;

  start(ctx) {
    return this.visitProgram(ctx);
  }

  visitProgram(ctx) {
    // visit each statement in the program
    for (let i = 0; i < ctx.getChildCount() - 1; i++) {
      this.visit(ctx.getChild(i));
    }
  }

  visitStat(ctx) {
    if (this.functionHasReturned || this.loopBreak || this.loopContinue) return;
    this.visit(ctx.getChild(0));
  }

  visitConditionalStat(ctx) {
    for (let i = 0; i < ctx.getChildCount(); i++) {
      // visit the conditional statement
      const res = this.visit(ctx.getChild(i));
      // if the conditional returned true, stop the conditional
      if (res) return;
    }
  }

  visitIfStat(ctx) {
    // evaluate the expression in parenthases
    const exprRes = this.visit(ctx.getChild(2));

    // if expression evaluates to a falsy value, return false
    if (!this.#isValueTruthy(exprRes)) return false;

    // execute statements inside the if
    for (let i = 5; i < ctx.getChildCount() - 1; i++) {
      this.visit(ctx.getChild(i));
    }
    return true;
  }

  visitElseIfStat(ctx) {
    // evaluate the expression in parenthases
    const exprRes = this.visit(ctx.getChild(3));

    // if expression evaluates to a falsy value, return false
    if (!this.#isValueTruthy(exprRes)) return false;

    // execute statements inside the else-if
    for (let i = 6; i < ctx.getChildCount() - 1; i++) {
      this.visit(ctx.getChild(i));
    }
    return true;
  }

  visitElseStat(ctx) {
    // execute statements inside the else
    for (let i = 2; i < ctx.getChildCount() - 1; i++) {
      this.visit(ctx.getChild(i));
    }
    return true;
  }

  visitWhileLoop(ctx) {
    // save the var names existing before the loop
    const varsBeforeLoop = [...this.#getCurrentScope().keys()];

    // do the loop
    this.insideLoop = true;
    while (this.#isValueTruthy(this.visit(ctx.getChild(2)))) {
      // execute statements inside the while
      for (let i = 5; i < ctx.getChildCount() - 1; i++) {
        this.visit(ctx.getChild(i));
      }
      this.loopContinue = false;
      if (this.loopBreak) break;
    }
    this.insideLoop = false;

    // clean up the scope by deleting variables that did not exist before the loop
    Object.keys(this.#getCurrentScope()).forEach((key) => {
      if (!varsBeforeLoop.includes(key)) {
        this.#removeVarFromCurrentScope(key);
      }
    });
    this.loopBreak = false;
    this.loopContinue = false;
  }

  visitDoWhileLoop(ctx) {
    // save the var names existing before the loop
    const varsBeforeLoop = [...this.#getCurrentScope().keys()];

    // do the loop
    this.insideLoop = true;
    do {
      for (let i = 2; i < ctx.getChildCount() - 6; i++) {
        this.visit(ctx.getChild(i));
      }
      this.loopContinue = false;
      if (this.loopBreak) break;
    } while (this.#isValueTruthy(this.visit(ctx.getChild(ctx.getChildCount() - 2))));
    this.insideLoop = false;

    // clean up the scope by deleting variables that did not exist before the loop
    Object.keys(this.#getCurrentScope()).forEach((key) => {
      if (!varsBeforeLoop.includes(key)) {
        this.#removeVarFromCurrentScope(key);
      }
    });
    this.loopBreak = false;
    this.loopContinue = false;
  }

  visitForLoop(ctx) {
    // check if the chosen variable name already exists in current scope
    const varName = ctx.getChild(1).getText();
    if (this.#currentScopeContainsVar(varName)) {
      this.#throwError(ctx.start.line, `mainīgais ar nosaukumu '${varName}' jau eksistē!`);
    }

    // check if from expression is a number
    const fromVal = this.visit(ctx.getChild(3));
    if (typeof fromVal != 'number') {
      this.#throwError(ctx.start.line, `vērtība '${fromVal}' nav skaitlis!`);
    }

    // check if to expression is a number
    const toVal = this.visit(ctx.getChild(5));
    if (typeof toVal != 'number') {
      this.#throwError(ctx.start.line, `vērtība '${toVal}' nav skaitlis!`);
    }

    // save the var names existing before the loop
    const varsBeforeLoop = [...this.#getCurrentScope().keys()];

    // create the variable and assign the from value
    this.#addVarToCurrentScope(varName, 'skaitlis', fromVal);

    this.insideLoop = true;
    if (toVal > fromVal) {
      // do the loop going up
      while (this.#findVarInStack(varName)['value'] < toVal) {
        for (let i = 7; i < ctx.getChildCount() - 1; i++) {
          this.visit(ctx.getChild(i));
        }
        this.loopContinue = false;
        if (this.loopBreak) break;
        this.#findVarInStack(varName)['value']++;
      }
    } else {
      // do the loop going down
      while (this.#findVarInStack(varName)['value'] > toVal) {
        for (let i = 7; i < ctx.getChildCount() - 1; i++) {
          this.visit(ctx.getChild(i));
        }
        this.loopContinue = false;
        if (this.loopBreak) break;
        this.#findVarInStack(varName)['value']--;
      }
    }
    this.insideLoop = false;

    // clean up the scope by deleting variables that did not exist before the loop
    Object.keys(this.#getCurrentScope()).forEach((key) => {
      if (!varsBeforeLoop.includes(key)) {
        this.#removeVarFromCurrentScope(key);
      }
    });
    this.loopBreak = false;
    this.loopContinue = false;
  }

  visitBreakStat(ctx) {
    if (this.insideLoop) this.loopBreak = true;
  }

  visitContinueStat(ctx) {
    if (this.insideLoop) this.loopContinue = true;
  }

  visitFuncDef(ctx) {
    // check if provided return type is correct
    const returnType = ctx.getChild(0).getText();
    if (!types.includes(returnType)) {
      this.#throwError(ctx.start.line, `tips '${returnType}' netika atpazīts`);
    }
    // check if function with that name already exists
    const funcName = ctx.getChild(1).getText();
    if (this.functions.has(funcName)) {
      this.#throwError(ctx.start.line, `funkcija ar nosaukumu '${funcName}' jau ir definēta`);
    }
    // for each argument, check if type is correct and add to a list
    let funcArgs = [];
    let argNames = new Set();
    let i = 3;
    while (ctx.getChild(i).getText() != ')' && ctx.getChild(i).getText() != '{') {
      const varType = ctx.getChild(i).getText();
      if (!types.includes(varType)) {
        this.#throwError(ctx.getChild(i).start.line, `tips '${varType}' netika atpazīts`);
      }
      const varName = ctx.getChild(i + 1).getText();
      if (argNames.has(varName)) {
        this.#throwError(ctx.getChild(i + 1).start.line, `vairākiem funkcijas parametriem nevar būt vienāds nosaukums (${varName})`);
      }
      funcArgs.push({ type: varType, name: varName });
      argNames.add(varName);
      i += 3;
    }
    //
    // add the function to the functions list:
    // key: function's name
    // type: function's return type
    // args: list of parameters {type: <>, name: <>}
    // node: ctx object of the node in parse tree
    this.functions.set(funcName, { type: returnType, args: funcArgs, node: ctx });
  }

  visitFuncCall(ctx) {
    // check if function with the name exists
    const funcName = ctx.getChild(0).getText();
    if (!this.functions.has(funcName)) {
      this.#throwError(ctx.getChild(0).start.line, `funkcija ar nosaukumu ${funcName} nav iepriekš izveidota!`);
    }
    // get the passed values
    const funcArgs = [];
    for (let i = 2; i < ctx.getChildCount() - 1; i += 2) {
      funcArgs.push(this.visit(ctx.getChild(i)));
    }
    // check if passed value count matches the function
    if (funcArgs.length != this.functions.get(funcName)['args'].length) {
      this.#throwError(ctx.start.line, `funkcijai nodoto parametru skaits (${funcArgs.length}) nesakrīt ar funkcijai nepieciešamo parametru skaitu (${this.functions.get(funcName)['args'].length})`);
    }
    // check if passed values have correct type
    for (let i = 0; i < funcArgs.length; i++) {
      if (!this.#typeMatchesValue(this.functions.get(funcName)['args'][i]['type'], funcArgs[i])) {
        this.#throwError(ctx.start.line, `funkcijai nodotā parametra tips (${typeof funcArgs[i]}) nesakrīt ar prasīto (${this.functions.get(funcName)['args'][i]['type']})`);
      }
    }
    //
    // run the function:
    // - push a new variable scope
    this.#pushNewVarScope();
    // - add passed function parameters to the scope as variables
    for (let i = 0; i < funcArgs.length; i++) {
      this.#addVarToCurrentScope(this.functions.get(funcName)['args'][i]['name'], this.functions.get(funcName)['args'][i]['type'], funcArgs[i]);
    }
    // - execute the code inside the function
    let i = this.functions.get(funcName)['node'].getChildCount() - 2;
    // visit each statement
    while (this.functions.get(funcName)['node'].getChild(i).getText() != '{') {
      i--;
    }
    i++;
    while (this.functions.get(funcName)['node'].getChild(i).getText() != '}') {
      this.visit(this.functions.get(funcName)['node'].getChild(i));
      i++;
    }

    this.#popVarScope();

    const funcReturned = this.functionHasReturned;
    this.functionHasReturned = false;
    const funcReturnVal = this.functionReturnedVal;
    this.functionReturnedVal = undefined;

    if (funcReturned) {
      if (this.#typeMatchesValue(this.functions.get(funcName)['type'], funcReturnVal)) {
        return funcReturnVal;
      } else {
        this.#throwError(this.functionReturnedLine, `funkcija ar tipu '${this.functions.get(funcName)['type']}' nevar atgriezt cita tipa vērtību`);
      }
    } else if (this.functions.get(funcName)['type'] != 'funkcija') {
      this.#throwError(this.functions.get(funcName)['node'].start.line, `funkcijai ar tipu '${this.functions.get(funcName)['type']}' obligāti jāatgriež vērtība, bet tā neatgriež nekādu`);
    } else {
      return;
    }
  }

  visitReturnStat(ctx) {
    if (this.variablesStack.length == 1) return;
    this.functionHasReturned = true;
    this.functionReturnedLine = ctx.start.line;
    if (ctx.getChildCount() == 2) {
      this.functionReturnedVal = undefined;
    } else {
      this.functionReturnedVal = this.visit(ctx.getChild(1));
    }
  }

  visitTeikt(ctx) {
    let outputExpr = ctx.getChild(1);
    let outputVal = this.visit(outputExpr);
    if (typeof outputVal == 'boolean') {
      outputVal == true ? (outputVal = 'patiess') : (outputVal = 'aplams');
    }
    if (typeof outputVal == 'undefined') outputVal = '';
    console.log(outputVal);
  }

  visitListAdd(ctx) {
    // check if a variable with the name exists
    const listName = ctx.getChild(0).getText();
    if (this.#findVarInStack() == null) {
      this.#throwError(ctx.getChild(0).start.line, `saraksts ar nosaukumu '${listName}' nav iepriekš izveidots`);
    }

    // check if that variable even is a list
    if (this.#findVarInStack(listName)['type'] != 'saraksts') {
      this.#throwError(ctx.getChild(0).start.line, `mainīgais ar nosaukumu '${listName}' nav saraksts`);
    }

    // if all good, add the element to the end of the list
    const newVal = this.visit(ctx.getChild(4));
    this.#findVarInStack(listName)['value'].push(newVal);
  }

  visitListRemove(ctx) {
    // check if a variable with the name exists
    const listName = ctx.getChild(0).getText();
    if (this.#findVarInStack(listName) == null) {
      this.#throwError(ctx.getChild(0).start.line, `saraksts ar nosaukumu '${listName}' nav iepriekš izveidots`);
    }

    // check if that variable even is a list
    if (this.#findVarInStack(listName)['type'] != 'saraksts') {
      this.#throwError(ctx.getChild(0).start.line, `mainīgais ar nosaukumu '${listName}' nav saraksts`);
    }

    // check if the index expression evaluates to a valid integer
    const index = this.visit(ctx.getChild(4));
    if (!Number.isInteger(index)) {
      this.#throwError(ctx.getChild(4).start.line, `saraksta indeksam jābūt skaitlim, '${index}' nav derīgs saraksta indekss`);
    }

    // check if list is long enough
    if (this.#findVarInStack(listName)['value'].length <= index || index < 0) {
      this.#throwError(ctx.getChild(4).start.line, `indekss '${index}' ir ārpus saraksta robežām`);
    }

    // if all good, assign the new value
    this.#findVarInStack(listName)['value'].splice(index, 1);
  }

  visitListInsert(ctx) {
    // check if a variable with the name exists
    const listName = ctx.getChild(0).getText();
    if (this.#findVarInStack(listName) == null) {
      this.#throwError(ctx.getChild(0).start.line, `saraksts ar nosaukumu '${listName}' nav iepriekš izveidots`);
    }

    // check if that variable even is a list
    if (this.#findVarInStack(listName)['type'] != 'saraksts') {
      this.#throwError(ctx.getChild(0).start.line, `mainīgais ar nosaukumu '${listName}' nav saraksts`);
    }

    // check if the index expression evaluates to a valid integer
    const index = this.visit(ctx.getChild(4));
    if (!Number.isInteger(index)) {
      this.#throwError(ctx.getChild(4).start.line, `saraksta indeksam jābūt skaitlim, '${index}' nav derīgs saraksta indekss`);
    }

    // check if list is long enough
    if (index < 0) {
      this.#throwError(ctx.getChild(4).start.line, `indekss '${index}' ir ārpus saraksta robežām`);
    }

    // if all good, assign the new value
    const newVal = this.visit(ctx.getChild(6));
    this.#findVarInStack(listName)['value'].splice(index, 0, newVal);
  }

  visitListAssign(ctx) {
    // check if a variable with the name exists
    const listName = ctx.getChild(0).getText();
    if (this.#findVarInStack(listName) == null) {
      this.#throwError(ctx.getChild(0).start.line, `saraksts ar nosaukumu '${listName}' nav iepriekš izveidots`);
    }

    // check if that variable even is a list
    if (this.#findVarInStack(listName)['type'] != 'saraksts') {
      this.#throwError(ctx.getChild(0).start.line, `mainīgais ar nosaukumu '${listName}' nav saraksts`);
    }

    // check if the index expression evaluates to a valid integer
    const index = this.visit(ctx.getChild(2));
    if (!Number.isInteger(index)) {
      this.#throwError(ctx.getChild(2).start.line, `saraksta indeksam jābūt skaitlim, '${index}' nav derīgs saraksta indekss`);
    }

    // check if list is long enough
    if (this.#findVarInStack(listName)['value'].length <= index || index < 0) {
      this.#throwError(ctx.getChild(2).start.line, `indekss '${index}' ir ārpus saraksta robežām`);
    }

    // if all good, assign the new value
    const newVal = this.visit(ctx.getChild(5));
    this.#findVarInStack(listName)['value'][index] = newVal;
  }

  visitNewAssign(ctx) {
    const varType = ctx.getChild(0).getText();
    const varName = ctx.getChild(1).getText();
    const varVal = this.visit(ctx.getChild(3));

    // check if a variable with the name already exists
    if (this.#findVarInStack(varName) != null) {
      this.#throwError(ctx.getChild(1).start.line, `mainīgais ar nosaukumu '${varName}' jau eksistē`);
    }

    // check if a correct type is provided
    if (!types.includes(varType)) {
      this.#throwError(ctx.getChild(0).start.line, `tips '${varType}' netika atpazīts`);
    }

    // check if variable and expression types match
    if (!this.#typeMatchesValue(varType, varVal)) {
      this.#throwError(ctx.getChild(0).start.line, `nevar glabāt '${typeof varVal}' tipa vērtību mainīgajā ar tipu '${SkolensInterpreter.types[varType]}'`);
    }

    // if all good, add the new variable to variable pool
    this.#addVarToCurrentScope(varName, varType, varVal);
  }

  visitReAssign(ctx) {
    const varName = ctx.getChild(0).getText();
    const varVal = this.visit(ctx.getChild(2));

    // check if a variable with the name already exists
    if (this.#findVarInStack(varName) == null) {
      this.#throwError(ctx.getChild(0).start.line, `mainīgais ar nosaukumu '${varName}' nav iepriekš izveidots`);
    }

    // check if variable and expression types match
    if (!this.#typeMatchesValue(this.#findVarInStack(varName)['type'], varVal)) {
      this.#throwError(ctx.getChild(2).start.line, `nevar glabāt '${typeof varVal}' tipa vērtību mainīgajā ar tipu '${this.#findVarInStack(varName)['type']}'`);
    }

    // if all good, assign the new value
    this.#findVarInStack(varName)['value'] = varVal;
  }

  visitId(ctx) {
    if (this.#findVarInStack(ctx.getChild(0).getText()) != null) {
      return this.#findVarInStack(ctx.getChild(0).getText())['value'];
    }
    this.#throwError(ctx.start.line, `mainīgais ar nosaukumu '${ctx.getChild(0).getText()}' nav iepriekš izveidots`);
  }

  visitNum(ctx) {
    return parseFloat(ctx.getChild(0).getText());
  }

  visitString(ctx) {
    return ctx.getChild(0).getText().slice(1, -1);
  }

  visitBool(ctx) {
    return ctx.getChild(0).getText().toLowerCase() == 'patiess';
  }

  visitList(ctx) {
    // if only 2 children, return an empty list
    if (ctx.getChildCount() == 2) return [];

    // add all expressions to a new list and return it
    let newList = [];
    for (let i = 1; i < ctx.getChildCount() - 1; i += 2) {
      newList.push(this.visit(ctx.getChild(i)));
    }
    return newList;
  }

  visitListAccess(ctx) {
    // check if a variable with the name exists
    const listName = ctx.getChild(0).getText();
    if (this.#findVarInStack(listName) == null) {
      this.#throwError(ctx.getChild(0).start.line, `saraksts ar nosaukumu '${listName}' nav iepriekš izveidots`);
    }

    // check if that variable even is a list
    if (this.#findVarInStack(listName)['type'] != 'saraksts') {
      this.#throwError(ctx.getChild(0).start.line, `mainīgais ar nosaukumu '${listName}' nav saraksts`);
    }

    // check if the index expression evaluates to an integer
    const index = this.visit(ctx.getChild(2));
    if (!Number.isInteger(index)) {
      this.#throwError(ctx.getChild(2).start.line, `saraksta indeksam jābūt skaitlim, '${index}' nav derīgs saraksta indekss`);
    }

    // check if list is long enough
    if (this.#findVarInStack(listName)['value'].length <= index || index < 0) {
      this.#throwError(ctx.getChild(2).start.line, `indekss '${index}' ir ārpus saraksta robežām`);
    }

    // if all good, return the value
    return this.#findVarInStack(listName)['value'][index];
  }

  visitListLength(ctx) {
    // check if a variable with the name exists
    const listName = ctx.getChild(0).getText();
    if (this.#findVarInStack(listName) == null) {
      this.#throwError(ctx.getChild(0).start.line, `saraksts ar nosaukumu '${listName}' nav iepriekš izveidots`);
    }

    // check if that variable even is a list
    if (this.#findVarInStack(listName)['type'] != 'saraksts') {
      this.#throwError(ctx.getChild(0).start.line, `mainīgais ar nosaukumu '${listName}' nav saraksts`);
    }

    // if all good, return the list's length
    return this.#findVarInStack(listName)['value'].length;
  }

  visitParen(ctx) {
    return this.visit(ctx.getChild(1));
  }

  visitLogicOp(ctx) {
    const leftVal = this.visit(ctx.getChild(0));
    const rightVal = this.visit(ctx.getChild(2));
    const op = ctx.getChild(1);

    if (op.symbol.type == SkolensParser.AND) return this.#isValueTruthy(leftVal) && this.#isValueTruthy(rightVal);
    if (op.symbol.type == SkolensParser.OR) return this.#isValueTruthy(leftVal) || this.#isValueTruthy(rightVal);
  }

  visitMathOp(ctx) {
    const leftVal = this.visit(ctx.getChild(0));
    const rightVal = this.visit(ctx.getChild(2));
    const op = ctx.getChild(1);

    if (typeof leftVal != 'number' || typeof rightVal != 'number') {
      this.#throwError(ctx.getChild(1).start.line, 'matemātiskas darbības var tikt izmantotas tikai ar skaitļiem');
    }

    if (op.symbol.type == SkolensParser.MOD) return leftVal % rightVal;
    if (op.symbol.type == SkolensParser.EXP) return leftVal ** rightVal;
    if (op.symbol.type == SkolensParser.ADD) return leftVal + rightVal;
    if (op.symbol.type == SkolensParser.SUB) return leftVal - rightVal;
    if (op.symbol.type == SkolensParser.MUL) return leftVal * rightVal;
    if (op.symbol.type == SkolensParser.DIV) return leftVal / rightVal;
  }

  visitCompOp(ctx) {
    const leftVal = this.visit(ctx.getChild(0));
    const rightVal = this.visit(ctx.getChild(2));
    const op = ctx.getChild(1);

    if (typeof leftVal != 'number' || typeof rightVal != 'number') {
      onsole.error(`Error: comparison operation ${op.getText()} can only be used on numbers!`);
      process.exit(1);
    }

    if (op.symbol.type == SkolensParser.LESS) return leftVal < rightVal;
    if (op.symbol.type == SkolensParser.LESSEQ) return leftVal <= rightVal;
    if (op.symbol.type == SkolensParser.LARG) return leftVal > rightVal;
    if (op.symbol.type == SkolensParser.LARGEQ) return leftVal >= rightVal;
  }

  visitEqualityOp(ctx) {
    const leftVal = this.visit(ctx.getChild(0));
    const rightVal = this.visit(ctx.getChild(2));
    const op = ctx.getChild(1);

    if (typeof leftVal != typeof rightVal) {
      onsole.error(`Error: comparison operation ${op.getText()} can only be used on values of equal types!`);
      process.exit(1);
    }

    if (op.symbol.type == SkolensParser.EQ) return leftVal == rightVal;
    if (op.symbol.type == SkolensParser.NOTEQ) return leftVal != rightVal;
  }

  visitConcatOp(ctx) {
    let leftVal = this.visit(ctx.getChild(0));
    let rightVal = this.visit(ctx.getChild(2));

    if (typeof leftVal == 'boolean') leftVal = 'patiess';
    if (typeof rightVal == 'boolean') rightVal = 'patiess';
    if (typeof leftVal == 'undefined') leftVal = '';
    if (typeof rightVal == 'undefined') rightVal = '';

    return String(leftVal) + String(rightVal);
  }

  #typeMatchesValue(type, val) {
    switch (type) {
      case 'saraksts':
        return Array.isArray(val);
      case 'skaitlis':
        return typeof val == 'number';
      case 'teksts':
        return typeof val == 'string';
      case 'būls':
        return typeof val == 'boolean';
      case 'funkcija':
        return typeof val == 'undefined';
      default:
        return false;
    }
  }

  #findVarInStack(varName) {
    for (let i = this.variablesStack.length - 1; i >= 0; i--) {
      if (this.variablesStack[i].has(varName)) return this.variablesStack[i].get(varName);
    }
    return null;
  }

  #currentScopeContainsVar(varName) {
    return this.variablesStack[this.variablesStack.length - 1].has(varName);
  }

  #pushNewVarScope() {
    this.variablesStack.push(new Map());
  }

  #popVarScope() {
    this.variablesStack.pop();
  }

  #getCurrentScope() {
    return this.variablesStack[this.variablesStack.length - 1];
  }

  #addVarToCurrentScope(varName, varType, varVal) {
    this.variablesStack[this.variablesStack.length - 1].set(varName, { type: varType, value: varVal });
  }

  #removeVarFromCurrentScope(varName) {
    this.variablesStack[this.variablesStack.length - 1].delete(varName);
  }

  #isValueTruthy(val) {
    if (typeof val == 'boolean') {
      return val;
    }
    if (typeof val == 'number') {
      return val != 0;
    }
    if (typeof val == 'string') {
      return val.trim().length != 0;
    }
  }

  #throwError(line, msg) {
    console.error(`[ Rinda ${line} ] Kļūda: ${msg}`);
    process.exit(1);
  }
}
