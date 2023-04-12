// Generated from grammars/Skolens.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import SkolensListener from './SkolensListener.js';
import SkolensVisitor from './SkolensVisitor.js';

const serializedATN = [4,1,31,143,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,5,0,22,8,0,10,0,12,0,25,9,
0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,35,8,1,1,2,1,2,5,2,39,8,2,10,2,12,
2,42,9,2,1,2,3,2,45,8,2,1,3,1,3,1,3,1,3,1,3,1,3,5,3,53,8,3,10,3,12,3,56,
9,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,67,8,4,10,4,12,4,70,9,4,1,4,
1,4,1,5,1,5,1,5,5,5,77,8,5,10,5,12,5,80,9,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,
1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,99,8,7,1,8,1,8,1,8,1,8,1,8,1,
8,1,8,1,8,1,8,3,8,110,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,
8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,136,8,8,10,8,12,8,
139,9,8,1,9,1,9,1,9,0,1,16,10,0,2,4,6,8,10,12,14,16,18,0,4,2,0,5,6,8,8,1,
0,3,4,1,0,15,18,1,0,13,14,154,0,23,1,0,0,0,2,34,1,0,0,0,4,36,1,0,0,0,6,46,
1,0,0,0,8,59,1,0,0,0,10,73,1,0,0,0,12,83,1,0,0,0,14,98,1,0,0,0,16,109,1,
0,0,0,18,140,1,0,0,0,20,22,3,2,1,0,21,20,1,0,0,0,22,25,1,0,0,0,23,21,1,0,
0,0,23,24,1,0,0,0,24,26,1,0,0,0,25,23,1,0,0,0,26,27,5,0,0,1,27,1,1,0,0,0,
28,35,3,4,2,0,29,35,3,12,6,0,30,35,3,14,7,0,31,32,3,16,8,0,32,33,5,2,0,0,
33,35,1,0,0,0,34,28,1,0,0,0,34,29,1,0,0,0,34,30,1,0,0,0,34,31,1,0,0,0,35,
3,1,0,0,0,36,40,3,6,3,0,37,39,3,8,4,0,38,37,1,0,0,0,39,42,1,0,0,0,40,38,
1,0,0,0,40,41,1,0,0,0,41,44,1,0,0,0,42,40,1,0,0,0,43,45,3,10,5,0,44,43,1,
0,0,0,44,45,1,0,0,0,45,5,1,0,0,0,46,47,5,24,0,0,47,48,5,9,0,0,48,49,3,16,
8,0,49,50,5,10,0,0,50,54,5,11,0,0,51,53,3,2,1,0,52,51,1,0,0,0,53,56,1,0,
0,0,54,52,1,0,0,0,54,55,1,0,0,0,55,57,1,0,0,0,56,54,1,0,0,0,57,58,5,12,0,
0,58,7,1,0,0,0,59,60,5,25,0,0,60,61,5,24,0,0,61,62,5,9,0,0,62,63,3,16,8,
0,63,64,5,10,0,0,64,68,5,11,0,0,65,67,3,2,1,0,66,65,1,0,0,0,67,70,1,0,0,
0,68,66,1,0,0,0,68,69,1,0,0,0,69,71,1,0,0,0,70,68,1,0,0,0,71,72,5,12,0,0,
72,9,1,0,0,0,73,74,5,25,0,0,74,78,5,11,0,0,75,77,3,2,1,0,76,75,1,0,0,0,77,
80,1,0,0,0,78,76,1,0,0,0,78,79,1,0,0,0,79,81,1,0,0,0,80,78,1,0,0,0,81,82,
5,12,0,0,82,11,1,0,0,0,83,84,5,23,0,0,84,85,3,16,8,0,85,86,5,2,0,0,86,13,
1,0,0,0,87,88,5,29,0,0,88,89,5,1,0,0,89,90,3,16,8,0,90,91,5,2,0,0,91,99,
1,0,0,0,92,93,3,18,9,0,93,94,5,29,0,0,94,95,5,1,0,0,95,96,3,16,8,0,96,97,
5,2,0,0,97,99,1,0,0,0,98,87,1,0,0,0,98,92,1,0,0,0,99,15,1,0,0,0,100,101,
6,8,-1,0,101,110,5,29,0,0,102,110,5,28,0,0,103,110,5,27,0,0,104,110,5,26,
0,0,105,106,5,9,0,0,106,107,3,16,8,0,107,108,5,10,0,0,108,110,1,0,0,0,109,
100,1,0,0,0,109,102,1,0,0,0,109,103,1,0,0,0,109,104,1,0,0,0,109,105,1,0,
0,0,110,137,1,0,0,0,111,112,10,8,0,0,112,113,5,19,0,0,113,136,3,16,8,9,114,
115,10,7,0,0,115,116,5,20,0,0,116,136,3,16,8,8,117,118,10,6,0,0,118,119,
5,7,0,0,119,136,3,16,8,7,120,121,10,5,0,0,121,122,7,0,0,0,122,136,3,16,8,
6,123,124,10,4,0,0,124,125,7,1,0,0,125,136,3,16,8,5,126,127,10,3,0,0,127,
128,7,2,0,0,128,136,3,16,8,4,129,130,10,2,0,0,130,131,7,3,0,0,131,136,3,
16,8,3,132,133,10,1,0,0,133,134,5,21,0,0,134,136,3,16,8,2,135,111,1,0,0,
0,135,114,1,0,0,0,135,117,1,0,0,0,135,120,1,0,0,0,135,123,1,0,0,0,135,126,
1,0,0,0,135,129,1,0,0,0,135,132,1,0,0,0,136,139,1,0,0,0,137,135,1,0,0,0,
137,138,1,0,0,0,138,17,1,0,0,0,139,137,1,0,0,0,140,141,5,29,0,0,141,19,1,
0,0,0,11,23,34,40,44,54,68,78,98,109,135,137];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SkolensParser extends antlr4.Parser {

    static grammarFileName = "Skolens.g4";
    static literalNames = [ null, "'='", "';'", "'+'", "'-'", "'*'", "'/'", 
                            "'^'", "'%'", "'('", "')'", "'{'", "'}'", "'=='", 
                            "'!='", "'<'", "'<='", "'>'", "'>='", "'un'", 
                            "'vai'", "'..'", "'.'", "'teikt '", "'ja'", 
                            "'citadi'" ];
    static symbolicNames = [ null, "ASSIGN", "SEMI", "ADD", "SUB", "MUL", 
                             "DIV", "EXP", "MOD", "LPAREN", "RPAREN", "LCURL", 
                             "RCURL", "EQ", "NOTEQ", "LESS", "LESSEQ", "LARG", 
                             "LARGEQ", "AND", "OR", "CONCAT", "DOT", "PRINT", 
                             "IF", "ELSE", "BOOL", "STRING", "NUM", "ID", 
                             "WS", "COMMENT" ];
    static ruleNames = [ "program", "stat", "conditionalStat", "ifStat", 
                         "elseIfStat", "elseStat", "teikt", "assign", "expr", 
                         "type" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SkolensParser.ruleNames;
        this.literalNames = SkolensParser.literalNames;
        this.symbolicNames = SkolensParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 8:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 8);
    		case 1:
    			return this.precpred(this._ctx, 7);
    		case 2:
    			return this.precpred(this._ctx, 6);
    		case 3:
    			return this.precpred(this._ctx, 5);
    		case 4:
    			return this.precpred(this._ctx, 4);
    		case 5:
    			return this.precpred(this._ctx, 3);
    		case 6:
    			return this.precpred(this._ctx, 2);
    		case 7:
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
	        this.state = 23;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1031799296) !== 0)) {
	            this.state = 20;
	            this.stat();
	            this.state = 25;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 26;
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
	        this.state = 34;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 28;
	            this.conditionalStat();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 29;
	            this.teikt();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 30;
	            this.assign();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 31;
	            this.expr(0);
	            this.state = 32;
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



	conditionalStat() {
	    let localctx = new ConditionalStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SkolensParser.RULE_conditionalStat);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.ifStat();
	        this.state = 40;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 37;
	                this.elseIfStat(); 
	            }
	            this.state = 42;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===25) {
	            this.state = 43;
	            this.elseStat();
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



	ifStat() {
	    let localctx = new IfStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SkolensParser.RULE_ifStat);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.match(SkolensParser.IF);
	        this.state = 47;
	        this.match(SkolensParser.LPAREN);
	        this.state = 48;
	        this.expr(0);
	        this.state = 49;
	        this.match(SkolensParser.RPAREN);
	        this.state = 50;
	        this.match(SkolensParser.LCURL);
	        this.state = 54;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1031799296) !== 0)) {
	            this.state = 51;
	            this.stat();
	            this.state = 56;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 57;
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



	elseIfStat() {
	    let localctx = new ElseIfStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SkolensParser.RULE_elseIfStat);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(SkolensParser.ELSE);
	        this.state = 60;
	        this.match(SkolensParser.IF);
	        this.state = 61;
	        this.match(SkolensParser.LPAREN);
	        this.state = 62;
	        this.expr(0);
	        this.state = 63;
	        this.match(SkolensParser.RPAREN);
	        this.state = 64;
	        this.match(SkolensParser.LCURL);
	        this.state = 68;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1031799296) !== 0)) {
	            this.state = 65;
	            this.stat();
	            this.state = 70;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 71;
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



	elseStat() {
	    let localctx = new ElseStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SkolensParser.RULE_elseStat);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(SkolensParser.ELSE);
	        this.state = 74;
	        this.match(SkolensParser.LCURL);
	        this.state = 78;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1031799296) !== 0)) {
	            this.state = 75;
	            this.stat();
	            this.state = 80;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 81;
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
	    this.enterRule(localctx, 12, SkolensParser.RULE_teikt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.match(SkolensParser.PRINT);
	        this.state = 84;
	        this.expr(0);
	        this.state = 85;
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
	    this.enterRule(localctx, 14, SkolensParser.RULE_assign);
	    try {
	        this.state = 98;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 87;
	            this.match(SkolensParser.ID);
	            this.state = 88;
	            this.match(SkolensParser.ASSIGN);
	            this.state = 89;
	            this.expr(0);
	            this.state = 90;
	            this.match(SkolensParser.SEMI);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 92;
	            this.type();
	            this.state = 93;
	            this.match(SkolensParser.ID);
	            this.state = 94;
	            this.match(SkolensParser.ASSIGN);
	            this.state = 95;
	            this.expr(0);
	            this.state = 96;
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
	    const _startState = 16;
	    this.enterRecursionRule(localctx, 16, SkolensParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 29:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 101;
	            this.match(SkolensParser.ID);
	            break;
	        case 28:
	            localctx = new NumContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 102;
	            this.match(SkolensParser.NUM);
	            break;
	        case 27:
	            localctx = new StringContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 103;
	            this.match(SkolensParser.STRING);
	            break;
	        case 26:
	            localctx = new BoolContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 104;
	            this.match(SkolensParser.BOOL);
	            break;
	        case 9:
	            localctx = new ParenContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 105;
	            this.match(SkolensParser.LPAREN);
	            this.state = 106;
	            this.expr(0);
	            this.state = 107;
	            this.match(SkolensParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 137;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 135;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new LogicOpContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, SkolensParser.RULE_expr);
	                    this.state = 111;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 112;
	                    this.match(SkolensParser.AND);
	                    this.state = 113;
	                    this.expr(9);
	                    break;

	                case 2:
	                    localctx = new LogicOpContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, SkolensParser.RULE_expr);
	                    this.state = 114;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 115;
	                    this.match(SkolensParser.OR);
	                    this.state = 116;
	                    this.expr(8);
	                    break;

	                case 3:
	                    localctx = new MathOpContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, SkolensParser.RULE_expr);
	                    this.state = 117;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 118;
	                    this.match(SkolensParser.EXP);
	                    this.state = 119;
	                    this.expr(7);
	                    break;

	                case 4:
	                    localctx = new MathOpContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, SkolensParser.RULE_expr);
	                    this.state = 120;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 121;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 352) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 122;
	                    this.expr(6);
	                    break;

	                case 5:
	                    localctx = new MathOpContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, SkolensParser.RULE_expr);
	                    this.state = 123;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 124;
	                    _la = this._input.LA(1);
	                    if(!(_la===3 || _la===4)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 125;
	                    this.expr(5);
	                    break;

	                case 6:
	                    localctx = new CompOpContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, SkolensParser.RULE_expr);
	                    this.state = 126;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 127;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 491520) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 128;
	                    this.expr(4);
	                    break;

	                case 7:
	                    localctx = new EqualityOpContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, SkolensParser.RULE_expr);
	                    this.state = 129;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 130;
	                    _la = this._input.LA(1);
	                    if(!(_la===13 || _la===14)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 131;
	                    this.expr(3);
	                    break;

	                case 8:
	                    localctx = new ConcatOpContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, SkolensParser.RULE_expr);
	                    this.state = 132;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 133;
	                    this.match(SkolensParser.CONCAT);
	                    this.state = 134;
	                    this.expr(2);
	                    break;

	                } 
	            }
	            this.state = 139;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
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
	    this.enterRule(localctx, 18, SkolensParser.RULE_type);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
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
SkolensParser.ASSIGN = 1;
SkolensParser.SEMI = 2;
SkolensParser.ADD = 3;
SkolensParser.SUB = 4;
SkolensParser.MUL = 5;
SkolensParser.DIV = 6;
SkolensParser.EXP = 7;
SkolensParser.MOD = 8;
SkolensParser.LPAREN = 9;
SkolensParser.RPAREN = 10;
SkolensParser.LCURL = 11;
SkolensParser.RCURL = 12;
SkolensParser.EQ = 13;
SkolensParser.NOTEQ = 14;
SkolensParser.LESS = 15;
SkolensParser.LESSEQ = 16;
SkolensParser.LARG = 17;
SkolensParser.LARGEQ = 18;
SkolensParser.AND = 19;
SkolensParser.OR = 20;
SkolensParser.CONCAT = 21;
SkolensParser.DOT = 22;
SkolensParser.PRINT = 23;
SkolensParser.IF = 24;
SkolensParser.ELSE = 25;
SkolensParser.BOOL = 26;
SkolensParser.STRING = 27;
SkolensParser.NUM = 28;
SkolensParser.ID = 29;
SkolensParser.WS = 30;
SkolensParser.COMMENT = 31;

SkolensParser.RULE_program = 0;
SkolensParser.RULE_stat = 1;
SkolensParser.RULE_conditionalStat = 2;
SkolensParser.RULE_ifStat = 3;
SkolensParser.RULE_elseIfStat = 4;
SkolensParser.RULE_elseStat = 5;
SkolensParser.RULE_teikt = 6;
SkolensParser.RULE_assign = 7;
SkolensParser.RULE_expr = 8;
SkolensParser.RULE_type = 9;

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

	conditionalStat() {
	    return this.getTypedRuleContext(ConditionalStatContext,0);
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



class ConditionalStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SkolensParser.RULE_conditionalStat;
    }

	ifStat() {
	    return this.getTypedRuleContext(IfStatContext,0);
	};

	elseIfStat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElseIfStatContext);
	    } else {
	        return this.getTypedRuleContext(ElseIfStatContext,i);
	    }
	};

	elseStat() {
	    return this.getTypedRuleContext(ElseStatContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.enterConditionalStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitConditionalStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitConditionalStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SkolensParser.RULE_ifStat;
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
	        listener.enterIfStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitIfStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitIfStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElseIfStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SkolensParser.RULE_elseIfStat;
    }

	ELSE() {
	    return this.getToken(SkolensParser.ELSE, 0);
	};

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
	        listener.enterElseIfStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitElseIfStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitElseIfStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElseStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SkolensParser.RULE_elseStat;
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
	        listener.enterElseStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitElseStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitElseStat(this);
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

	ASSIGN() {
	    return this.getToken(SkolensParser.ASSIGN, 0);
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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class CompOpContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

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

	LESS() {
	    return this.getToken(SkolensParser.LESS, 0);
	};

	LESSEQ() {
	    return this.getToken(SkolensParser.LESSEQ, 0);
	};

	LARG() {
	    return this.getToken(SkolensParser.LARG, 0);
	};

	LARGEQ() {
	    return this.getToken(SkolensParser.LARGEQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.enterCompOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitCompOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitCompOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SkolensParser.CompOpContext = CompOpContext;

class BoolContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BOOL() {
	    return this.getToken(SkolensParser.BOOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.enterBool(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitBool(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitBool(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SkolensParser.BoolContext = BoolContext;

class NumContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUM() {
	    return this.getToken(SkolensParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.enterNum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitNum(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitNum(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SkolensParser.NumContext = NumContext;

class IdContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(SkolensParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.enterId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitId(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SkolensParser.IdContext = IdContext;

class StringContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(SkolensParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitString(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SkolensParser.StringContext = StringContext;

class MathOpContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

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

	EXP() {
	    return this.getToken(SkolensParser.EXP, 0);
	};

	MUL() {
	    return this.getToken(SkolensParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(SkolensParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(SkolensParser.MOD, 0);
	};

	ADD() {
	    return this.getToken(SkolensParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(SkolensParser.SUB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.enterMathOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitMathOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitMathOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SkolensParser.MathOpContext = MathOpContext;

class EqualityOpContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

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

	EQ() {
	    return this.getToken(SkolensParser.EQ, 0);
	};

	NOTEQ() {
	    return this.getToken(SkolensParser.NOTEQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.enterEqualityOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitEqualityOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitEqualityOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SkolensParser.EqualityOpContext = EqualityOpContext;

class ConcatOpContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

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

	CONCAT() {
	    return this.getToken(SkolensParser.CONCAT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.enterConcatOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitConcatOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitConcatOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SkolensParser.ConcatOpContext = ConcatOpContext;

class ParenContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(SkolensParser.LPAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RPAREN() {
	    return this.getToken(SkolensParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.enterParen(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitParen(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitParen(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SkolensParser.ParenContext = ParenContext;

class LogicOpContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

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

	AND() {
	    return this.getToken(SkolensParser.AND, 0);
	};

	OR() {
	    return this.getToken(SkolensParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.enterLogicOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitLogicOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitLogicOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SkolensParser.LogicOpContext = LogicOpContext;

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
SkolensParser.ConditionalStatContext = ConditionalStatContext; 
SkolensParser.IfStatContext = IfStatContext; 
SkolensParser.ElseIfStatContext = ElseIfStatContext; 
SkolensParser.ElseStatContext = ElseStatContext; 
SkolensParser.TeiktContext = TeiktContext; 
SkolensParser.AssignContext = AssignContext; 
SkolensParser.ExprContext = ExprContext; 
SkolensParser.TypeContext = TypeContext; 
