import SkolensVisitor from '../lib/SkolensVisitor';

export default class Visitor extends SkolensVisitor {
  start(ctx) {
    return this.visitProgram(ctx);
  }

  // expr :
  visitExpr(ctx) {}
}
