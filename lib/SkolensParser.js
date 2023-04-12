// Generated from grammars/Skolens.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import SkolensListener from './SkolensListener.js';
import SkolensVisitor from './SkolensVisitor.js';

const serializedATN = [4,1,19,104,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,5,0,18,8,0,10,0,12,0,21,9,0,1,0,1,0,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,3,1,32,8,1,1,2,1,2,1,2,1,2,1,2,1,2,5,2,40,8,2,10,2,
12,2,43,9,2,1,2,1,2,1,3,1,3,1,3,5,3,50,8,3,10,3,12,3,53,9,3,1,3,1,3,1,4,
1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,72,8,5,1,6,1,
6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,83,8,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
1,6,1,6,1,6,1,6,5,6,97,8,6,10,6,12,6,100,9,6,1,7,1,7,1,7,0,1,12,8,0,2,4,
6,8,10,12,14,0,0,111,0,19,1,0,0,0,2,31,1,0,0,0,4,33,1,0,0,0,6,46,1,0,0,0,
8,56,1,0,0,0,10,71,1,0,0,0,12,82,1,0,0,0,14,101,1,0,0,0,16,18,3,2,1,0,17,
16,1,0,0,0,18,21,1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,22,1,0,0,0,21,19,
1,0,0,0,22,23,5,0,0,1,23,1,1,0,0,0,24,32,3,4,2,0,25,32,3,6,3,0,26,32,3,8,
4,0,27,32,3,10,5,0,28,29,3,12,6,0,29,30,5,2,0,0,30,32,1,0,0,0,31,24,1,0,
0,0,31,25,1,0,0,0,31,26,1,0,0,0,31,27,1,0,0,0,31,28,1,0,0,0,32,3,1,0,0,0,
33,34,5,12,0,0,34,35,5,7,0,0,35,36,3,12,6,0,36,37,5,8,0,0,37,41,5,9,0,0,
38,40,3,2,1,0,39,38,1,0,0,0,40,43,1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,
44,1,0,0,0,43,41,1,0,0,0,44,45,5,10,0,0,45,5,1,0,0,0,46,47,5,13,0,0,47,51,
5,9,0,0,48,50,3,2,1,0,49,48,1,0,0,0,50,53,1,0,0,0,51,49,1,0,0,0,51,52,1,
0,0,0,52,54,1,0,0,0,53,51,1,0,0,0,54,55,5,10,0,0,55,7,1,0,0,0,56,57,5,11,
0,0,57,58,3,12,6,0,58,59,5,2,0,0,59,9,1,0,0,0,60,61,5,17,0,0,61,62,5,1,0,
0,62,63,3,12,6,0,63,64,5,2,0,0,64,72,1,0,0,0,65,66,3,14,7,0,66,67,5,17,0,
0,67,68,5,1,0,0,68,69,3,12,6,0,69,70,5,2,0,0,70,72,1,0,0,0,71,60,1,0,0,0,
71,65,1,0,0,0,72,11,1,0,0,0,73,74,6,6,-1,0,74,83,5,17,0,0,75,83,5,16,0,0,
76,83,5,15,0,0,77,83,5,14,0,0,78,79,5,7,0,0,79,80,3,12,6,0,80,81,5,8,0,0,
81,83,1,0,0,0,82,73,1,0,0,0,82,75,1,0,0,0,82,76,1,0,0,0,82,77,1,0,0,0,82,
78,1,0,0,0,83,98,1,0,0,0,84,85,10,4,0,0,85,86,5,5,0,0,86,97,3,12,6,5,87,
88,10,3,0,0,88,89,5,6,0,0,89,97,3,12,6,4,90,91,10,2,0,0,91,92,5,3,0,0,92,
97,3,12,6,3,93,94,10,1,0,0,94,95,5,4,0,0,95,97,3,12,6,2,96,84,1,0,0,0,96,
87,1,0,0,0,96,90,1,0,0,0,96,93,1,0,0,0,97,100,1,0,0,0,98,96,1,0,0,0,98,99,
1,0,0,0,99,13,1,0,0,0,100,98,1,0,0,0,101,102,5,17,0,0,102,15,1,0,0,0,8,19,
31,41,51,71,82,96,98];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SkolensParser extends antlr4.Parser {

    static grammarFileName = "Skolens.g4";
    static literalNames = [ null, "'='", "';'", "'+'", "'-'", "'*'", "'/'", 
                            "'('", "')'", "'{'", "'}'", "'teikt '", "'ja'", 
                            "'citadi'" ];
    static symbolicNames = [ null, "EQ", "SEMI", "ADD", "SUB", "MUL", "DIV", 
                             "LPAREN", "RPAREN", "LCURL", "RCURL", "PRINT", 
                             "IF", "ELSE", "BOOL", "STRING", "INT", "ID", 
                             "WS", "COMMENT" ];
    static ruleNames = [ "program", "stat", "ifstat", "elsestat", "teikt", 
                         "assign", "expr", "type" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SkolensParser.ruleNames;
        this.literalNames = SkolensParser.literalNames;
        this.symbolicNames = SkolensParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 6:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 4);
    		case 1:
    			return this.precpred(this._ctx, 3);
    		case 2:
    			return this.precpred(this._ctx, 2);
    		case 3:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SkolensParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 260224) !== 0)) {
	            this.state = 16;
	            this.stat();
	            this.state = 21;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 22;
	        this.match(SkolensParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SkolensParser.RULE_stat);
	    try {
	        this.state = 31;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 24;
	            this.ifstat();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 25;
	            this.elsestat();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 26;
	            this.teikt();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 27;
	            this.assign();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 28;
	            this.expr(0);
	            this.state = 29;
	            this.match(SkolensParser.SEMI);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifstat() {
	    let localctx = new IfstatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SkolensParser.RULE_ifstat);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(SkolensParser.IF);
	        this.state = 34;
	        this.match(SkolensParser.LPAREN);
	        this.state = 35;
	        this.expr(0);
	        this.state = 36;
	        this.match(SkolensParser.RPAREN);
	        this.state = 37;
	        this.match(SkolensParser.LCURL);
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 260224) !== 0)) {
	            this.state = 38;
	            this.stat();
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 44;
	        this.match(SkolensParser.RCURL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elsestat() {
	    let localctx = new ElsestatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SkolensParser.RULE_elsestat);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.match(SkolensParser.ELSE);
	        this.state = 47;
	        this.match(SkolensParser.LCURL);
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 260224) !== 0)) {
	            this.state = 48;
	            this.stat();
	            this.state = 53;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 54;
	        this.match(SkolensParser.RCURL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	teikt() {
	    let localctx = new TeiktContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SkolensParser.RULE_teikt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(SkolensParser.PRINT);
	        this.state = 57;
	        this.expr(0);
	        this.state = 58;
	        this.match(SkolensParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assign() {
	    let localctx = new AssignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SkolensParser.RULE_assign);
	    try {
	        this.state = 71;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 60;
	            this.match(SkolensParser.ID);
	            this.state = 61;
	            this.match(SkolensParser.EQ);
	            this.state = 62;
	            this.expr(0);
	            this.state = 63;
	            this.match(SkolensParser.SEMI);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 65;
	            this.type();
	            this.state = 66;
	            this.match(SkolensParser.ID);
	            this.state = 67;
	            this.match(SkolensParser.EQ);
	            this.state = 68;
	            this.expr(0);
	            this.state = 69;
	            this.match(SkolensParser.SEMI);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 12;
	    this.enterRecursionRule(localctx, 12, SkolensParser.RULE_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            this.state = 74;
	            this.match(SkolensParser.ID);
	            break;
	        case 16:
	            this.state = 75;
	            this.match(SkolensParser.INT);
	            break;
	        case 15:
	            this.state = 76;
	            this.match(SkolensParser.STRING);
	            break;
	        case 14:
	            this.state = 77;
	            this.match(SkolensParser.BOOL);
	            break;
	        case 7:
	            this.state = 78;
	            this.match(SkolensParser.LPAREN);
	            this.state = 79;
	            this.expr(0);
	            this.state = 80;
	            this.match(SkolensParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 98;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 96;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, SkolensParser.RULE_expr);
	                    this.state = 84;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 85;
	                    this.match(SkolensParser.MUL);
	                    this.state = 86;
	                    this.expr(5);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, SkolensParser.RULE_expr);
	                    this.state = 87;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 88;
	                    this.match(SkolensParser.DIV);
	                    this.state = 89;
	                    this.expr(4);
	                    break;

	                case 3:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, SkolensParser.RULE_expr);
	                    this.state = 90;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 91;
	                    this.match(SkolensParser.ADD);
	                    this.state = 92;
	                    this.expr(3);
	                    break;

	                case 4:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, SkolensParser.RULE_expr);
	                    this.state = 93;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 94;
	                    this.match(SkolensParser.SUB);
	                    this.state = 95;
	                    this.expr(2);
	                    break;

	                } 
	            }
	            this.state = 100;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SkolensParser.RULE_type);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(SkolensParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

SkolensParser.EOF = antlr4.Token.EOF;
SkolensParser.EQ = 1;
SkolensParser.SEMI = 2;
SkolensParser.ADD = 3;
SkolensParser.SUB = 4;
SkolensParser.MUL = 5;
SkolensParser.DIV = 6;
SkolensParser.LPAREN = 7;
SkolensParser.RPAREN = 8;
SkolensParser.LCURL = 9;
SkolensParser.RCURL = 10;
SkolensParser.PRINT = 11;
SkolensParser.IF = 12;
SkolensParser.ELSE = 13;
SkolensParser.BOOL = 14;
SkolensParser.STRING = 15;
SkolensParser.INT = 16;
SkolensParser.ID = 17;
SkolensParser.WS = 18;
SkolensParser.COMMENT = 19;

SkolensParser.RULE_program = 0;
SkolensParser.RULE_stat = 1;
SkolensParser.RULE_ifstat = 2;
SkolensParser.RULE_elsestat = 3;
SkolensParser.RULE_teikt = 4;
SkolensParser.RULE_assign = 5;
SkolensParser.RULE_expr = 6;
SkolensParser.RULE_type = 7;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SkolensParser.RULE_program;
    }

	EOF() {
	    return this.getToken(SkolensParser.EOF, 0);
	};

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SkolensParser.RULE_stat;
    }

	ifstat() {
	    return this.getTypedRuleContext(IfstatContext,0);
	};

	elsestat() {
	    return this.getTypedRuleContext(ElsestatContext,0);
	};

	teikt() {
	    return this.getTypedRuleContext(TeiktContext,0);
	};

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	SEMI() {
	    return this.getToken(SkolensParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.enterStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfstatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SkolensParser.RULE_ifstat;
    }

	IF() {
	    return this.getToken(SkolensParser.IF, 0);
	};

	LPAREN() {
	    return this.getToken(SkolensParser.LPAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RPAREN() {
	    return this.getToken(SkolensParser.RPAREN, 0);
	};

	LCURL() {
	    return this.getToken(SkolensParser.LCURL, 0);
	};

	RCURL() {
	    return this.getToken(SkolensParser.RCURL, 0);
	};

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.enterIfstat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitIfstat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitIfstat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElsestatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SkolensParser.RULE_elsestat;
    }

	ELSE() {
	    return this.getToken(SkolensParser.ELSE, 0);
	};

	LCURL() {
	    return this.getToken(SkolensParser.LCURL, 0);
	};

	RCURL() {
	    return this.getToken(SkolensParser.RCURL, 0);
	};

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.enterElsestat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitElsestat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitElsestat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TeiktContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SkolensParser.RULE_teikt;
    }

	PRINT() {
	    return this.getToken(SkolensParser.PRINT, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	SEMI() {
	    return this.getToken(SkolensParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.enterTeikt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitTeikt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitTeikt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SkolensParser.RULE_assign;
    }

	ID() {
	    return this.getToken(SkolensParser.ID, 0);
	};

	EQ() {
	    return this.getToken(SkolensParser.EQ, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	SEMI() {
	    return this.getToken(SkolensParser.SEMI, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.enterAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitAssign(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SkolensParser.RULE_expr;
    }

	ID() {
	    return this.getToken(SkolensParser.ID, 0);
	};

	INT() {
	    return this.getToken(SkolensParser.INT, 0);
	};

	STRING() {
	    return this.getToken(SkolensParser.STRING, 0);
	};

	BOOL() {
	    return this.getToken(SkolensParser.BOOL, 0);
	};

	LPAREN() {
	    return this.getToken(SkolensParser.LPAREN, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	RPAREN() {
	    return this.getToken(SkolensParser.RPAREN, 0);
	};

	MUL() {
	    return this.getToken(SkolensParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(SkolensParser.DIV, 0);
	};

	ADD() {
	    return this.getToken(SkolensParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(SkolensParser.SUB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SkolensParser.RULE_type;
    }

	ID() {
	    return this.getToken(SkolensParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.enterType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitType(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




SkolensParser.ProgramContext = ProgramContext; 
SkolensParser.StatContext = StatContext; 
SkolensParser.IfstatContext = IfstatContext; 
SkolensParser.ElsestatContext = ElsestatContext; 
SkolensParser.TeiktContext = TeiktContext; 
SkolensParser.AssignContext = AssignContext; 
SkolensParser.ExprContext = ExprContext; 
SkolensParser.TypeContext = TypeContext; 
