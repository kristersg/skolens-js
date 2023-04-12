// Generated from grammars/Skolens.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import SkolensListener from './SkolensListener.js';
import SkolensVisitor from './SkolensVisitor.js';

const serializedATN = [4,1,38,202,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,5,0,24,8,0,10,0,
12,0,27,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,38,8,1,1,2,1,2,5,2,42,
8,2,10,2,12,2,45,9,2,1,2,3,2,48,8,2,1,3,1,3,1,3,1,3,1,3,1,3,5,3,56,8,3,10,
3,12,3,59,9,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,70,8,4,10,4,12,4,73,
9,4,1,4,1,4,1,5,1,5,1,5,5,5,80,8,5,10,5,12,5,83,9,5,1,5,1,5,1,6,1,6,1,6,
1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,117,8,7,1,8,1,8,1,8,1,8,1,8,1,8,
1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,138,8,8,1,9,1,9,
1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,149,8,9,10,9,12,9,152,9,9,3,9,154,8,9,1,
9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,169,8,9,1,9,1,9,1,
9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,
9,1,9,1,9,1,9,5,9,195,8,9,10,9,12,9,198,9,9,1,10,1,10,1,10,0,1,18,11,0,2,
4,6,8,10,12,14,16,18,20,0,4,2,0,5,6,8,8,1,0,3,4,1,0,17,20,1,0,15,16,221,
0,25,1,0,0,0,2,37,1,0,0,0,4,39,1,0,0,0,6,49,1,0,0,0,8,62,1,0,0,0,10,76,1,
0,0,0,12,86,1,0,0,0,14,116,1,0,0,0,16,137,1,0,0,0,18,168,1,0,0,0,20,199,
1,0,0,0,22,24,3,2,1,0,23,22,1,0,0,0,24,27,1,0,0,0,25,23,1,0,0,0,25,26,1,
0,0,0,26,28,1,0,0,0,27,25,1,0,0,0,28,29,5,0,0,1,29,1,1,0,0,0,30,38,3,4,2,
0,31,38,3,12,6,0,32,38,3,14,7,0,33,38,3,16,8,0,34,35,3,18,9,0,35,36,5,2,
0,0,36,38,1,0,0,0,37,30,1,0,0,0,37,31,1,0,0,0,37,32,1,0,0,0,37,33,1,0,0,
0,37,34,1,0,0,0,38,3,1,0,0,0,39,43,3,6,3,0,40,42,3,8,4,0,41,40,1,0,0,0,42,
45,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,47,1,0,0,0,45,43,1,0,0,0,46,48,
3,10,5,0,47,46,1,0,0,0,47,48,1,0,0,0,48,5,1,0,0,0,49,50,5,31,0,0,50,51,5,
9,0,0,51,52,3,18,9,0,52,53,5,10,0,0,53,57,5,11,0,0,54,56,3,2,1,0,55,54,1,
0,0,0,56,59,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,60,1,0,0,0,59,57,1,0,
0,0,60,61,5,12,0,0,61,7,1,0,0,0,62,63,5,32,0,0,63,64,5,31,0,0,64,65,5,9,
0,0,65,66,3,18,9,0,66,67,5,10,0,0,67,71,5,11,0,0,68,70,3,2,1,0,69,68,1,0,
0,0,70,73,1,0,0,0,71,69,1,0,0,0,71,72,1,0,0,0,72,74,1,0,0,0,73,71,1,0,0,
0,74,75,5,12,0,0,75,9,1,0,0,0,76,77,5,32,0,0,77,81,5,11,0,0,78,80,3,2,1,
0,79,78,1,0,0,0,80,83,1,0,0,0,81,79,1,0,0,0,81,82,1,0,0,0,82,84,1,0,0,0,
83,81,1,0,0,0,84,85,5,12,0,0,85,11,1,0,0,0,86,87,5,30,0,0,87,88,3,18,9,0,
88,89,5,2,0,0,89,13,1,0,0,0,90,91,5,36,0,0,91,92,5,24,0,0,92,93,5,26,0,0,
93,94,5,9,0,0,94,95,3,18,9,0,95,96,5,10,0,0,96,97,5,2,0,0,97,117,1,0,0,0,
98,99,5,36,0,0,99,100,5,24,0,0,100,101,5,27,0,0,101,102,5,9,0,0,102,103,
3,18,9,0,103,104,5,10,0,0,104,105,5,2,0,0,105,117,1,0,0,0,106,107,5,36,0,
0,107,108,5,24,0,0,108,109,5,28,0,0,109,110,5,9,0,0,110,111,3,18,9,0,111,
112,5,25,0,0,112,113,3,18,9,0,113,114,5,10,0,0,114,115,5,2,0,0,115,117,1,
0,0,0,116,90,1,0,0,0,116,98,1,0,0,0,116,106,1,0,0,0,117,15,1,0,0,0,118,119,
5,36,0,0,119,120,5,13,0,0,120,121,3,18,9,0,121,122,5,14,0,0,122,123,5,1,
0,0,123,124,3,18,9,0,124,125,5,2,0,0,125,138,1,0,0,0,126,127,5,36,0,0,127,
128,5,1,0,0,128,129,3,18,9,0,129,130,5,2,0,0,130,138,1,0,0,0,131,132,3,20,
10,0,132,133,5,36,0,0,133,134,5,1,0,0,134,135,3,18,9,0,135,136,5,2,0,0,136,
138,1,0,0,0,137,118,1,0,0,0,137,126,1,0,0,0,137,131,1,0,0,0,138,17,1,0,0,
0,139,140,6,9,-1,0,140,169,5,36,0,0,141,169,5,35,0,0,142,169,5,34,0,0,143,
169,5,33,0,0,144,153,5,13,0,0,145,150,3,18,9,0,146,147,5,25,0,0,147,149,
3,18,9,0,148,146,1,0,0,0,149,152,1,0,0,0,150,148,1,0,0,0,150,151,1,0,0,0,
151,154,1,0,0,0,152,150,1,0,0,0,153,145,1,0,0,0,153,154,1,0,0,0,154,155,
1,0,0,0,155,169,5,14,0,0,156,157,5,36,0,0,157,158,5,13,0,0,158,159,3,18,
9,0,159,160,5,14,0,0,160,169,1,0,0,0,161,162,5,36,0,0,162,163,5,24,0,0,163,
169,5,29,0,0,164,165,5,9,0,0,165,166,3,18,9,0,166,167,5,10,0,0,167,169,1,
0,0,0,168,139,1,0,0,0,168,141,1,0,0,0,168,142,1,0,0,0,168,143,1,0,0,0,168,
144,1,0,0,0,168,156,1,0,0,0,168,161,1,0,0,0,168,164,1,0,0,0,169,196,1,0,
0,0,170,171,10,8,0,0,171,172,5,21,0,0,172,195,3,18,9,9,173,174,10,7,0,0,
174,175,5,22,0,0,175,195,3,18,9,8,176,177,10,6,0,0,177,178,5,7,0,0,178,195,
3,18,9,7,179,180,10,5,0,0,180,181,7,0,0,0,181,195,3,18,9,6,182,183,10,4,
0,0,183,184,7,1,0,0,184,195,3,18,9,5,185,186,10,3,0,0,186,187,7,2,0,0,187,
195,3,18,9,4,188,189,10,2,0,0,189,190,7,3,0,0,190,195,3,18,9,3,191,192,10,
1,0,0,192,193,5,23,0,0,193,195,3,18,9,2,194,170,1,0,0,0,194,173,1,0,0,0,
194,176,1,0,0,0,194,179,1,0,0,0,194,182,1,0,0,0,194,185,1,0,0,0,194,188,
1,0,0,0,194,191,1,0,0,0,195,198,1,0,0,0,196,194,1,0,0,0,196,197,1,0,0,0,
197,19,1,0,0,0,198,196,1,0,0,0,199,200,5,36,0,0,200,21,1,0,0,0,14,25,37,
43,47,57,71,81,116,137,150,153,168,194,196];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SkolensParser extends antlr4.Parser {

    static grammarFileName = "Skolens.g4";
    static literalNames = [ null, "'='", "';'", "'+'", "'-'", "'*'", "'/'", 
                            "'^'", "'%'", "'('", "')'", "'{'", "'}'", "'['", 
                            "']'", "'=='", "'!='", "'<'", "'<='", "'>'", 
                            "'>='", "'un'", "'vai'", "'..'", "'.'", "','", 
                            "'pievienot'", "'dz\\u0113st'", "'ievietot'", 
                            "'garums'", "'teikt'", "'ja'", "'cit\\u0101di'" ];
    static symbolicNames = [ null, "ASSIGN", "SEMI", "ADD", "SUB", "MUL", 
                             "DIV", "EXP", "MOD", "LPAREN", "RPAREN", "LCURL", 
                             "RCURL", "LBRAC", "RBRAC", "EQ", "NOTEQ", "LESS", 
                             "LESSEQ", "LARG", "LARGEQ", "AND", "OR", "CONCAT", 
                             "DOT", "COMMA", "PIEVIENOT", "DZEST", "IEVIETOT", 
                             "GARUMS", "PRINT", "IF", "ELSE", "BOOL", "STRING", 
                             "NUM", "ID", "WS", "COMMENT" ];
    static ruleNames = [ "program", "stat", "conditionalStat", "ifStat", 
                         "elseIfStat", "elseStat", "teikt", "variableMethodCalls", 
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
    	case 9:
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
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 9)) & ~0x1f) === 0 && ((1 << (_la - 9)) & 257949713) !== 0)) {
	            this.state = 22;
	            this.stat();
	            this.state = 27;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 28;
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
	        this.state = 37;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 30;
	            this.conditionalStat();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 31;
	            this.teikt();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 32;
	            this.variableMethodCalls();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 33;
	            this.assign();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 34;
	            this.expr(0);
	            this.state = 35;
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
	        this.state = 39;
	        this.ifStat();
	        this.state = 43;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 40;
	                this.elseIfStat(); 
	            }
	            this.state = 45;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32) {
	            this.state = 46;
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
	        this.state = 49;
	        this.match(SkolensParser.IF);
	        this.state = 50;
	        this.match(SkolensParser.LPAREN);
	        this.state = 51;
	        this.expr(0);
	        this.state = 52;
	        this.match(SkolensParser.RPAREN);
	        this.state = 53;
	        this.match(SkolensParser.LCURL);
	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 9)) & ~0x1f) === 0 && ((1 << (_la - 9)) & 257949713) !== 0)) {
	            this.state = 54;
	            this.stat();
	            this.state = 59;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 60;
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
	        this.state = 62;
	        this.match(SkolensParser.ELSE);
	        this.state = 63;
	        this.match(SkolensParser.IF);
	        this.state = 64;
	        this.match(SkolensParser.LPAREN);
	        this.state = 65;
	        this.expr(0);
	        this.state = 66;
	        this.match(SkolensParser.RPAREN);
	        this.state = 67;
	        this.match(SkolensParser.LCURL);
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 9)) & ~0x1f) === 0 && ((1 << (_la - 9)) & 257949713) !== 0)) {
	            this.state = 68;
	            this.stat();
	            this.state = 73;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 74;
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
	        this.state = 76;
	        this.match(SkolensParser.ELSE);
	        this.state = 77;
	        this.match(SkolensParser.LCURL);
	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 9)) & ~0x1f) === 0 && ((1 << (_la - 9)) & 257949713) !== 0)) {
	            this.state = 78;
	            this.stat();
	            this.state = 83;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 84;
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
	        this.state = 86;
	        this.match(SkolensParser.PRINT);
	        this.state = 87;
	        this.expr(0);
	        this.state = 88;
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



	variableMethodCalls() {
	    let localctx = new VariableMethodCallsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SkolensParser.RULE_variableMethodCalls);
	    try {
	        this.state = 116;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ListAddContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 90;
	            this.match(SkolensParser.ID);
	            this.state = 91;
	            this.match(SkolensParser.DOT);
	            this.state = 92;
	            this.match(SkolensParser.PIEVIENOT);
	            this.state = 93;
	            this.match(SkolensParser.LPAREN);
	            this.state = 94;
	            this.expr(0);
	            this.state = 95;
	            this.match(SkolensParser.RPAREN);
	            this.state = 96;
	            this.match(SkolensParser.SEMI);
	            break;

	        case 2:
	            localctx = new ListRemoveContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 98;
	            this.match(SkolensParser.ID);
	            this.state = 99;
	            this.match(SkolensParser.DOT);
	            this.state = 100;
	            this.match(SkolensParser.DZEST);
	            this.state = 101;
	            this.match(SkolensParser.LPAREN);
	            this.state = 102;
	            this.expr(0);
	            this.state = 103;
	            this.match(SkolensParser.RPAREN);
	            this.state = 104;
	            this.match(SkolensParser.SEMI);
	            break;

	        case 3:
	            localctx = new ListInsertContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 106;
	            this.match(SkolensParser.ID);
	            this.state = 107;
	            this.match(SkolensParser.DOT);
	            this.state = 108;
	            this.match(SkolensParser.IEVIETOT);
	            this.state = 109;
	            this.match(SkolensParser.LPAREN);
	            this.state = 110;
	            this.expr(0);
	            this.state = 111;
	            this.match(SkolensParser.COMMA);
	            this.state = 112;
	            this.expr(0);
	            this.state = 113;
	            this.match(SkolensParser.RPAREN);
	            this.state = 114;
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



	assign() {
	    let localctx = new AssignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, SkolensParser.RULE_assign);
	    try {
	        this.state = 137;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ListAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 118;
	            this.match(SkolensParser.ID);
	            this.state = 119;
	            this.match(SkolensParser.LBRAC);
	            this.state = 120;
	            this.expr(0);
	            this.state = 121;
	            this.match(SkolensParser.RBRAC);
	            this.state = 122;
	            this.match(SkolensParser.ASSIGN);
	            this.state = 123;
	            this.expr(0);
	            this.state = 124;
	            this.match(SkolensParser.SEMI);
	            break;

	        case 2:
	            localctx = new ReAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 126;
	            this.match(SkolensParser.ID);
	            this.state = 127;
	            this.match(SkolensParser.ASSIGN);
	            this.state = 128;
	            this.expr(0);
	            this.state = 129;
	            this.match(SkolensParser.SEMI);
	            break;

	        case 3:
	            localctx = new NewAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 131;
	            this.type();
	            this.state = 132;
	            this.match(SkolensParser.ID);
	            this.state = 133;
	            this.match(SkolensParser.ASSIGN);
	            this.state = 134;
	            this.expr(0);
	            this.state = 135;
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
	    const _startState = 18;
	    this.enterRecursionRule(localctx, 18, SkolensParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 140;
	            this.match(SkolensParser.ID);
	            break;

	        case 2:
	            localctx = new NumContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 141;
	            this.match(SkolensParser.NUM);
	            break;

	        case 3:
	            localctx = new StringContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 142;
	            this.match(SkolensParser.STRING);
	            break;

	        case 4:
	            localctx = new BoolContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 143;
	            this.match(SkolensParser.BOOL);
	            break;

	        case 5:
	            localctx = new ListContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 144;
	            this.match(SkolensParser.LBRAC);
	            this.state = 153;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 9)) & ~0x1f) === 0 && ((1 << (_la - 9)) & 251658257) !== 0)) {
	                this.state = 145;
	                this.expr(0);
	                this.state = 150;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===25) {
	                    this.state = 146;
	                    this.match(SkolensParser.COMMA);
	                    this.state = 147;
	                    this.expr(0);
	                    this.state = 152;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 155;
	            this.match(SkolensParser.RBRAC);
	            break;

	        case 6:
	            localctx = new ListAccessContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 156;
	            this.match(SkolensParser.ID);
	            this.state = 157;
	            this.match(SkolensParser.LBRAC);
	            this.state = 158;
	            this.expr(0);
	            this.state = 159;
	            this.match(SkolensParser.RBRAC);
	            break;

	        case 7:
	            localctx = new ListLengthContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 161;
	            this.match(SkolensParser.ID);
	            this.state = 162;
	            this.match(SkolensParser.DOT);
	            this.state = 163;
	            this.match(SkolensParser.GARUMS);
	            break;

	        case 8:
	            localctx = new ParenContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 164;
	            this.match(SkolensParser.LPAREN);
	            this.state = 165;
	            this.expr(0);
	            this.state = 166;
	            this.match(SkolensParser.RPAREN);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 196;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 194;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new LogicOpContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, SkolensParser.RULE_expr);
	                    this.state = 170;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 171;
	                    this.match(SkolensParser.AND);
	                    this.state = 172;
	                    this.expr(9);
	                    break;

	                case 2:
	                    localctx = new LogicOpContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, SkolensParser.RULE_expr);
	                    this.state = 173;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 174;
	                    this.match(SkolensParser.OR);
	                    this.state = 175;
	                    this.expr(8);
	                    break;

	                case 3:
	                    localctx = new MathOpContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, SkolensParser.RULE_expr);
	                    this.state = 176;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 177;
	                    this.match(SkolensParser.EXP);
	                    this.state = 178;
	                    this.expr(7);
	                    break;

	                case 4:
	                    localctx = new MathOpContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, SkolensParser.RULE_expr);
	                    this.state = 179;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 180;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 352) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 181;
	                    this.expr(6);
	                    break;

	                case 5:
	                    localctx = new MathOpContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, SkolensParser.RULE_expr);
	                    this.state = 182;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 183;
	                    _la = this._input.LA(1);
	                    if(!(_la===3 || _la===4)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 184;
	                    this.expr(5);
	                    break;

	                case 6:
	                    localctx = new CompOpContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, SkolensParser.RULE_expr);
	                    this.state = 185;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 186;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1966080) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 187;
	                    this.expr(4);
	                    break;

	                case 7:
	                    localctx = new EqualityOpContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, SkolensParser.RULE_expr);
	                    this.state = 188;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 189;
	                    _la = this._input.LA(1);
	                    if(!(_la===15 || _la===16)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 190;
	                    this.expr(3);
	                    break;

	                case 8:
	                    localctx = new ConcatOpContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, SkolensParser.RULE_expr);
	                    this.state = 191;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 192;
	                    this.match(SkolensParser.CONCAT);
	                    this.state = 193;
	                    this.expr(2);
	                    break;

	                } 
	            }
	            this.state = 198;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
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
	    this.enterRule(localctx, 20, SkolensParser.RULE_type);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
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
SkolensParser.LBRAC = 13;
SkolensParser.RBRAC = 14;
SkolensParser.EQ = 15;
SkolensParser.NOTEQ = 16;
SkolensParser.LESS = 17;
SkolensParser.LESSEQ = 18;
SkolensParser.LARG = 19;
SkolensParser.LARGEQ = 20;
SkolensParser.AND = 21;
SkolensParser.OR = 22;
SkolensParser.CONCAT = 23;
SkolensParser.DOT = 24;
SkolensParser.COMMA = 25;
SkolensParser.PIEVIENOT = 26;
SkolensParser.DZEST = 27;
SkolensParser.IEVIETOT = 28;
SkolensParser.GARUMS = 29;
SkolensParser.PRINT = 30;
SkolensParser.IF = 31;
SkolensParser.ELSE = 32;
SkolensParser.BOOL = 33;
SkolensParser.STRING = 34;
SkolensParser.NUM = 35;
SkolensParser.ID = 36;
SkolensParser.WS = 37;
SkolensParser.COMMENT = 38;

SkolensParser.RULE_program = 0;
SkolensParser.RULE_stat = 1;
SkolensParser.RULE_conditionalStat = 2;
SkolensParser.RULE_ifStat = 3;
SkolensParser.RULE_elseIfStat = 4;
SkolensParser.RULE_elseStat = 5;
SkolensParser.RULE_teikt = 6;
SkolensParser.RULE_variableMethodCalls = 7;
SkolensParser.RULE_assign = 8;
SkolensParser.RULE_expr = 9;
SkolensParser.RULE_type = 10;

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

	variableMethodCalls() {
	    return this.getTypedRuleContext(VariableMethodCallsContext,0);
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



class VariableMethodCallsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SkolensParser.RULE_variableMethodCalls;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ListAddContext extends VariableMethodCallsContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(SkolensParser.ID, 0);
	};

	DOT() {
	    return this.getToken(SkolensParser.DOT, 0);
	};

	PIEVIENOT() {
	    return this.getToken(SkolensParser.PIEVIENOT, 0);
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

	SEMI() {
	    return this.getToken(SkolensParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.enterListAdd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitListAdd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitListAdd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SkolensParser.ListAddContext = ListAddContext;

class ListInsertContext extends VariableMethodCallsContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(SkolensParser.ID, 0);
	};

	DOT() {
	    return this.getToken(SkolensParser.DOT, 0);
	};

	IEVIETOT() {
	    return this.getToken(SkolensParser.IEVIETOT, 0);
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

	COMMA() {
	    return this.getToken(SkolensParser.COMMA, 0);
	};

	RPAREN() {
	    return this.getToken(SkolensParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(SkolensParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.enterListInsert(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitListInsert(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitListInsert(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SkolensParser.ListInsertContext = ListInsertContext;

class ListRemoveContext extends VariableMethodCallsContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(SkolensParser.ID, 0);
	};

	DOT() {
	    return this.getToken(SkolensParser.DOT, 0);
	};

	DZEST() {
	    return this.getToken(SkolensParser.DZEST, 0);
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

	SEMI() {
	    return this.getToken(SkolensParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.enterListRemove(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitListRemove(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitListRemove(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SkolensParser.ListRemoveContext = ListRemoveContext;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ListAssignContext extends AssignContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(SkolensParser.ID, 0);
	};

	LBRAC() {
	    return this.getToken(SkolensParser.LBRAC, 0);
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

	RBRAC() {
	    return this.getToken(SkolensParser.RBRAC, 0);
	};

	ASSIGN() {
	    return this.getToken(SkolensParser.ASSIGN, 0);
	};

	SEMI() {
	    return this.getToken(SkolensParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.enterListAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitListAssign(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitListAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SkolensParser.ListAssignContext = ListAssignContext;

class NewAssignContext extends AssignContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

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

	enterRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.enterNewAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitNewAssign(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitNewAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SkolensParser.NewAssignContext = NewAssignContext;

class ReAssignContext extends AssignContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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

	enterRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.enterReAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitReAssign(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitReAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SkolensParser.ReAssignContext = ReAssignContext;

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

class ListAccessContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(SkolensParser.ID, 0);
	};

	LBRAC() {
	    return this.getToken(SkolensParser.LBRAC, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RBRAC() {
	    return this.getToken(SkolensParser.RBRAC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.enterListAccess(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitListAccess(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitListAccess(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SkolensParser.ListAccessContext = ListAccessContext;

class ListLengthContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(SkolensParser.ID, 0);
	};

	DOT() {
	    return this.getToken(SkolensParser.DOT, 0);
	};

	GARUMS() {
	    return this.getToken(SkolensParser.GARUMS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.enterListLength(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitListLength(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitListLength(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SkolensParser.ListLengthContext = ListLengthContext;

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

class ListContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LBRAC() {
	    return this.getToken(SkolensParser.LBRAC, 0);
	};

	RBRAC() {
	    return this.getToken(SkolensParser.RBRAC, 0);
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

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SkolensParser.COMMA);
	    } else {
	        return this.getToken(SkolensParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.enterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SkolensParser.ListContext = ListContext;

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
SkolensParser.VariableMethodCallsContext = VariableMethodCallsContext; 
SkolensParser.AssignContext = AssignContext; 
SkolensParser.ExprContext = ExprContext; 
SkolensParser.TypeContext = TypeContext; 
