import SkolensVisitor from './lib/SkolensVisitor.js';
import SkolensParser from './lib/SkolensParser.js';

// ctx.getText() - Text of all tokens in the stream
// ctx.getChildCount() - How many children are there? If there is none, then this node represents a leaf node
// ctx.getChild(n) - Get the n-th child of the node

const types = ['skaitlis', 'teksts', 'būls', 'saraksts'];

export default class SkolensInterpreter extends SkolensVisitor {
  variables = new Map();

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

  visitTeikt(ctx) {
    let outputExpr = ctx.getChild(1);
    let outputVal = this.visit(outputExpr);
    if (typeof outputVal == 'boolean') {
      outputVal == true ? (outputVal = 'patiess') : (outputVal = 'aplams');
    }
    console.log(outputVal);
  }

  visitListAdd(ctx) {
    // check if a variable with the name exists
    const listName = ctx.getChild(0).getText();
    if (!this.variables.has(listName)) {
      console.error(`Error: list with name '${listName}' not found in current scope!`);
      process.exit(1);
    }

    // check if that variable even is a list
    if (this.variables.get(listName)['type'] != 'saraksts') {
      console.error(`Error: attempt to add a list element, but variable ${varName} is not a list!`);
      process.exit(1);
    }

    // if all good, add the element to the end of the list
    const newVal = this.visit(ctx.getChild(4));
    this.variables.get(listName)['value'].push(newVal);
  }

  visitListRemove(ctx) {
    // check if a variable with the name exists
    const listName = ctx.getChild(0).getText();
    if (!this.variables.has(listName)) {
      console.error(`Error: list with name '${listName}' not found in current scope!`);
      process.exit(1);
    }

    // check if that variable even is a list
    if (this.variables.get(listName)['type'] != 'saraksts') {
      console.error(`Error: attempt to access a list element, but variable ${varName} is not a list!`);
      process.exit(1);
    }

    // check if the index expression evaluates to a valid integer
    const index = this.visit(ctx.getChild(4));
    if (!Number.isInteger(index)) {
      console.error(`Error: '${index}' is not a valid list index!`);
      process.exit(1);
    }

    // check if list is long enough
    if (this.variables.get(listName)['value'].length <= index || index < 0) {
      console.error(`Error: list index '${index}' is out of bounds!`);
      process.exit(1);
    }

    // if all good, assign the new value
    this.variables.get(listName)['value'].splice(index, 1);
  }

  visitListInsert(ctx) {
    // check if a variable with the name exists
    const listName = ctx.getChild(0).getText();
    if (!this.variables.has(listName)) {
      console.error(`Error: list with name '${listName}' not found in current scope!`);
      process.exit(1);
    }

    // check if that variable even is a list
    if (this.variables.get(listName)['type'] != 'saraksts') {
      console.error(`Error: attempt to access a list element, but variable ${varName} is not a list!`);
      process.exit(1);
    }

    // check if the index expression evaluates to a valid integer
    const index = this.visit(ctx.getChild(4));
    if (!Number.isInteger(index)) {
      console.error(`Error: '${index}' is not a valid list index!`);
      process.exit(1);
    }

    // check if list is long enough
    if (index < 0) {
      console.error(`Error: list index '${index}' is out of bounds!`);
      process.exit(1);
    }

    // if all good, assign the new value
    const newVal = this.visit(ctx.getChild(6));
    this.variables.get(listName)['value'].splice(index, 0, newVal);
  }

  visitListAssign(ctx) {
    // check if a variable with the name exists
    const listName = ctx.getChild(0).getText();
    if (!this.variables.has(listName)) {
      console.error(`Error: list with name '${listName}' not found in current scope!`);
      process.exit(1);
    }

    // check if that variable even is a list
    if (this.variables.get(listName)['type'] != 'saraksts') {
      console.error(`Error: attempt to access a list element, but variable ${varName} is not a list!`);
      process.exit(1);
    }

    // check if the index expression evaluates to a valid integer
    const index = this.visit(ctx.getChild(2));
    if (!Number.isInteger(index)) {
      console.error(`Error: '${index}' is not a valid list index!`);
      process.exit(1);
    }

    // check if list is long enough
    if (this.variables.get(listName)['value'].length <= index || index < 0) {
      console.error(`Error: list index '${index}' is out of bounds!`);
      process.exit(1);
    }

    // if all good, assign the new value
    const newVal = this.visit(ctx.getChild(5));
    this.variables.get(listName)['value'][index] = newVal;
  }

  visitNewAssign(ctx) {
    const varType = ctx.getChild(0).getText();
    const varName = ctx.getChild(1).getText();
    const varVal = this.visit(ctx.getChild(3));

    // check if a variable with the name already exists
    if (this.variables.has(varName)) {
      console.error(`Error: variable with name '${varName}' already exists!`);
      process.exit(1);
    }

    // check if a correct type is provided
    if (!types.includes(varType)) {
      console.error(`Error: type '${varType}' not recognized!`);
      process.exit(1);
    }

    // check if variable and expression types match
    if (!this.#typeMatchesValue(varType, varVal)) {
      console.error(`Error: can not assign a value of type ${typeof varVal} to variable of type ${SkolensInterpreter.types[varType]}!`);
      process.exit(1);
    }

    // if all good, add the new variable to variable pool
    this.variables.set(varName, { type: varType, value: varVal });
  }

  visitReAssign(ctx) {
    const varName = ctx.getChild(0).getText();
    const varVal = this.visit(ctx.getChild(2));

    // check if a variable with the name already exists
    if (!this.variables.has(varName)) {
      console.error(`Error: variable with name '${varName}' not found in current scope!`);
      process.exit(1);
    }

    // check if variable and expression types match
    if (!this.#typeMatchesValue(this.variables.get(varName)['type'], varVal)) {
      console.error(`Error: can not assign a value of type ${typeof varVal} to variable of type ${this.variables.get(varName)['type']}!`);
      process.exit(1);
    }

    // if all good, assign the new value
    this.variables.get(varName)['value'] = varVal;
  }

  visitId(ctx) {
    if (this.variables.has(ctx.getChild(0).getText())) {
      return this.variables.get(ctx.getChild(0).getText())['value'];
    }
    console.error(`Error: variable with name '${ctx.getChild(0).getText()}' is not defined!`);
    process.exit(1);
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
    if (!this.variables.has(listName)) {
      console.error(`Error: list with name '${listName}' not found in current scope!`);
      process.exit(1);
    }

    // check if that variable even is a list
    if (this.variables.get(listName)['type'] != 'saraksts') {
      console.error(`Error: attempt to access a list element, but variable ${varName} is not a list!`);
      process.exit(1);
    }

    // check if the index expression evaluates to an integer
    const index = this.visit(ctx.getChild(2));
    if (!Number.isInteger(index)) {
      console.error(`Error: '${index}' is not a valid list index!`);
      process.exit(1);
    }

    // check if list is long enough
    if (this.variables.get(listName)['value'].length <= index || index < 0) {
      console.error(`Error: list index '${index}' is out of bounds!`);
      process.exit(1);
    }

    // if all good, return the value
    return this.variables.get(listName)['value'][index];
  }

  visitListLength(ctx) {
    // check if a variable with the name exists
    const listName = ctx.getChild(0).getText();
    if (!this.variables.has(listName)) {
      console.error(`Error: list with name '${listName}' not found in current scope!`);
      process.exit(1);
    }

    // check if that variable even is a list
    if (this.variables.get(listName)['type'] != 'saraksts') {
      console.error(`Error: attempt to access a list element, but variable ${varName} is not a list!`);
      process.exit(1);
    }

    // if all good, return the list's length
    return this.variables.get(listName)['value'].length;
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
      onsole.error('Error: mathematical operations can only be used on numbers!');
      process.exit(1);
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
      default:
        return false;
    }
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
}
