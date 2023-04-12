import SkolensVisitor from './lib/SkolensVisitor.js';
import SkolensParser from './lib/SkolensParser.js';

// ctx.getText() - Text of all tokens in the stream
// ctx.getChildCount() - How many children are there? If there is none, then this node represents a leaf node
// ctx.getChild(n) - Get the n-th child of the node

const MATH_OPS = ['*', '/', '+', '-'];
const COMP_OPS = ['==', '!=', '<', '<=', '>', '>='];

export default class SkolensInterpreter extends SkolensVisitor {
  static types = { skaitlis: 'number', teksts: 'string', buls: 'boolean' };
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
    const outputVal = this.visit(outputExpr);
    console.log(outputVal);
  }

  visitAssign(ctx) {
    // if has 5 children, create a new variable
    if (ctx.getChildCount() == 5) {
      const varType = ctx.getChild(0).getText();
      const varName = ctx.getChild(1).getText();
      const varVal = this.visit(ctx.getChild(3));

      // check if a variable with the name already exists
      if (this.variables.has(varName)) {
        console.error(`Error: variable with name '${varName}' already exists!`);
        process.exit(1);
      }

      // check if a correct type is provided
      if (!Object.keys(SkolensInterpreter.types).includes(varType)) {
        console.error(`Error: type '${varType}' not recognized!`);
        process.exit(1);
      }

      // check if variable and expression types match
      if (SkolensInterpreter.types[varType] != typeof varVal) {
        console.error(`Error: can not assign a value of type ${typeof varVal} to variable of type ${SkolensInterpreter.types[varType]}!`);
        process.exit(1);
      }

      // if all good, add the new variable to variable pool
      this.variables.set(varName, { type: SkolensInterpreter.types[varType], value: varVal });
    }
    // if has 4 children, try to reassign
    else {
      const varName = ctx.getChild(0).getText();
      const varVal = this.visit(ctx.getChild(2));

      // check if a variable with the name already exists
      if (!this.variables.has(varName)) {
        console.error(`Error: variable with name '${varName}' not found in current scope!`);
        process.exit(1);
      }

      // check if variable and expression types match
      if (this.variables.get(varName)['type'] != typeof varVal) {
        console.error(`Error: can not assign a value of type ${typeof varVal} to variable of type ${this.variables.get(varName)['type']}!`);
        process.exit(1);
      }

      // if all good, assign the new value
      this.variables.get(varName)['value'] = varVal;
    }
  }

  visitExpr(ctx) {
    // if has single child, return it's value
    if (ctx.getChildCount() == 1) {
      const child = ctx.getChild(0);
      // if value is a string, remove quotes and return
      if (child.symbol.type == SkolensParser.STRING) {
      }
      // if value is a number, return number value
      if (child.symbol.type == SkolensParser.INT) {
      }
      // if value is a bool, return true or false
      if (child.symbol.type == SkolensParser.BOOL) {
      }
      // if value is an identificator, return the variable's value
      if (child.symbol.type == SkolensParser.ID) {
      }
    }
    // if has 3 children, calculate the value of expression
    else if (ctx.getChildCount() == 3) {
      // if first and last children are parenthases, return the expression between them
      if (ctx.getChild(0).symbol && ctx.getChild(0).symbol.type == SkolensParser.LPAREN) {
      }
      // get the two child values
      const leftVal = this.visit(ctx.getChild(0));
      const rightVal = this.visit(ctx.getChild(2));
      const op = ctx.getChild(1);

      // if op is a comparison,

      // if both numbers, allow all operations
      if (typeof leftVal == 'number' && typeof rightVal == 'number') {
        if (op.symbol.type == SkolensParser.ADD) return leftVal + rightVal;
        if (op.symbol.type == SkolensParser.SUB) return leftVal - rightVal;
        if (op.symbol.type == SkolensParser.MUL) return leftVal * rightVal;
        if (op.symbol.type == SkolensParser.DIV) return leftVal / rightVal;
      }
      // if at least one is a string, allow only addition
      else {
        console.error('Error: mathematical operations can only be used on numbers!');
        process.exit(1);
      }
    }
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
    return ctx.getChild(0).getText() == 'patiess';
  }

  visitParen(ctx) {
    return this.visit(ctx.getChild(1));
  }

  visitMathOp(ctx) {
    const leftVal = this.visit(ctx.getChild(0));
    const rightVal = this.visit(ctx.getChild(2));
    const op = ctx.getChild(1);

    if (typeof leftVal != 'number' || typeof rightVal != 'number') {
      onsole.error('Error: mathematical operations can only be used on numbers!');
      process.exit(1);
    }

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
