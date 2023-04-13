// Generated from /Users/kristers/Documents/Bakalaura Darbs/antlr-js-test/grammars/Skolens.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class SkolensParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		ASSIGN=1, SEMI=2, ADD=3, SUB=4, MUL=5, DIV=6, EXP=7, MOD=8, LPAREN=9, 
		RPAREN=10, LCURL=11, RCURL=12, LBRAC=13, RBRAC=14, EQ=15, NOTEQ=16, LESS=17, 
		LESSEQ=18, LARG=19, LARGEQ=20, AND=21, OR=22, CONCAT=23, DOT=24, COMMA=25, 
		PIEVIENOT=26, DZEST=27, IEVIETOT=28, GARUMS=29, PRINT=30, IF=31, ELSE=32, 
		WHILE=33, DO=34, EACH=35, FROM=36, TO=37, RETURN=38, BREAK=39, CONTINUE=40, 
		BOOL=41, STRING=42, NUM=43, ID=44, WS=45, COMMENT=46;
	public static final int
		RULE_program = 0, RULE_stat = 1, RULE_conditionalStat = 2, RULE_ifStat = 3, 
		RULE_elseIfStat = 4, RULE_elseStat = 5, RULE_whileLoop = 6, RULE_doWhileLoop = 7, 
		RULE_forLoop = 8, RULE_funcDef = 9, RULE_returnStat = 10, RULE_breakStat = 11, 
		RULE_continueStat = 12, RULE_teikt = 13, RULE_variableMethodCalls = 14, 
		RULE_assign = 15, RULE_expr = 16, RULE_type = 17;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "stat", "conditionalStat", "ifStat", "elseIfStat", "elseStat", 
			"whileLoop", "doWhileLoop", "forLoop", "funcDef", "returnStat", "breakStat", 
			"continueStat", "teikt", "variableMethodCalls", "assign", "expr", "type"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'='", "';'", "'+'", "'-'", "'*'", "'/'", "'^'", "'%'", "'('", 
			"')'", "'{'", "'}'", "'['", "']'", "'=='", "'!='", "'<'", "'<='", "'>'", 
			"'>='", "'un'", "'vai'", "'..'", "'.'", "','", "'pievienot'", "'dz\u0113st'", 
			"'ievietot'", "'garums'", "'teikt'", "'ja'", "'cit\u0101di'", "'kam\u0113r'", 
			"'dar\u012Bt'", "'katram'", "'no'", "'l\u012Bdz'", "'atgriezt'", "'izlauzties'", 
			"'izlaist'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "ASSIGN", "SEMI", "ADD", "SUB", "MUL", "DIV", "EXP", "MOD", "LPAREN", 
			"RPAREN", "LCURL", "RCURL", "LBRAC", "RBRAC", "EQ", "NOTEQ", "LESS", 
			"LESSEQ", "LARG", "LARGEQ", "AND", "OR", "CONCAT", "DOT", "COMMA", "PIEVIENOT", 
			"DZEST", "IEVIETOT", "GARUMS", "PRINT", "IF", "ELSE", "WHILE", "DO", 
			"EACH", "FROM", "TO", "RETURN", "BREAK", "CONTINUE", "BOOL", "STRING", 
			"NUM", "ID", "WS", "COMMENT"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Skolens.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public SkolensParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(SkolensParser.EOF, 0); }
		public List<StatContext> stat() {
			return getRuleContexts(StatContext.class);
		}
		public StatContext stat(int i) {
			return getRuleContext(StatContext.class,i);
		}
		public List<FuncDefContext> funcDef() {
			return getRuleContexts(FuncDefContext.class);
		}
		public FuncDefContext funcDef(int i) {
			return getRuleContext(FuncDefContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(40);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << LBRAC) | (1L << PRINT) | (1L << IF) | (1L << WHILE) | (1L << DO) | (1L << EACH) | (1L << RETURN) | (1L << BREAK) | (1L << CONTINUE) | (1L << BOOL) | (1L << STRING) | (1L << NUM) | (1L << ID))) != 0)) {
				{
				setState(38);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
				case 1:
					{
					setState(36);
					stat();
					}
					break;
				case 2:
					{
					setState(37);
					funcDef();
					}
					break;
				}
				}
				setState(42);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(43);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatContext extends ParserRuleContext {
		public ReturnStatContext returnStat() {
			return getRuleContext(ReturnStatContext.class,0);
		}
		public BreakStatContext breakStat() {
			return getRuleContext(BreakStatContext.class,0);
		}
		public ContinueStatContext continueStat() {
			return getRuleContext(ContinueStatContext.class,0);
		}
		public ConditionalStatContext conditionalStat() {
			return getRuleContext(ConditionalStatContext.class,0);
		}
		public WhileLoopContext whileLoop() {
			return getRuleContext(WhileLoopContext.class,0);
		}
		public DoWhileLoopContext doWhileLoop() {
			return getRuleContext(DoWhileLoopContext.class,0);
		}
		public ForLoopContext forLoop() {
			return getRuleContext(ForLoopContext.class,0);
		}
		public TeiktContext teikt() {
			return getRuleContext(TeiktContext.class,0);
		}
		public VariableMethodCallsContext variableMethodCalls() {
			return getRuleContext(VariableMethodCallsContext.class,0);
		}
		public AssignContext assign() {
			return getRuleContext(AssignContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(SkolensParser.SEMI, 0); }
		public StatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stat; }
	}

	public final StatContext stat() throws RecognitionException {
		StatContext _localctx = new StatContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_stat);
		try {
			setState(58);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(45);
				returnStat();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(46);
				breakStat();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(47);
				continueStat();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(48);
				conditionalStat();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(49);
				whileLoop();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(50);
				doWhileLoop();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(51);
				forLoop();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(52);
				teikt();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(53);
				variableMethodCalls();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(54);
				assign();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(55);
				expr(0);
				setState(56);
				match(SEMI);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConditionalStatContext extends ParserRuleContext {
		public IfStatContext ifStat() {
			return getRuleContext(IfStatContext.class,0);
		}
		public List<ElseIfStatContext> elseIfStat() {
			return getRuleContexts(ElseIfStatContext.class);
		}
		public ElseIfStatContext elseIfStat(int i) {
			return getRuleContext(ElseIfStatContext.class,i);
		}
		public ElseStatContext elseStat() {
			return getRuleContext(ElseStatContext.class,0);
		}
		public ConditionalStatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionalStat; }
	}

	public final ConditionalStatContext conditionalStat() throws RecognitionException {
		ConditionalStatContext _localctx = new ConditionalStatContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_conditionalStat);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
			ifStat();
			setState(64);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(61);
					elseIfStat();
					}
					} 
				}
				setState(66);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			}
			setState(68);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(67);
				elseStat();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IfStatContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(SkolensParser.IF, 0); }
		public TerminalNode LPAREN() { return getToken(SkolensParser.LPAREN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(SkolensParser.RPAREN, 0); }
		public TerminalNode LCURL() { return getToken(SkolensParser.LCURL, 0); }
		public TerminalNode RCURL() { return getToken(SkolensParser.RCURL, 0); }
		public List<StatContext> stat() {
			return getRuleContexts(StatContext.class);
		}
		public StatContext stat(int i) {
			return getRuleContext(StatContext.class,i);
		}
		public IfStatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStat; }
	}

	public final IfStatContext ifStat() throws RecognitionException {
		IfStatContext _localctx = new IfStatContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_ifStat);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(70);
			match(IF);
			setState(71);
			match(LPAREN);
			setState(72);
			expr(0);
			setState(73);
			match(RPAREN);
			setState(74);
			match(LCURL);
			setState(78);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << LBRAC) | (1L << PRINT) | (1L << IF) | (1L << WHILE) | (1L << DO) | (1L << EACH) | (1L << RETURN) | (1L << BREAK) | (1L << CONTINUE) | (1L << BOOL) | (1L << STRING) | (1L << NUM) | (1L << ID))) != 0)) {
				{
				{
				setState(75);
				stat();
				}
				}
				setState(80);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(81);
			match(RCURL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElseIfStatContext extends ParserRuleContext {
		public TerminalNode ELSE() { return getToken(SkolensParser.ELSE, 0); }
		public TerminalNode IF() { return getToken(SkolensParser.IF, 0); }
		public TerminalNode LPAREN() { return getToken(SkolensParser.LPAREN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(SkolensParser.RPAREN, 0); }
		public TerminalNode LCURL() { return getToken(SkolensParser.LCURL, 0); }
		public TerminalNode RCURL() { return getToken(SkolensParser.RCURL, 0); }
		public List<StatContext> stat() {
			return getRuleContexts(StatContext.class);
		}
		public StatContext stat(int i) {
			return getRuleContext(StatContext.class,i);
		}
		public ElseIfStatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseIfStat; }
	}

	public final ElseIfStatContext elseIfStat() throws RecognitionException {
		ElseIfStatContext _localctx = new ElseIfStatContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_elseIfStat);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(83);
			match(ELSE);
			setState(84);
			match(IF);
			setState(85);
			match(LPAREN);
			setState(86);
			expr(0);
			setState(87);
			match(RPAREN);
			setState(88);
			match(LCURL);
			setState(92);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << LBRAC) | (1L << PRINT) | (1L << IF) | (1L << WHILE) | (1L << DO) | (1L << EACH) | (1L << RETURN) | (1L << BREAK) | (1L << CONTINUE) | (1L << BOOL) | (1L << STRING) | (1L << NUM) | (1L << ID))) != 0)) {
				{
				{
				setState(89);
				stat();
				}
				}
				setState(94);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(95);
			match(RCURL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElseStatContext extends ParserRuleContext {
		public TerminalNode ELSE() { return getToken(SkolensParser.ELSE, 0); }
		public TerminalNode LCURL() { return getToken(SkolensParser.LCURL, 0); }
		public TerminalNode RCURL() { return getToken(SkolensParser.RCURL, 0); }
		public List<StatContext> stat() {
			return getRuleContexts(StatContext.class);
		}
		public StatContext stat(int i) {
			return getRuleContext(StatContext.class,i);
		}
		public ElseStatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseStat; }
	}

	public final ElseStatContext elseStat() throws RecognitionException {
		ElseStatContext _localctx = new ElseStatContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_elseStat);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(97);
			match(ELSE);
			setState(98);
			match(LCURL);
			setState(102);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << LBRAC) | (1L << PRINT) | (1L << IF) | (1L << WHILE) | (1L << DO) | (1L << EACH) | (1L << RETURN) | (1L << BREAK) | (1L << CONTINUE) | (1L << BOOL) | (1L << STRING) | (1L << NUM) | (1L << ID))) != 0)) {
				{
				{
				setState(99);
				stat();
				}
				}
				setState(104);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(105);
			match(RCURL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WhileLoopContext extends ParserRuleContext {
		public TerminalNode WHILE() { return getToken(SkolensParser.WHILE, 0); }
		public TerminalNode LPAREN() { return getToken(SkolensParser.LPAREN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(SkolensParser.RPAREN, 0); }
		public TerminalNode LCURL() { return getToken(SkolensParser.LCURL, 0); }
		public TerminalNode RCURL() { return getToken(SkolensParser.RCURL, 0); }
		public List<StatContext> stat() {
			return getRuleContexts(StatContext.class);
		}
		public StatContext stat(int i) {
			return getRuleContext(StatContext.class,i);
		}
		public WhileLoopContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whileLoop; }
	}

	public final WhileLoopContext whileLoop() throws RecognitionException {
		WhileLoopContext _localctx = new WhileLoopContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_whileLoop);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(107);
			match(WHILE);
			setState(108);
			match(LPAREN);
			setState(109);
			expr(0);
			setState(110);
			match(RPAREN);
			setState(111);
			match(LCURL);
			setState(115);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << LBRAC) | (1L << PRINT) | (1L << IF) | (1L << WHILE) | (1L << DO) | (1L << EACH) | (1L << RETURN) | (1L << BREAK) | (1L << CONTINUE) | (1L << BOOL) | (1L << STRING) | (1L << NUM) | (1L << ID))) != 0)) {
				{
				{
				setState(112);
				stat();
				}
				}
				setState(117);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(118);
			match(RCURL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DoWhileLoopContext extends ParserRuleContext {
		public TerminalNode DO() { return getToken(SkolensParser.DO, 0); }
		public TerminalNode LCURL() { return getToken(SkolensParser.LCURL, 0); }
		public TerminalNode RCURL() { return getToken(SkolensParser.RCURL, 0); }
		public TerminalNode WHILE() { return getToken(SkolensParser.WHILE, 0); }
		public TerminalNode LPAREN() { return getToken(SkolensParser.LPAREN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(SkolensParser.RPAREN, 0); }
		public TerminalNode SEMI() { return getToken(SkolensParser.SEMI, 0); }
		public List<StatContext> stat() {
			return getRuleContexts(StatContext.class);
		}
		public StatContext stat(int i) {
			return getRuleContext(StatContext.class,i);
		}
		public DoWhileLoopContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_doWhileLoop; }
	}

	public final DoWhileLoopContext doWhileLoop() throws RecognitionException {
		DoWhileLoopContext _localctx = new DoWhileLoopContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_doWhileLoop);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(120);
			match(DO);
			setState(121);
			match(LCURL);
			setState(125);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << LBRAC) | (1L << PRINT) | (1L << IF) | (1L << WHILE) | (1L << DO) | (1L << EACH) | (1L << RETURN) | (1L << BREAK) | (1L << CONTINUE) | (1L << BOOL) | (1L << STRING) | (1L << NUM) | (1L << ID))) != 0)) {
				{
				{
				setState(122);
				stat();
				}
				}
				setState(127);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(128);
			match(RCURL);
			setState(129);
			match(WHILE);
			setState(130);
			match(LPAREN);
			setState(131);
			expr(0);
			setState(132);
			match(RPAREN);
			setState(133);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ForLoopContext extends ParserRuleContext {
		public TerminalNode EACH() { return getToken(SkolensParser.EACH, 0); }
		public TerminalNode ID() { return getToken(SkolensParser.ID, 0); }
		public TerminalNode FROM() { return getToken(SkolensParser.FROM, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode TO() { return getToken(SkolensParser.TO, 0); }
		public TerminalNode LCURL() { return getToken(SkolensParser.LCURL, 0); }
		public TerminalNode RCURL() { return getToken(SkolensParser.RCURL, 0); }
		public List<StatContext> stat() {
			return getRuleContexts(StatContext.class);
		}
		public StatContext stat(int i) {
			return getRuleContext(StatContext.class,i);
		}
		public ForLoopContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forLoop; }
	}

	public final ForLoopContext forLoop() throws RecognitionException {
		ForLoopContext _localctx = new ForLoopContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_forLoop);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(135);
			match(EACH);
			setState(136);
			match(ID);
			setState(137);
			match(FROM);
			setState(138);
			expr(0);
			setState(139);
			match(TO);
			setState(140);
			expr(0);
			setState(141);
			match(LCURL);
			setState(145);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << LBRAC) | (1L << PRINT) | (1L << IF) | (1L << WHILE) | (1L << DO) | (1L << EACH) | (1L << RETURN) | (1L << BREAK) | (1L << CONTINUE) | (1L << BOOL) | (1L << STRING) | (1L << NUM) | (1L << ID))) != 0)) {
				{
				{
				setState(142);
				stat();
				}
				}
				setState(147);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(148);
			match(RCURL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FuncDefContext extends ParserRuleContext {
		public List<TypeContext> type() {
			return getRuleContexts(TypeContext.class);
		}
		public TypeContext type(int i) {
			return getRuleContext(TypeContext.class,i);
		}
		public List<TerminalNode> ID() { return getTokens(SkolensParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(SkolensParser.ID, i);
		}
		public TerminalNode LPAREN() { return getToken(SkolensParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(SkolensParser.RPAREN, 0); }
		public TerminalNode LCURL() { return getToken(SkolensParser.LCURL, 0); }
		public TerminalNode RCURL() { return getToken(SkolensParser.RCURL, 0); }
		public List<StatContext> stat() {
			return getRuleContexts(StatContext.class);
		}
		public StatContext stat(int i) {
			return getRuleContext(StatContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(SkolensParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(SkolensParser.COMMA, i);
		}
		public FuncDefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_funcDef; }
	}

	public final FuncDefContext funcDef() throws RecognitionException {
		FuncDefContext _localctx = new FuncDefContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_funcDef);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(150);
			type();
			setState(151);
			match(ID);
			setState(152);
			match(LPAREN);
			setState(165);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ID) {
				{
				{
				setState(153);
				type();
				setState(154);
				match(ID);
				}
				setState(162);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(156);
					match(COMMA);
					{
					setState(157);
					type();
					setState(158);
					match(ID);
					}
					}
					}
					setState(164);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(167);
			match(RPAREN);
			setState(168);
			match(LCURL);
			setState(172);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << LBRAC) | (1L << PRINT) | (1L << IF) | (1L << WHILE) | (1L << DO) | (1L << EACH) | (1L << RETURN) | (1L << BREAK) | (1L << CONTINUE) | (1L << BOOL) | (1L << STRING) | (1L << NUM) | (1L << ID))) != 0)) {
				{
				{
				setState(169);
				stat();
				}
				}
				setState(174);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(175);
			match(RCURL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReturnStatContext extends ParserRuleContext {
		public TerminalNode RETURN() { return getToken(SkolensParser.RETURN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(SkolensParser.SEMI, 0); }
		public ReturnStatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnStat; }
	}

	public final ReturnStatContext returnStat() throws RecognitionException {
		ReturnStatContext _localctx = new ReturnStatContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_returnStat);
		try {
			setState(183);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(177);
				match(RETURN);
				setState(178);
				expr(0);
				setState(179);
				match(SEMI);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(181);
				match(RETURN);
				setState(182);
				match(SEMI);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BreakStatContext extends ParserRuleContext {
		public TerminalNode BREAK() { return getToken(SkolensParser.BREAK, 0); }
		public TerminalNode SEMI() { return getToken(SkolensParser.SEMI, 0); }
		public BreakStatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_breakStat; }
	}

	public final BreakStatContext breakStat() throws RecognitionException {
		BreakStatContext _localctx = new BreakStatContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_breakStat);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(185);
			match(BREAK);
			setState(186);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ContinueStatContext extends ParserRuleContext {
		public TerminalNode CONTINUE() { return getToken(SkolensParser.CONTINUE, 0); }
		public TerminalNode SEMI() { return getToken(SkolensParser.SEMI, 0); }
		public ContinueStatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_continueStat; }
	}

	public final ContinueStatContext continueStat() throws RecognitionException {
		ContinueStatContext _localctx = new ContinueStatContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_continueStat);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(188);
			match(CONTINUE);
			setState(189);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TeiktContext extends ParserRuleContext {
		public TerminalNode PRINT() { return getToken(SkolensParser.PRINT, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(SkolensParser.SEMI, 0); }
		public TeiktContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_teikt; }
	}

	public final TeiktContext teikt() throws RecognitionException {
		TeiktContext _localctx = new TeiktContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_teikt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(191);
			match(PRINT);
			setState(192);
			expr(0);
			setState(193);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableMethodCallsContext extends ParserRuleContext {
		public VariableMethodCallsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableMethodCalls; }
	 
		public VariableMethodCallsContext() { }
		public void copyFrom(VariableMethodCallsContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ListAddContext extends VariableMethodCallsContext {
		public TerminalNode ID() { return getToken(SkolensParser.ID, 0); }
		public TerminalNode DOT() { return getToken(SkolensParser.DOT, 0); }
		public TerminalNode PIEVIENOT() { return getToken(SkolensParser.PIEVIENOT, 0); }
		public TerminalNode LPAREN() { return getToken(SkolensParser.LPAREN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(SkolensParser.RPAREN, 0); }
		public TerminalNode SEMI() { return getToken(SkolensParser.SEMI, 0); }
		public ListAddContext(VariableMethodCallsContext ctx) { copyFrom(ctx); }
	}
	public static class ListInsertContext extends VariableMethodCallsContext {
		public TerminalNode ID() { return getToken(SkolensParser.ID, 0); }
		public TerminalNode DOT() { return getToken(SkolensParser.DOT, 0); }
		public TerminalNode IEVIETOT() { return getToken(SkolensParser.IEVIETOT, 0); }
		public TerminalNode LPAREN() { return getToken(SkolensParser.LPAREN, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode COMMA() { return getToken(SkolensParser.COMMA, 0); }
		public TerminalNode RPAREN() { return getToken(SkolensParser.RPAREN, 0); }
		public TerminalNode SEMI() { return getToken(SkolensParser.SEMI, 0); }
		public ListInsertContext(VariableMethodCallsContext ctx) { copyFrom(ctx); }
	}
	public static class ListRemoveContext extends VariableMethodCallsContext {
		public TerminalNode ID() { return getToken(SkolensParser.ID, 0); }
		public TerminalNode DOT() { return getToken(SkolensParser.DOT, 0); }
		public TerminalNode DZEST() { return getToken(SkolensParser.DZEST, 0); }
		public TerminalNode LPAREN() { return getToken(SkolensParser.LPAREN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(SkolensParser.RPAREN, 0); }
		public TerminalNode SEMI() { return getToken(SkolensParser.SEMI, 0); }
		public ListRemoveContext(VariableMethodCallsContext ctx) { copyFrom(ctx); }
	}

	public final VariableMethodCallsContext variableMethodCalls() throws RecognitionException {
		VariableMethodCallsContext _localctx = new VariableMethodCallsContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_variableMethodCalls);
		try {
			setState(221);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				_localctx = new ListAddContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(195);
				match(ID);
				setState(196);
				match(DOT);
				setState(197);
				match(PIEVIENOT);
				setState(198);
				match(LPAREN);
				setState(199);
				expr(0);
				setState(200);
				match(RPAREN);
				setState(201);
				match(SEMI);
				}
				break;
			case 2:
				_localctx = new ListRemoveContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(203);
				match(ID);
				setState(204);
				match(DOT);
				setState(205);
				match(DZEST);
				setState(206);
				match(LPAREN);
				setState(207);
				expr(0);
				setState(208);
				match(RPAREN);
				setState(209);
				match(SEMI);
				}
				break;
			case 3:
				_localctx = new ListInsertContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(211);
				match(ID);
				setState(212);
				match(DOT);
				setState(213);
				match(IEVIETOT);
				setState(214);
				match(LPAREN);
				setState(215);
				expr(0);
				setState(216);
				match(COMMA);
				setState(217);
				expr(0);
				setState(218);
				match(RPAREN);
				setState(219);
				match(SEMI);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignContext extends ParserRuleContext {
		public AssignContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assign; }
	 
		public AssignContext() { }
		public void copyFrom(AssignContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ListAssignContext extends AssignContext {
		public TerminalNode ID() { return getToken(SkolensParser.ID, 0); }
		public TerminalNode LBRAC() { return getToken(SkolensParser.LBRAC, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode RBRAC() { return getToken(SkolensParser.RBRAC, 0); }
		public TerminalNode ASSIGN() { return getToken(SkolensParser.ASSIGN, 0); }
		public TerminalNode SEMI() { return getToken(SkolensParser.SEMI, 0); }
		public ListAssignContext(AssignContext ctx) { copyFrom(ctx); }
	}
	public static class NewAssignContext extends AssignContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode ID() { return getToken(SkolensParser.ID, 0); }
		public TerminalNode ASSIGN() { return getToken(SkolensParser.ASSIGN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(SkolensParser.SEMI, 0); }
		public NewAssignContext(AssignContext ctx) { copyFrom(ctx); }
	}
	public static class ReAssignContext extends AssignContext {
		public TerminalNode ID() { return getToken(SkolensParser.ID, 0); }
		public TerminalNode ASSIGN() { return getToken(SkolensParser.ASSIGN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(SkolensParser.SEMI, 0); }
		public ReAssignContext(AssignContext ctx) { copyFrom(ctx); }
	}

	public final AssignContext assign() throws RecognitionException {
		AssignContext _localctx = new AssignContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_assign);
		try {
			setState(242);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
			case 1:
				_localctx = new ListAssignContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(223);
				match(ID);
				setState(224);
				match(LBRAC);
				setState(225);
				expr(0);
				setState(226);
				match(RBRAC);
				setState(227);
				match(ASSIGN);
				setState(228);
				expr(0);
				setState(229);
				match(SEMI);
				}
				break;
			case 2:
				_localctx = new ReAssignContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(231);
				match(ID);
				setState(232);
				match(ASSIGN);
				setState(233);
				expr(0);
				setState(234);
				match(SEMI);
				}
				break;
			case 3:
				_localctx = new NewAssignContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(236);
				type();
				setState(237);
				match(ID);
				setState(238);
				match(ASSIGN);
				setState(239);
				expr(0);
				setState(240);
				match(SEMI);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExprContext extends ParserRuleContext {
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	 
		public ExprContext() { }
		public void copyFrom(ExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class NumContext extends ExprContext {
		public TerminalNode NUM() { return getToken(SkolensParser.NUM, 0); }
		public NumContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class ListAccessContext extends ExprContext {
		public TerminalNode ID() { return getToken(SkolensParser.ID, 0); }
		public TerminalNode LBRAC() { return getToken(SkolensParser.LBRAC, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode RBRAC() { return getToken(SkolensParser.RBRAC, 0); }
		public ListAccessContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class ListLengthContext extends ExprContext {
		public TerminalNode ID() { return getToken(SkolensParser.ID, 0); }
		public TerminalNode DOT() { return getToken(SkolensParser.DOT, 0); }
		public TerminalNode GARUMS() { return getToken(SkolensParser.GARUMS, 0); }
		public ListLengthContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class StringContext extends ExprContext {
		public TerminalNode STRING() { return getToken(SkolensParser.STRING, 0); }
		public StringContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class EqualityOpContext extends ExprContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode EQ() { return getToken(SkolensParser.EQ, 0); }
		public TerminalNode NOTEQ() { return getToken(SkolensParser.NOTEQ, 0); }
		public EqualityOpContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class ConcatOpContext extends ExprContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode CONCAT() { return getToken(SkolensParser.CONCAT, 0); }
		public ConcatOpContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class FuncCallContext extends ExprContext {
		public TerminalNode ID() { return getToken(SkolensParser.ID, 0); }
		public TerminalNode LPAREN() { return getToken(SkolensParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(SkolensParser.RPAREN, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(SkolensParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(SkolensParser.COMMA, i);
		}
		public FuncCallContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class CompOpContext extends ExprContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode LESS() { return getToken(SkolensParser.LESS, 0); }
		public TerminalNode LESSEQ() { return getToken(SkolensParser.LESSEQ, 0); }
		public TerminalNode LARG() { return getToken(SkolensParser.LARG, 0); }
		public TerminalNode LARGEQ() { return getToken(SkolensParser.LARGEQ, 0); }
		public CompOpContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class BoolContext extends ExprContext {
		public TerminalNode BOOL() { return getToken(SkolensParser.BOOL, 0); }
		public BoolContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class ListContext extends ExprContext {
		public TerminalNode LBRAC() { return getToken(SkolensParser.LBRAC, 0); }
		public TerminalNode RBRAC() { return getToken(SkolensParser.RBRAC, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(SkolensParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(SkolensParser.COMMA, i);
		}
		public ListContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class IdContext extends ExprContext {
		public TerminalNode ID() { return getToken(SkolensParser.ID, 0); }
		public IdContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class MathOpContext extends ExprContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode EXP() { return getToken(SkolensParser.EXP, 0); }
		public TerminalNode MUL() { return getToken(SkolensParser.MUL, 0); }
		public TerminalNode DIV() { return getToken(SkolensParser.DIV, 0); }
		public TerminalNode MOD() { return getToken(SkolensParser.MOD, 0); }
		public TerminalNode ADD() { return getToken(SkolensParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(SkolensParser.SUB, 0); }
		public MathOpContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class ParenContext extends ExprContext {
		public TerminalNode LPAREN() { return getToken(SkolensParser.LPAREN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(SkolensParser.RPAREN, 0); }
		public ParenContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class LogicOpContext extends ExprContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode AND() { return getToken(SkolensParser.AND, 0); }
		public TerminalNode OR() { return getToken(SkolensParser.OR, 0); }
		public LogicOpContext(ExprContext ctx) { copyFrom(ctx); }
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 32;
		enterRecursionRule(_localctx, 32, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(286);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
			case 1:
				{
				_localctx = new IdContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(245);
				match(ID);
				}
				break;
			case 2:
				{
				_localctx = new NumContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(246);
				match(NUM);
				}
				break;
			case 3:
				{
				_localctx = new StringContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(247);
				match(STRING);
				}
				break;
			case 4:
				{
				_localctx = new BoolContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(248);
				match(BOOL);
				}
				break;
			case 5:
				{
				_localctx = new ListContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(249);
				match(LBRAC);
				setState(258);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << LBRAC) | (1L << BOOL) | (1L << STRING) | (1L << NUM) | (1L << ID))) != 0)) {
					{
					setState(250);
					expr(0);
					setState(255);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(251);
						match(COMMA);
						setState(252);
						expr(0);
						}
						}
						setState(257);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(260);
				match(RBRAC);
				}
				break;
			case 6:
				{
				_localctx = new FuncCallContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(261);
				match(ID);
				setState(262);
				match(LPAREN);
				setState(271);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << LBRAC) | (1L << BOOL) | (1L << STRING) | (1L << NUM) | (1L << ID))) != 0)) {
					{
					setState(263);
					expr(0);
					setState(268);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(264);
						match(COMMA);
						setState(265);
						expr(0);
						}
						}
						setState(270);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(273);
				match(RPAREN);
				}
				break;
			case 7:
				{
				_localctx = new ListAccessContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(274);
				match(ID);
				setState(275);
				match(LBRAC);
				setState(276);
				expr(0);
				setState(277);
				match(RBRAC);
				}
				break;
			case 8:
				{
				_localctx = new ListLengthContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(279);
				match(ID);
				setState(280);
				match(DOT);
				setState(281);
				match(GARUMS);
				}
				break;
			case 9:
				{
				_localctx = new ParenContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(282);
				match(LPAREN);
				setState(283);
				expr(0);
				setState(284);
				match(RPAREN);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(314);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(312);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
					case 1:
						{
						_localctx = new LogicOpContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(288);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(289);
						match(AND);
						setState(290);
						expr(9);
						}
						break;
					case 2:
						{
						_localctx = new LogicOpContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(291);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(292);
						match(OR);
						setState(293);
						expr(8);
						}
						break;
					case 3:
						{
						_localctx = new MathOpContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(294);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(295);
						match(EXP);
						setState(296);
						expr(7);
						}
						break;
					case 4:
						{
						_localctx = new MathOpContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(297);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(298);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MUL) | (1L << DIV) | (1L << MOD))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(299);
						expr(6);
						}
						break;
					case 5:
						{
						_localctx = new MathOpContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(300);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(301);
						_la = _input.LA(1);
						if ( !(_la==ADD || _la==SUB) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(302);
						expr(5);
						}
						break;
					case 6:
						{
						_localctx = new CompOpContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(303);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(304);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LESS) | (1L << LESSEQ) | (1L << LARG) | (1L << LARGEQ))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(305);
						expr(4);
						}
						break;
					case 7:
						{
						_localctx = new EqualityOpContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(306);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(307);
						_la = _input.LA(1);
						if ( !(_la==EQ || _la==NOTEQ) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(308);
						expr(3);
						}
						break;
					case 8:
						{
						_localctx = new ConcatOpContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(309);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(310);
						match(CONCAT);
						setState(311);
						expr(2);
						}
						break;
					}
					} 
				}
				setState(316);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class TypeContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(SkolensParser.ID, 0); }
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(317);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 16:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 8);
		case 1:
			return precpred(_ctx, 7);
		case 2:
			return precpred(_ctx, 6);
		case 3:
			return precpred(_ctx, 5);
		case 4:
			return precpred(_ctx, 4);
		case 5:
			return precpred(_ctx, 3);
		case 6:
			return precpred(_ctx, 2);
		case 7:
			return precpred(_ctx, 1);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\60\u0142\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\3\2\3\2\7\2)\n\2\f\2\16\2,\13\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\5\3=\n\3\3\4\3\4\7\4A\n\4\f\4\16\4D\13"+
		"\4\3\4\5\4G\n\4\3\5\3\5\3\5\3\5\3\5\3\5\7\5O\n\5\f\5\16\5R\13\5\3\5\3"+
		"\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\7\6]\n\6\f\6\16\6`\13\6\3\6\3\6\3\7\3\7"+
		"\3\7\7\7g\n\7\f\7\16\7j\13\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\7\bt\n\b"+
		"\f\b\16\bw\13\b\3\b\3\b\3\t\3\t\3\t\7\t~\n\t\f\t\16\t\u0081\13\t\3\t\3"+
		"\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\7\n\u0092\n\n\f"+
		"\n\16\n\u0095\13\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\7\13\u00a3\n\13\f\13\16\13\u00a6\13\13\5\13\u00a8\n\13\3\13\3\13"+
		"\3\13\7\13\u00ad\n\13\f\13\16\13\u00b0\13\13\3\13\3\13\3\f\3\f\3\f\3\f"+
		"\3\f\3\f\5\f\u00ba\n\f\3\r\3\r\3\r\3\16\3\16\3\16\3\17\3\17\3\17\3\17"+
		"\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20"+
		"\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\5\20\u00e0"+
		"\n\20\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\3\21\3\21\5\21\u00f5\n\21\3\22\3\22\3\22\3\22\3\22"+
		"\3\22\3\22\3\22\3\22\7\22\u0100\n\22\f\22\16\22\u0103\13\22\5\22\u0105"+
		"\n\22\3\22\3\22\3\22\3\22\3\22\3\22\7\22\u010d\n\22\f\22\16\22\u0110\13"+
		"\22\5\22\u0112\n\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22"+
		"\3\22\3\22\3\22\5\22\u0121\n\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22"+
		"\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22"+
		"\3\22\3\22\7\22\u013b\n\22\f\22\16\22\u013e\13\22\3\23\3\23\3\23\2\3\""+
		"\24\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$\2\6\4\2\7\b\n\n\3\2\5\6"+
		"\3\2\23\26\3\2\21\22\2\u015f\2*\3\2\2\2\4<\3\2\2\2\6>\3\2\2\2\bH\3\2\2"+
		"\2\nU\3\2\2\2\fc\3\2\2\2\16m\3\2\2\2\20z\3\2\2\2\22\u0089\3\2\2\2\24\u0098"+
		"\3\2\2\2\26\u00b9\3\2\2\2\30\u00bb\3\2\2\2\32\u00be\3\2\2\2\34\u00c1\3"+
		"\2\2\2\36\u00df\3\2\2\2 \u00f4\3\2\2\2\"\u0120\3\2\2\2$\u013f\3\2\2\2"+
		"&)\5\4\3\2\')\5\24\13\2(&\3\2\2\2(\'\3\2\2\2),\3\2\2\2*(\3\2\2\2*+\3\2"+
		"\2\2+-\3\2\2\2,*\3\2\2\2-.\7\2\2\3.\3\3\2\2\2/=\5\26\f\2\60=\5\30\r\2"+
		"\61=\5\32\16\2\62=\5\6\4\2\63=\5\16\b\2\64=\5\20\t\2\65=\5\22\n\2\66="+
		"\5\34\17\2\67=\5\36\20\28=\5 \21\29:\5\"\22\2:;\7\4\2\2;=\3\2\2\2</\3"+
		"\2\2\2<\60\3\2\2\2<\61\3\2\2\2<\62\3\2\2\2<\63\3\2\2\2<\64\3\2\2\2<\65"+
		"\3\2\2\2<\66\3\2\2\2<\67\3\2\2\2<8\3\2\2\2<9\3\2\2\2=\5\3\2\2\2>B\5\b"+
		"\5\2?A\5\n\6\2@?\3\2\2\2AD\3\2\2\2B@\3\2\2\2BC\3\2\2\2CF\3\2\2\2DB\3\2"+
		"\2\2EG\5\f\7\2FE\3\2\2\2FG\3\2\2\2G\7\3\2\2\2HI\7!\2\2IJ\7\13\2\2JK\5"+
		"\"\22\2KL\7\f\2\2LP\7\r\2\2MO\5\4\3\2NM\3\2\2\2OR\3\2\2\2PN\3\2\2\2PQ"+
		"\3\2\2\2QS\3\2\2\2RP\3\2\2\2ST\7\16\2\2T\t\3\2\2\2UV\7\"\2\2VW\7!\2\2"+
		"WX\7\13\2\2XY\5\"\22\2YZ\7\f\2\2Z^\7\r\2\2[]\5\4\3\2\\[\3\2\2\2]`\3\2"+
		"\2\2^\\\3\2\2\2^_\3\2\2\2_a\3\2\2\2`^\3\2\2\2ab\7\16\2\2b\13\3\2\2\2c"+
		"d\7\"\2\2dh\7\r\2\2eg\5\4\3\2fe\3\2\2\2gj\3\2\2\2hf\3\2\2\2hi\3\2\2\2"+
		"ik\3\2\2\2jh\3\2\2\2kl\7\16\2\2l\r\3\2\2\2mn\7#\2\2no\7\13\2\2op\5\"\22"+
		"\2pq\7\f\2\2qu\7\r\2\2rt\5\4\3\2sr\3\2\2\2tw\3\2\2\2us\3\2\2\2uv\3\2\2"+
		"\2vx\3\2\2\2wu\3\2\2\2xy\7\16\2\2y\17\3\2\2\2z{\7$\2\2{\177\7\r\2\2|~"+
		"\5\4\3\2}|\3\2\2\2~\u0081\3\2\2\2\177}\3\2\2\2\177\u0080\3\2\2\2\u0080"+
		"\u0082\3\2\2\2\u0081\177\3\2\2\2\u0082\u0083\7\16\2\2\u0083\u0084\7#\2"+
		"\2\u0084\u0085\7\13\2\2\u0085\u0086\5\"\22\2\u0086\u0087\7\f\2\2\u0087"+
		"\u0088\7\4\2\2\u0088\21\3\2\2\2\u0089\u008a\7%\2\2\u008a\u008b\7.\2\2"+
		"\u008b\u008c\7&\2\2\u008c\u008d\5\"\22\2\u008d\u008e\7\'\2\2\u008e\u008f"+
		"\5\"\22\2\u008f\u0093\7\r\2\2\u0090\u0092\5\4\3\2\u0091\u0090\3\2\2\2"+
		"\u0092\u0095\3\2\2\2\u0093\u0091\3\2\2\2\u0093\u0094\3\2\2\2\u0094\u0096"+
		"\3\2\2\2\u0095\u0093\3\2\2\2\u0096\u0097\7\16\2\2\u0097\23\3\2\2\2\u0098"+
		"\u0099\5$\23\2\u0099\u009a\7.\2\2\u009a\u00a7\7\13\2\2\u009b\u009c\5$"+
		"\23\2\u009c\u009d\7.\2\2\u009d\u00a4\3\2\2\2\u009e\u009f\7\33\2\2\u009f"+
		"\u00a0\5$\23\2\u00a0\u00a1\7.\2\2\u00a1\u00a3\3\2\2\2\u00a2\u009e\3\2"+
		"\2\2\u00a3\u00a6\3\2\2\2\u00a4\u00a2\3\2\2\2\u00a4\u00a5\3\2\2\2\u00a5"+
		"\u00a8\3\2\2\2\u00a6\u00a4\3\2\2\2\u00a7\u009b\3\2\2\2\u00a7\u00a8\3\2"+
		"\2\2\u00a8\u00a9\3\2\2\2\u00a9\u00aa\7\f\2\2\u00aa\u00ae\7\r\2\2\u00ab"+
		"\u00ad\5\4\3\2\u00ac\u00ab\3\2\2\2\u00ad\u00b0\3\2\2\2\u00ae\u00ac\3\2"+
		"\2\2\u00ae\u00af\3\2\2\2\u00af\u00b1\3\2\2\2\u00b0\u00ae\3\2\2\2\u00b1"+
		"\u00b2\7\16\2\2\u00b2\25\3\2\2\2\u00b3\u00b4\7(\2\2\u00b4\u00b5\5\"\22"+
		"\2\u00b5\u00b6\7\4\2\2\u00b6\u00ba\3\2\2\2\u00b7\u00b8\7(\2\2\u00b8\u00ba"+
		"\7\4\2\2\u00b9\u00b3\3\2\2\2\u00b9\u00b7\3\2\2\2\u00ba\27\3\2\2\2\u00bb"+
		"\u00bc\7)\2\2\u00bc\u00bd\7\4\2\2\u00bd\31\3\2\2\2\u00be\u00bf\7*\2\2"+
		"\u00bf\u00c0\7\4\2\2\u00c0\33\3\2\2\2\u00c1\u00c2\7 \2\2\u00c2\u00c3\5"+
		"\"\22\2\u00c3\u00c4\7\4\2\2\u00c4\35\3\2\2\2\u00c5\u00c6\7.\2\2\u00c6"+
		"\u00c7\7\32\2\2\u00c7\u00c8\7\34\2\2\u00c8\u00c9\7\13\2\2\u00c9\u00ca"+
		"\5\"\22\2\u00ca\u00cb\7\f\2\2\u00cb\u00cc\7\4\2\2\u00cc\u00e0\3\2\2\2"+
		"\u00cd\u00ce\7.\2\2\u00ce\u00cf\7\32\2\2\u00cf\u00d0\7\35\2\2\u00d0\u00d1"+
		"\7\13\2\2\u00d1\u00d2\5\"\22\2\u00d2\u00d3\7\f\2\2\u00d3\u00d4\7\4\2\2"+
		"\u00d4\u00e0\3\2\2\2\u00d5\u00d6\7.\2\2\u00d6\u00d7\7\32\2\2\u00d7\u00d8"+
		"\7\36\2\2\u00d8\u00d9\7\13\2\2\u00d9\u00da\5\"\22\2\u00da\u00db\7\33\2"+
		"\2\u00db\u00dc\5\"\22\2\u00dc\u00dd\7\f\2\2\u00dd\u00de\7\4\2\2\u00de"+
		"\u00e0\3\2\2\2\u00df\u00c5\3\2\2\2\u00df\u00cd\3\2\2\2\u00df\u00d5\3\2"+
		"\2\2\u00e0\37\3\2\2\2\u00e1\u00e2\7.\2\2\u00e2\u00e3\7\17\2\2\u00e3\u00e4"+
		"\5\"\22\2\u00e4\u00e5\7\20\2\2\u00e5\u00e6\7\3\2\2\u00e6\u00e7\5\"\22"+
		"\2\u00e7\u00e8\7\4\2\2\u00e8\u00f5\3\2\2\2\u00e9\u00ea\7.\2\2\u00ea\u00eb"+
		"\7\3\2\2\u00eb\u00ec\5\"\22\2\u00ec\u00ed\7\4\2\2\u00ed\u00f5\3\2\2\2"+
		"\u00ee\u00ef\5$\23\2\u00ef\u00f0\7.\2\2\u00f0\u00f1\7\3\2\2\u00f1\u00f2"+
		"\5\"\22\2\u00f2\u00f3\7\4\2\2\u00f3\u00f5\3\2\2\2\u00f4\u00e1\3\2\2\2"+
		"\u00f4\u00e9\3\2\2\2\u00f4\u00ee\3\2\2\2\u00f5!\3\2\2\2\u00f6\u00f7\b"+
		"\22\1\2\u00f7\u0121\7.\2\2\u00f8\u0121\7-\2\2\u00f9\u0121\7,\2\2\u00fa"+
		"\u0121\7+\2\2\u00fb\u0104\7\17\2\2\u00fc\u0101\5\"\22\2\u00fd\u00fe\7"+
		"\33\2\2\u00fe\u0100\5\"\22\2\u00ff\u00fd\3\2\2\2\u0100\u0103\3\2\2\2\u0101"+
		"\u00ff\3\2\2\2\u0101\u0102\3\2\2\2\u0102\u0105\3\2\2\2\u0103\u0101\3\2"+
		"\2\2\u0104\u00fc\3\2\2\2\u0104\u0105\3\2\2\2\u0105\u0106\3\2\2\2\u0106"+
		"\u0121\7\20\2\2\u0107\u0108\7.\2\2\u0108\u0111\7\13\2\2\u0109\u010e\5"+
		"\"\22\2\u010a\u010b\7\33\2\2\u010b\u010d\5\"\22\2\u010c\u010a\3\2\2\2"+
		"\u010d\u0110\3\2\2\2\u010e\u010c\3\2\2\2\u010e\u010f\3\2\2\2\u010f\u0112"+
		"\3\2\2\2\u0110\u010e\3\2\2\2\u0111\u0109\3\2\2\2\u0111\u0112\3\2\2\2\u0112"+
		"\u0113\3\2\2\2\u0113\u0121\7\f\2\2\u0114\u0115\7.\2\2\u0115\u0116\7\17"+
		"\2\2\u0116\u0117\5\"\22\2\u0117\u0118\7\20\2\2\u0118\u0121\3\2\2\2\u0119"+
		"\u011a\7.\2\2\u011a\u011b\7\32\2\2\u011b\u0121\7\37\2\2\u011c\u011d\7"+
		"\13\2\2\u011d\u011e\5\"\22\2\u011e\u011f\7\f\2\2\u011f\u0121\3\2\2\2\u0120"+
		"\u00f6\3\2\2\2\u0120\u00f8\3\2\2\2\u0120\u00f9\3\2\2\2\u0120\u00fa\3\2"+
		"\2\2\u0120\u00fb\3\2\2\2\u0120\u0107\3\2\2\2\u0120\u0114\3\2\2\2\u0120"+
		"\u0119\3\2\2\2\u0120\u011c\3\2\2\2\u0121\u013c\3\2\2\2\u0122\u0123\f\n"+
		"\2\2\u0123\u0124\7\27\2\2\u0124\u013b\5\"\22\13\u0125\u0126\f\t\2\2\u0126"+
		"\u0127\7\30\2\2\u0127\u013b\5\"\22\n\u0128\u0129\f\b\2\2\u0129\u012a\7"+
		"\t\2\2\u012a\u013b\5\"\22\t\u012b\u012c\f\7\2\2\u012c\u012d\t\2\2\2\u012d"+
		"\u013b\5\"\22\b\u012e\u012f\f\6\2\2\u012f\u0130\t\3\2\2\u0130\u013b\5"+
		"\"\22\7\u0131\u0132\f\5\2\2\u0132\u0133\t\4\2\2\u0133\u013b\5\"\22\6\u0134"+
		"\u0135\f\4\2\2\u0135\u0136\t\5\2\2\u0136\u013b\5\"\22\5\u0137\u0138\f"+
		"\3\2\2\u0138\u0139\7\31\2\2\u0139\u013b\5\"\22\4\u013a\u0122\3\2\2\2\u013a"+
		"\u0125\3\2\2\2\u013a\u0128\3\2\2\2\u013a\u012b\3\2\2\2\u013a\u012e\3\2"+
		"\2\2\u013a\u0131\3\2\2\2\u013a\u0134\3\2\2\2\u013a\u0137\3\2\2\2\u013b"+
		"\u013e\3\2\2\2\u013c\u013a\3\2\2\2\u013c\u013d\3\2\2\2\u013d#\3\2\2\2"+
		"\u013e\u013c\3\2\2\2\u013f\u0140\7.\2\2\u0140%\3\2\2\2\32(*<BFP^hu\177"+
		"\u0093\u00a4\u00a7\u00ae\u00b9\u00df\u00f4\u0101\u0104\u010e\u0111\u0120"+
		"\u013a\u013c";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}