// Generated from grammars/Skolens.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import SkolensListener from './SkolensListener.js';
import SkolensVisitor from './SkolensVisitor.js';

const serializedATN = [4,1,46,318,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,1,0,5,0,39,8,0,10,
0,12,0,42,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,3,1,59,8,1,1,2,1,2,5,2,63,8,2,10,2,12,2,66,9,2,1,2,3,2,69,8,2,1,3,1,3,
1,3,1,3,1,3,1,3,5,3,77,8,3,10,3,12,3,80,9,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,
1,4,1,4,5,4,91,8,4,10,4,12,4,94,9,4,1,4,1,4,1,5,1,5,1,5,5,5,101,8,5,10,5,
12,5,104,9,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,5,6,114,8,6,10,6,12,6,117,9,
6,1,6,1,6,1,7,1,7,1,7,5,7,124,8,7,10,7,12,7,127,9,7,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,144,8,8,10,8,12,8,147,9,8,1,
8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,161,8,9,10,9,12,9,164,
9,9,3,9,166,8,9,1,9,1,9,1,9,5,9,171,8,9,10,9,12,9,174,9,9,1,9,1,9,1,10,1,
10,3,10,180,8,10,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,12,1,13,1,13,1,13,
1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,
14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,3,14,220,
8,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
15,1,15,1,15,1,15,1,15,1,15,3,15,241,8,15,1,16,1,16,1,16,1,16,1,16,1,16,
1,16,1,16,1,16,5,16,252,8,16,10,16,12,16,255,9,16,3,16,257,8,16,1,16,1,16,
1,16,1,16,1,16,1,16,5,16,265,8,16,10,16,12,16,268,9,16,3,16,270,8,16,1,16,
1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,285,8,16,
1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,
16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,5,16,311,8,16,10,16,12,16,
314,9,16,1,17,1,17,1,17,0,1,32,18,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
30,32,34,0,4,2,0,5,6,8,8,1,0,3,4,1,0,17,20,1,0,15,16,347,0,40,1,0,0,0,2,
58,1,0,0,0,4,60,1,0,0,0,6,70,1,0,0,0,8,83,1,0,0,0,10,97,1,0,0,0,12,107,1,
0,0,0,14,120,1,0,0,0,16,135,1,0,0,0,18,150,1,0,0,0,20,177,1,0,0,0,22,183,
1,0,0,0,24,186,1,0,0,0,26,189,1,0,0,0,28,219,1,0,0,0,30,240,1,0,0,0,32,284,
1,0,0,0,34,315,1,0,0,0,36,39,3,2,1,0,37,39,3,18,9,0,38,36,1,0,0,0,38,37,
1,0,0,0,39,42,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,43,1,0,0,0,42,40,1,
0,0,0,43,44,5,0,0,1,44,1,1,0,0,0,45,59,3,20,10,0,46,59,3,22,11,0,47,59,3,
24,12,0,48,59,3,4,2,0,49,59,3,12,6,0,50,59,3,14,7,0,51,59,3,16,8,0,52,59,
3,26,13,0,53,59,3,28,14,0,54,59,3,30,15,0,55,56,3,32,16,0,56,57,5,2,0,0,
57,59,1,0,0,0,58,45,1,0,0,0,58,46,1,0,0,0,58,47,1,0,0,0,58,48,1,0,0,0,58,
49,1,0,0,0,58,50,1,0,0,0,58,51,1,0,0,0,58,52,1,0,0,0,58,53,1,0,0,0,58,54,
1,0,0,0,58,55,1,0,0,0,59,3,1,0,0,0,60,64,3,6,3,0,61,63,3,8,4,0,62,61,1,0,
0,0,63,66,1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,68,1,0,0,0,66,64,1,0,0,
0,67,69,3,10,5,0,68,67,1,0,0,0,68,69,1,0,0,0,69,5,1,0,0,0,70,71,5,31,0,0,
71,72,5,9,0,0,72,73,3,32,16,0,73,74,5,10,0,0,74,78,5,11,0,0,75,77,3,2,1,
0,76,75,1,0,0,0,77,80,1,0,0,0,78,76,1,0,0,0,78,79,1,0,0,0,79,81,1,0,0,0,
80,78,1,0,0,0,81,82,5,12,0,0,82,7,1,0,0,0,83,84,5,32,0,0,84,85,5,31,0,0,
85,86,5,9,0,0,86,87,3,32,16,0,87,88,5,10,0,0,88,92,5,11,0,0,89,91,3,2,1,
0,90,89,1,0,0,0,91,94,1,0,0,0,92,90,1,0,0,0,92,93,1,0,0,0,93,95,1,0,0,0,
94,92,1,0,0,0,95,96,5,12,0,0,96,9,1,0,0,0,97,98,5,32,0,0,98,102,5,11,0,0,
99,101,3,2,1,0,100,99,1,0,0,0,101,104,1,0,0,0,102,100,1,0,0,0,102,103,1,
0,0,0,103,105,1,0,0,0,104,102,1,0,0,0,105,106,5,12,0,0,106,11,1,0,0,0,107,
108,5,33,0,0,108,109,5,9,0,0,109,110,3,32,16,0,110,111,5,10,0,0,111,115,
5,11,0,0,112,114,3,2,1,0,113,112,1,0,0,0,114,117,1,0,0,0,115,113,1,0,0,0,
115,116,1,0,0,0,116,118,1,0,0,0,117,115,1,0,0,0,118,119,5,12,0,0,119,13,
1,0,0,0,120,121,5,34,0,0,121,125,5,11,0,0,122,124,3,2,1,0,123,122,1,0,0,
0,124,127,1,0,0,0,125,123,1,0,0,0,125,126,1,0,0,0,126,128,1,0,0,0,127,125,
1,0,0,0,128,129,5,12,0,0,129,130,5,33,0,0,130,131,5,9,0,0,131,132,3,32,16,
0,132,133,5,10,0,0,133,134,5,2,0,0,134,15,1,0,0,0,135,136,5,35,0,0,136,137,
5,44,0,0,137,138,5,36,0,0,138,139,3,32,16,0,139,140,5,37,0,0,140,141,3,32,
16,0,141,145,5,11,0,0,142,144,3,2,1,0,143,142,1,0,0,0,144,147,1,0,0,0,145,
143,1,0,0,0,145,146,1,0,0,0,146,148,1,0,0,0,147,145,1,0,0,0,148,149,5,12,
0,0,149,17,1,0,0,0,150,151,3,34,17,0,151,152,5,44,0,0,152,165,5,9,0,0,153,
154,3,34,17,0,154,155,5,44,0,0,155,162,1,0,0,0,156,157,5,25,0,0,157,158,
3,34,17,0,158,159,5,44,0,0,159,161,1,0,0,0,160,156,1,0,0,0,161,164,1,0,0,
0,162,160,1,0,0,0,162,163,1,0,0,0,163,166,1,0,0,0,164,162,1,0,0,0,165,153,
1,0,0,0,165,166,1,0,0,0,166,167,1,0,0,0,167,168,5,10,0,0,168,172,5,11,0,
0,169,171,3,2,1,0,170,169,1,0,0,0,171,174,1,0,0,0,172,170,1,0,0,0,172,173,
1,0,0,0,173,175,1,0,0,0,174,172,1,0,0,0,175,176,5,12,0,0,176,19,1,0,0,0,
177,179,5,38,0,0,178,180,3,32,16,0,179,178,1,0,0,0,179,180,1,0,0,0,180,181,
1,0,0,0,181,182,5,2,0,0,182,21,1,0,0,0,183,184,5,39,0,0,184,185,5,2,0,0,
185,23,1,0,0,0,186,187,5,40,0,0,187,188,5,2,0,0,188,25,1,0,0,0,189,190,5,
30,0,0,190,191,3,32,16,0,191,192,5,2,0,0,192,27,1,0,0,0,193,194,5,44,0,0,
194,195,5,24,0,0,195,196,5,26,0,0,196,197,5,9,0,0,197,198,3,32,16,0,198,
199,5,10,0,0,199,200,5,2,0,0,200,220,1,0,0,0,201,202,5,44,0,0,202,203,5,
24,0,0,203,204,5,27,0,0,204,205,5,9,0,0,205,206,3,32,16,0,206,207,5,10,0,
0,207,208,5,2,0,0,208,220,1,0,0,0,209,210,5,44,0,0,210,211,5,24,0,0,211,
212,5,28,0,0,212,213,5,9,0,0,213,214,3,32,16,0,214,215,5,25,0,0,215,216,
3,32,16,0,216,217,5,10,0,0,217,218,5,2,0,0,218,220,1,0,0,0,219,193,1,0,0,
0,219,201,1,0,0,0,219,209,1,0,0,0,220,29,1,0,0,0,221,222,5,44,0,0,222,223,
5,13,0,0,223,224,3,32,16,0,224,225,5,14,0,0,225,226,5,1,0,0,226,227,3,32,
16,0,227,228,5,2,0,0,228,241,1,0,0,0,229,230,5,44,0,0,230,231,5,1,0,0,231,
232,3,32,16,0,232,233,5,2,0,0,233,241,1,0,0,0,234,235,3,34,17,0,235,236,
5,44,0,0,236,237,5,1,0,0,237,238,3,32,16,0,238,239,5,2,0,0,239,241,1,0,0,
0,240,221,1,0,0,0,240,229,1,0,0,0,240,234,1,0,0,0,241,31,1,0,0,0,242,243,
6,16,-1,0,243,285,5,44,0,0,244,285,5,43,0,0,245,285,5,42,0,0,246,285,5,41,
0,0,247,256,5,13,0,0,248,253,3,32,16,0,249,250,5,25,0,0,250,252,3,32,16,
0,251,249,1,0,0,0,252,255,1,0,0,0,253,251,1,0,0,0,253,254,1,0,0,0,254,257,
1,0,0,0,255,253,1,0,0,0,256,248,1,0,0,0,256,257,1,0,0,0,257,258,1,0,0,0,
258,285,5,14,0,0,259,260,5,44,0,0,260,269,5,9,0,0,261,266,3,32,16,0,262,
263,5,25,0,0,263,265,3,32,16,0,264,262,1,0,0,0,265,268,1,0,0,0,266,264,1,
0,0,0,266,267,1,0,0,0,267,270,1,0,0,0,268,266,1,0,0,0,269,261,1,0,0,0,269,
270,1,0,0,0,270,271,1,0,0,0,271,285,5,10,0,0,272,273,5,44,0,0,273,274,5,
13,0,0,274,275,3,32,16,0,275,276,5,14,0,0,276,285,1,0,0,0,277,278,5,44,0,
0,278,279,5,24,0,0,279,285,5,29,0,0,280,281,5,9,0,0,281,282,3,32,16,0,282,
283,5,10,0,0,283,285,1,0,0,0,284,242,1,0,0,0,284,244,1,0,0,0,284,245,1,0,
0,0,284,246,1,0,0,0,284,247,1,0,0,0,284,259,1,0,0,0,284,272,1,0,0,0,284,
277,1,0,0,0,284,280,1,0,0,0,285,312,1,0,0,0,286,287,10,8,0,0,287,288,5,21,
0,0,288,311,3,32,16,9,289,290,10,7,0,0,290,291,5,22,0,0,291,311,3,32,16,
8,292,293,10,6,0,0,293,294,5,7,0,0,294,311,3,32,16,7,295,296,10,5,0,0,296,
297,7,0,0,0,297,311,3,32,16,6,298,299,10,4,0,0,299,300,7,1,0,0,300,311,3,
32,16,5,301,302,10,3,0,0,302,303,7,2,0,0,303,311,3,32,16,4,304,305,10,2,
0,0,305,306,7,3,0,0,306,311,3,32,16,3,307,308,10,1,0,0,308,309,5,23,0,0,
309,311,3,32,16,2,310,286,1,0,0,0,310,289,1,0,0,0,310,292,1,0,0,0,310,295,
1,0,0,0,310,298,1,0,0,0,310,301,1,0,0,0,310,304,1,0,0,0,310,307,1,0,0,0,
311,314,1,0,0,0,312,310,1,0,0,0,312,313,1,0,0,0,313,33,1,0,0,0,314,312,1,
0,0,0,315,316,5,44,0,0,316,35,1,0,0,0,24,38,40,58,64,68,78,92,102,115,125,
145,162,165,172,179,219,240,253,256,266,269,284,310,312];


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
                            "'garums'", "'teikt'", "'ja'", "'cit\\u0101di'", 
                            "'kam\\u0113r'", "'dar\\u012Bt'", "'katram'", 
                            "'no'", "'l\\u012Bdz'", "'atgriezt'", "'izlauzties'", 
                            "'izlaist'" ];
    static symbolicNames = [ null, "ASSIGN", "SEMI", "ADD", "SUB", "MUL", 
                             "DIV", "EXP", "MOD", "LPAREN", "RPAREN", "LCURL", 
                             "RCURL", "LBRAC", "RBRAC", "EQ", "NOTEQ", "LESS", 
                             "LESSEQ", "LARG", "LARGEQ", "AND", "OR", "CONCAT", 
                             "DOT", "COMMA", "PIEVIENOT", "DZEST", "IEVIETOT", 
                             "GARUMS", "PRINT", "IF", "ELSE", "WHILE", "DO", 
                             "EACH", "FROM", "TO", "RETURN", "BREAK", "CONTINUE", 
                             "BOOL", "STRING", "NUM", "ID", "WS", "COMMENT" ];
    static ruleNames = [ "program", "stat", "conditionalStat", "ifStat", 
                         "elseIfStat", "elseStat", "whileLoop", "doWhileLoop", 
                         "forLoop", "funcDef", "returnStat", "breakStat", 
                         "continueStat", "teikt", "variableMethodCalls", 
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
    	case 16:
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
	        this.state = 40;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3221234176) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 4071) !== 0)) {
	            this.state = 38;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 36;
	                this.stat();
	                break;

	            case 2:
	                this.state = 37;
	                this.funcDef();
	                break;

	            }
	            this.state = 42;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 43;
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
	        this.state = 58;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 45;
	            this.returnStat();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 46;
	            this.breakStat();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 47;
	            this.continueStat();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 48;
	            this.conditionalStat();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 49;
	            this.whileLoop();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 50;
	            this.doWhileLoop();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 51;
	            this.forLoop();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 52;
	            this.teikt();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 53;
	            this.variableMethodCalls();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 54;
	            this.assign();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 55;
	            this.expr(0);
	            this.state = 56;
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
	        this.state = 60;
	        this.ifStat();
	        this.state = 64;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 61;
	                this.elseIfStat(); 
	            }
	            this.state = 66;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	        this.state = 68;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32) {
	            this.state = 67;
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
	        this.state = 70;
	        this.match(SkolensParser.IF);
	        this.state = 71;
	        this.match(SkolensParser.LPAREN);
	        this.state = 72;
	        this.expr(0);
	        this.state = 73;
	        this.match(SkolensParser.RPAREN);
	        this.state = 74;
	        this.match(SkolensParser.LCURL);
	        this.state = 78;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3221234176) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 4071) !== 0)) {
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



	elseIfStat() {
	    let localctx = new ElseIfStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SkolensParser.RULE_elseIfStat);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.match(SkolensParser.ELSE);
	        this.state = 84;
	        this.match(SkolensParser.IF);
	        this.state = 85;
	        this.match(SkolensParser.LPAREN);
	        this.state = 86;
	        this.expr(0);
	        this.state = 87;
	        this.match(SkolensParser.RPAREN);
	        this.state = 88;
	        this.match(SkolensParser.LCURL);
	        this.state = 92;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3221234176) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 4071) !== 0)) {
	            this.state = 89;
	            this.stat();
	            this.state = 94;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 95;
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
	        this.state = 97;
	        this.match(SkolensParser.ELSE);
	        this.state = 98;
	        this.match(SkolensParser.LCURL);
	        this.state = 102;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3221234176) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 4071) !== 0)) {
	            this.state = 99;
	            this.stat();
	            this.state = 104;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 105;
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



	whileLoop() {
	    let localctx = new WhileLoopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SkolensParser.RULE_whileLoop);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this.match(SkolensParser.WHILE);
	        this.state = 108;
	        this.match(SkolensParser.LPAREN);
	        this.state = 109;
	        this.expr(0);
	        this.state = 110;
	        this.match(SkolensParser.RPAREN);
	        this.state = 111;
	        this.match(SkolensParser.LCURL);
	        this.state = 115;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3221234176) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 4071) !== 0)) {
	            this.state = 112;
	            this.stat();
	            this.state = 117;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 118;
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



	doWhileLoop() {
	    let localctx = new DoWhileLoopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SkolensParser.RULE_doWhileLoop);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.match(SkolensParser.DO);
	        this.state = 121;
	        this.match(SkolensParser.LCURL);
	        this.state = 125;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3221234176) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 4071) !== 0)) {
	            this.state = 122;
	            this.stat();
	            this.state = 127;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 128;
	        this.match(SkolensParser.RCURL);
	        this.state = 129;
	        this.match(SkolensParser.WHILE);
	        this.state = 130;
	        this.match(SkolensParser.LPAREN);
	        this.state = 131;
	        this.expr(0);
	        this.state = 132;
	        this.match(SkolensParser.RPAREN);
	        this.state = 133;
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



	forLoop() {
	    let localctx = new ForLoopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, SkolensParser.RULE_forLoop);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        this.match(SkolensParser.EACH);
	        this.state = 136;
	        this.match(SkolensParser.ID);
	        this.state = 137;
	        this.match(SkolensParser.FROM);
	        this.state = 138;
	        this.expr(0);
	        this.state = 139;
	        this.match(SkolensParser.TO);
	        this.state = 140;
	        this.expr(0);
	        this.state = 141;
	        this.match(SkolensParser.LCURL);
	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3221234176) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 4071) !== 0)) {
	            this.state = 142;
	            this.stat();
	            this.state = 147;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 148;
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



	funcDef() {
	    let localctx = new FuncDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, SkolensParser.RULE_funcDef);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
	        this.type();
	        this.state = 151;
	        this.match(SkolensParser.ID);
	        this.state = 152;
	        this.match(SkolensParser.LPAREN);
	        this.state = 165;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 153;
	            this.type();
	            this.state = 154;
	            this.match(SkolensParser.ID);
	            this.state = 162;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===25) {
	                this.state = 156;
	                this.match(SkolensParser.COMMA);

	                this.state = 157;
	                this.type();
	                this.state = 158;
	                this.match(SkolensParser.ID);
	                this.state = 164;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 167;
	        this.match(SkolensParser.RPAREN);
	        this.state = 168;
	        this.match(SkolensParser.LCURL);
	        this.state = 172;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3221234176) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 4071) !== 0)) {
	            this.state = 169;
	            this.stat();
	            this.state = 174;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 175;
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



	returnStat() {
	    let localctx = new ReturnStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, SkolensParser.RULE_returnStat);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 177;
	        this.match(SkolensParser.RETURN);
	        this.state = 179;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9 || _la===13 || ((((_la - 41)) & ~0x1f) === 0 && ((1 << (_la - 41)) & 15) !== 0)) {
	            this.state = 178;
	            this.expr(0);
	        }

	        this.state = 181;
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



	breakStat() {
	    let localctx = new BreakStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, SkolensParser.RULE_breakStat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 183;
	        this.match(SkolensParser.BREAK);
	        this.state = 184;
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



	continueStat() {
	    let localctx = new ContinueStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, SkolensParser.RULE_continueStat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        this.match(SkolensParser.CONTINUE);
	        this.state = 187;
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



	teikt() {
	    let localctx = new TeiktContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, SkolensParser.RULE_teikt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        this.match(SkolensParser.PRINT);
	        this.state = 190;
	        this.expr(0);
	        this.state = 191;
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
	    this.enterRule(localctx, 28, SkolensParser.RULE_variableMethodCalls);
	    try {
	        this.state = 219;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ListAddContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 193;
	            this.match(SkolensParser.ID);
	            this.state = 194;
	            this.match(SkolensParser.DOT);
	            this.state = 195;
	            this.match(SkolensParser.PIEVIENOT);
	            this.state = 196;
	            this.match(SkolensParser.LPAREN);
	            this.state = 197;
	            this.expr(0);
	            this.state = 198;
	            this.match(SkolensParser.RPAREN);
	            this.state = 199;
	            this.match(SkolensParser.SEMI);
	            break;

	        case 2:
	            localctx = new ListRemoveContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 201;
	            this.match(SkolensParser.ID);
	            this.state = 202;
	            this.match(SkolensParser.DOT);
	            this.state = 203;
	            this.match(SkolensParser.DZEST);
	            this.state = 204;
	            this.match(SkolensParser.LPAREN);
	            this.state = 205;
	            this.expr(0);
	            this.state = 206;
	            this.match(SkolensParser.RPAREN);
	            this.state = 207;
	            this.match(SkolensParser.SEMI);
	            break;

	        case 3:
	            localctx = new ListInsertContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 209;
	            this.match(SkolensParser.ID);
	            this.state = 210;
	            this.match(SkolensParser.DOT);
	            this.state = 211;
	            this.match(SkolensParser.IEVIETOT);
	            this.state = 212;
	            this.match(SkolensParser.LPAREN);
	            this.state = 213;
	            this.expr(0);
	            this.state = 214;
	            this.match(SkolensParser.COMMA);
	            this.state = 215;
	            this.expr(0);
	            this.state = 216;
	            this.match(SkolensParser.RPAREN);
	            this.state = 217;
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
	    this.enterRule(localctx, 30, SkolensParser.RULE_assign);
	    try {
	        this.state = 240;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ListAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 221;
	            this.match(SkolensParser.ID);
	            this.state = 222;
	            this.match(SkolensParser.LBRAC);
	            this.state = 223;
	            this.expr(0);
	            this.state = 224;
	            this.match(SkolensParser.RBRAC);
	            this.state = 225;
	            this.match(SkolensParser.ASSIGN);
	            this.state = 226;
	            this.expr(0);
	            this.state = 227;
	            this.match(SkolensParser.SEMI);
	            break;

	        case 2:
	            localctx = new ReAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 229;
	            this.match(SkolensParser.ID);
	            this.state = 230;
	            this.match(SkolensParser.ASSIGN);
	            this.state = 231;
	            this.expr(0);
	            this.state = 232;
	            this.match(SkolensParser.SEMI);
	            break;

	        case 3:
	            localctx = new NewAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 234;
	            this.type();
	            this.state = 235;
	            this.match(SkolensParser.ID);
	            this.state = 236;
	            this.match(SkolensParser.ASSIGN);
	            this.state = 237;
	            this.expr(0);
	            this.state = 238;
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
	    const _startState = 32;
	    this.enterRecursionRule(localctx, 32, SkolensParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 284;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 243;
	            this.match(SkolensParser.ID);
	            break;

	        case 2:
	            localctx = new NumContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 244;
	            this.match(SkolensParser.NUM);
	            break;

	        case 3:
	            localctx = new StringContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 245;
	            this.match(SkolensParser.STRING);
	            break;

	        case 4:
	            localctx = new BoolContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 246;
	            this.match(SkolensParser.BOOL);
	            break;

	        case 5:
	            localctx = new ListContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 247;
	            this.match(SkolensParser.LBRAC);
	            this.state = 256;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===9 || _la===13 || ((((_la - 41)) & ~0x1f) === 0 && ((1 << (_la - 41)) & 15) !== 0)) {
	                this.state = 248;
	                this.expr(0);
	                this.state = 253;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===25) {
	                    this.state = 249;
	                    this.match(SkolensParser.COMMA);
	                    this.state = 250;
	                    this.expr(0);
	                    this.state = 255;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 258;
	            this.match(SkolensParser.RBRAC);
	            break;

	        case 6:
	            localctx = new FuncCallContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 259;
	            this.match(SkolensParser.ID);
	            this.state = 260;
	            this.match(SkolensParser.LPAREN);
	            this.state = 269;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===9 || _la===13 || ((((_la - 41)) & ~0x1f) === 0 && ((1 << (_la - 41)) & 15) !== 0)) {
	                this.state = 261;
	                this.expr(0);
	                this.state = 266;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===25) {
	                    this.state = 262;
	                    this.match(SkolensParser.COMMA);
	                    this.state = 263;
	                    this.expr(0);
	                    this.state = 268;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 271;
	            this.match(SkolensParser.RPAREN);
	            break;

	        case 7:
	            localctx = new ListAccessContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 272;
	            this.match(SkolensParser.ID);
	            this.state = 273;
	            this.match(SkolensParser.LBRAC);
	            this.state = 274;
	            this.expr(0);
	            this.state = 275;
	            this.match(SkolensParser.RBRAC);
	            break;

	        case 8:
	            localctx = new ListLengthContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 277;
	            this.match(SkolensParser.ID);
	            this.state = 278;
	            this.match(SkolensParser.DOT);
	            this.state = 279;
	            this.match(SkolensParser.GARUMS);
	            break;

	        case 9:
	            localctx = new ParenContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 280;
	            this.match(SkolensParser.LPAREN);
	            this.state = 281;
	            this.expr(0);
	            this.state = 282;
	            this.match(SkolensParser.RPAREN);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 312;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 310;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new LogicOpContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, SkolensParser.RULE_expr);
	                    this.state = 286;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 287;
	                    this.match(SkolensParser.AND);
	                    this.state = 288;
	                    this.expr(9);
	                    break;

	                case 2:
	                    localctx = new LogicOpContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, SkolensParser.RULE_expr);
	                    this.state = 289;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 290;
	                    this.match(SkolensParser.OR);
	                    this.state = 291;
	                    this.expr(8);
	                    break;

	                case 3:
	                    localctx = new MathOpContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, SkolensParser.RULE_expr);
	                    this.state = 292;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 293;
	                    this.match(SkolensParser.EXP);
	                    this.state = 294;
	                    this.expr(7);
	                    break;

	                case 4:
	                    localctx = new MathOpContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, SkolensParser.RULE_expr);
	                    this.state = 295;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 296;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 352) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 297;
	                    this.expr(6);
	                    break;

	                case 5:
	                    localctx = new MathOpContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, SkolensParser.RULE_expr);
	                    this.state = 298;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 299;
	                    _la = this._input.LA(1);
	                    if(!(_la===3 || _la===4)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 300;
	                    this.expr(5);
	                    break;

	                case 6:
	                    localctx = new CompOpContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, SkolensParser.RULE_expr);
	                    this.state = 301;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 302;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1966080) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 303;
	                    this.expr(4);
	                    break;

	                case 7:
	                    localctx = new EqualityOpContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, SkolensParser.RULE_expr);
	                    this.state = 304;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 305;
	                    _la = this._input.LA(1);
	                    if(!(_la===15 || _la===16)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 306;
	                    this.expr(3);
	                    break;

	                case 8:
	                    localctx = new ConcatOpContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, SkolensParser.RULE_expr);
	                    this.state = 307;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 308;
	                    this.match(SkolensParser.CONCAT);
	                    this.state = 309;
	                    this.expr(2);
	                    break;

	                } 
	            }
	            this.state = 314;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,23,this._ctx);
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
	    this.enterRule(localctx, 34, SkolensParser.RULE_type);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 315;
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
SkolensParser.WHILE = 33;
SkolensParser.DO = 34;
SkolensParser.EACH = 35;
SkolensParser.FROM = 36;
SkolensParser.TO = 37;
SkolensParser.RETURN = 38;
SkolensParser.BREAK = 39;
SkolensParser.CONTINUE = 40;
SkolensParser.BOOL = 41;
SkolensParser.STRING = 42;
SkolensParser.NUM = 43;
SkolensParser.ID = 44;
SkolensParser.WS = 45;
SkolensParser.COMMENT = 46;

SkolensParser.RULE_program = 0;
SkolensParser.RULE_stat = 1;
SkolensParser.RULE_conditionalStat = 2;
SkolensParser.RULE_ifStat = 3;
SkolensParser.RULE_elseIfStat = 4;
SkolensParser.RULE_elseStat = 5;
SkolensParser.RULE_whileLoop = 6;
SkolensParser.RULE_doWhileLoop = 7;
SkolensParser.RULE_forLoop = 8;
SkolensParser.RULE_funcDef = 9;
SkolensParser.RULE_returnStat = 10;
SkolensParser.RULE_breakStat = 11;
SkolensParser.RULE_continueStat = 12;
SkolensParser.RULE_teikt = 13;
SkolensParser.RULE_variableMethodCalls = 14;
SkolensParser.RULE_assign = 15;
SkolensParser.RULE_expr = 16;
SkolensParser.RULE_type = 17;

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

	funcDef = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncDefContext);
	    } else {
	        return this.getTypedRuleContext(FuncDefContext,i);
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

	returnStat() {
	    return this.getTypedRuleContext(ReturnStatContext,0);
	};

	breakStat() {
	    return this.getTypedRuleContext(BreakStatContext,0);
	};

	continueStat() {
	    return this.getTypedRuleContext(ContinueStatContext,0);
	};

	conditionalStat() {
	    return this.getTypedRuleContext(ConditionalStatContext,0);
	};

	whileLoop() {
	    return this.getTypedRuleContext(WhileLoopContext,0);
	};

	doWhileLoop() {
	    return this.getTypedRuleContext(DoWhileLoopContext,0);
	};

	forLoop() {
	    return this.getTypedRuleContext(ForLoopContext,0);
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



class WhileLoopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SkolensParser.RULE_whileLoop;
    }

	WHILE() {
	    return this.getToken(SkolensParser.WHILE, 0);
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
	        listener.enterWhileLoop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitWhileLoop(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitWhileLoop(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DoWhileLoopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SkolensParser.RULE_doWhileLoop;
    }

	DO() {
	    return this.getToken(SkolensParser.DO, 0);
	};

	LCURL() {
	    return this.getToken(SkolensParser.LCURL, 0);
	};

	RCURL() {
	    return this.getToken(SkolensParser.RCURL, 0);
	};

	WHILE() {
	    return this.getToken(SkolensParser.WHILE, 0);
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
	        listener.enterDoWhileLoop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitDoWhileLoop(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitDoWhileLoop(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ForLoopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SkolensParser.RULE_forLoop;
    }

	EACH() {
	    return this.getToken(SkolensParser.EACH, 0);
	};

	ID() {
	    return this.getToken(SkolensParser.ID, 0);
	};

	FROM() {
	    return this.getToken(SkolensParser.FROM, 0);
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

	TO() {
	    return this.getToken(SkolensParser.TO, 0);
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
	        listener.enterForLoop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitForLoop(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitForLoop(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuncDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SkolensParser.RULE_funcDef;
    }

	type = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeContext);
	    } else {
	        return this.getTypedRuleContext(TypeContext,i);
	    }
	};

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SkolensParser.ID);
	    } else {
	        return this.getToken(SkolensParser.ID, i);
	    }
	};


	LPAREN() {
	    return this.getToken(SkolensParser.LPAREN, 0);
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
	        listener.enterFuncDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitFuncDef(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitFuncDef(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ReturnStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SkolensParser.RULE_returnStat;
    }

	RETURN() {
	    return this.getToken(SkolensParser.RETURN, 0);
	};

	SEMI() {
	    return this.getToken(SkolensParser.SEMI, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.enterReturnStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitReturnStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitReturnStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BreakStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SkolensParser.RULE_breakStat;
    }

	BREAK() {
	    return this.getToken(SkolensParser.BREAK, 0);
	};

	SEMI() {
	    return this.getToken(SkolensParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.enterBreakStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitBreakStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitBreakStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ContinueStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SkolensParser.RULE_continueStat;
    }

	CONTINUE() {
	    return this.getToken(SkolensParser.CONTINUE, 0);
	};

	SEMI() {
	    return this.getToken(SkolensParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.enterContinueStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitContinueStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitContinueStat(this);
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

class FuncCallContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(SkolensParser.ID, 0);
	};

	LPAREN() {
	    return this.getToken(SkolensParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(SkolensParser.RPAREN, 0);
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
	        listener.enterFuncCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SkolensListener ) {
	        listener.exitFuncCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SkolensVisitor ) {
	        return visitor.visitFuncCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SkolensParser.FuncCallContext = FuncCallContext;

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
SkolensParser.WhileLoopContext = WhileLoopContext; 
SkolensParser.DoWhileLoopContext = DoWhileLoopContext; 
SkolensParser.ForLoopContext = ForLoopContext; 
SkolensParser.FuncDefContext = FuncDefContext; 
SkolensParser.ReturnStatContext = ReturnStatContext; 
SkolensParser.BreakStatContext = BreakStatContext; 
SkolensParser.ContinueStatContext = ContinueStatContext; 
SkolensParser.TeiktContext = TeiktContext; 
SkolensParser.VariableMethodCallsContext = VariableMethodCallsContext; 
SkolensParser.AssignContext = AssignContext; 
SkolensParser.ExprContext = ExprContext; 
SkolensParser.TypeContext = TypeContext; 
