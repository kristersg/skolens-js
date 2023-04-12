import SkolensVisitor from './lib/SkolensVisitor.js';
import SkolensParser from './lib/SkolensParser.js';

// ctx.getText() - Text of all tokens in the stream
// ctx.getChildCount() - How many children are there? If there is none, then this node represents a leaf node
// ctx.getChild(n) - Get the n-th child of the node

// TODO deal with bools in expressions

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

  visitTeikt(ctx) {
    let outputExpr = ctx.getChild(1);
    const outputVal = this.visit(outputExpr);
    console.log(outputVal);
  }

  visitIfstat(ctx) {
    // evaluate the expression in parenthases
    const exprRes = this.visit(ctx.getChild(2));

    // if expression evaluates to a truthy value, return
    if (this.#isValueTruthy(exprRes)) {
      for (let i = 5; i < ctx.getChildCount() - 1; i++) {
        this.visit(ctx.getChild(i));
      }
    }
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
        // TODO handle errors (stop traversal)
      }

      // check if a correct type is provided
      if (!Object.keys(SkolensInterpreter.types).includes(varType)) {
        console.error(`Error: type '${varType}' not recognized!`);
        // TODO handle errors (stop traversal)
      }

      // check if variable and expression types match
      if (SkolensInterpreter.types[varType] != typeof varVal) {
        console.error(`Error: can not assign a value of type ${typeof varVal} to variable of type ${SkolensInterpreter.types[varType]}!`);
        // TODO handle errors (stop traversal)
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
        // TODO handle errors (stop traversal)
      }

      // check if variable and expression types match
      if (this.variables.get(varName)['type'] != typeof varVal) {
        console.error(`Error: can not assign a value of type ${typeof varVal} to variable of type ${this.variables.get(varName)['type']}!`);
        // TODO handle errors (stop traversal)
      }

      // if all good, assign the new value
      this.variables.get(varName)['value'] = varVal;
    }
  }

  // if text is involved -> allow only +
  // else -> allow all ops
  visitExpr(ctx) {
    // if has single child, return it's value
    if (ctx.getChildCount() == 1) {
      const child = ctx.getChild(0);
      // if value is a string, remove quotes and return
      if (child.symbol.type == SkolensParser.STRING) {
        return child.getText().slice(1, -1);
      }
      // if value is a number, return number value
      if (child.symbol.type == SkolensParser.INT) {
        return parseFloat(child.getText());
      }
      // if value is a bool, return true or false
      if (child.symbol.type == SkolensParser.BOOL) {
        return child.getText() == 'patiess';
      }
      // if value is an identificator, return the variable's value
      if (child.symbol.type == SkolensParser.ID) {
        if (this.variables.has(child.getText())) {
          return this.variables.get(child.getText())['value'];
        }
        console.error(`Error: variable with name '${child.getText()}' is not defined!`);
        // TODO handle errors (stop traversal)
      }
    }
    // if has 3 children, calculate the value of expression
    else if (ctx.getChildCount() == 3) {
      // if first and last children are parenthases, return the expression between them
      if (ctx.getChild(0).symbol && ctx.getChild(0).symbol.type == SkolensParser.LPAREN) {
        return this.visit(ctx.getChild(1));
      }
      // get the two child values
      const leftVal = this.visit(ctx.getChild(0));
      const rightVal = this.visit(ctx.getChild(2));
      const op = ctx.getChild(1);

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
        // TODO handle errors (stop traversal)
      }
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
