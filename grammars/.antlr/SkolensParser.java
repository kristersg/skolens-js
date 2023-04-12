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
		BOOL=33, STRING=34, NUM=35, ID=36, WS=37, COMMENT=38;
	public static final int
		RULE_program = 0, RULE_stat = 1, RULE_conditionalStat = 2, RULE_ifStat = 3, 
		RULE_elseIfStat = 4, RULE_elseStat = 5, RULE_teikt = 6, RULE_variableMethodCalls = 7, 
		RULE_assign = 8, RULE_expr = 9, RULE_type = 10;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "stat", "conditionalStat", "ifStat", "elseIfStat", "elseStat", 
			"teikt", "variableMethodCalls", "assign", "expr", "type"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'='", "';'", "'+'", "'-'", "'*'", "'/'", "'^'", "'%'", "'('", 
			"')'", "'{'", "'}'", "'['", "']'", "'=='", "'!='", "'<'", "'<='", "'>'", 
			"'>='", "'un'", "'vai'", "'..'", "'.'", "','", "'pievienot'", "'dz\u0113st'", 
			"'ievietot'", "'garums'", "'teikt'", "'ja'", "'cit\u0101di'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "ASSIGN", "SEMI", "ADD", "SUB", "MUL", "DIV", "EXP", "MOD", "LPAREN", 
			"RPAREN", "LCURL", "RCURL", "LBRAC", "RBRAC", "EQ", "NOTEQ", "LESS", 
			"LESSEQ", "LARG", "LARGEQ", "AND", "OR", "CONCAT", "DOT", "COMMA", "PIEVIENOT", 
			"DZEST", "IEVIETOT", "GARUMS", "PRINT", "IF", "ELSE", "BOOL", "STRING", 
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
			setState(25);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << LBRAC) | (1L << PRINT) | (1L << IF) | (1L << BOOL) | (1L << STRING) | (1L << NUM) | (1L << ID))) != 0)) {
				{
				{
				setState(22);
				stat();
				}
				}
				setState(27);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(28);
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
		public ConditionalStatContext conditionalStat() {
			return getRuleContext(ConditionalStatContext.class,0);
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
			setState(37);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(30);
				conditionalStat();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(31);
				teikt();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(32);
				variableMethodCalls();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(33);
				assign();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(34);
				expr(0);
				setState(35);
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
			setState(39);
			ifStat();
			setState(43);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(40);
					elseIfStat();
					}
					} 
				}
				setState(45);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			}
			setState(47);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(46);
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
			setState(49);
			match(IF);
			setState(50);
			match(LPAREN);
			setState(51);
			expr(0);
			setState(52);
			match(RPAREN);
			setState(53);
			match(LCURL);
			setState(57);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << LBRAC) | (1L << PRINT) | (1L << IF) | (1L << BOOL) | (1L << STRING) | (1L << NUM) | (1L << ID))) != 0)) {
				{
				{
				setState(54);
				stat();
				}
				}
				setState(59);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(60);
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
			setState(62);
			match(ELSE);
			setState(63);
			match(IF);
			setState(64);
			match(LPAREN);
			setState(65);
			expr(0);
			setState(66);
			match(RPAREN);
			setState(67);
			match(LCURL);
			setState(71);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << LBRAC) | (1L << PRINT) | (1L << IF) | (1L << BOOL) | (1L << STRING) | (1L << NUM) | (1L << ID))) != 0)) {
				{
				{
				setState(68);
				stat();
				}
				}
				setState(73);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(74);
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
			setState(76);
			match(ELSE);
			setState(77);
			match(LCURL);
			setState(81);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << LBRAC) | (1L << PRINT) | (1L << IF) | (1L << BOOL) | (1L << STRING) | (1L << NUM) | (1L << ID))) != 0)) {
				{
				{
				setState(78);
				stat();
				}
				}
				setState(83);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(84);
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
		enterRule(_localctx, 12, RULE_teikt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(86);
			match(PRINT);
			setState(87);
			expr(0);
			setState(88);
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
		enterRule(_localctx, 14, RULE_variableMethodCalls);
		try {
			setState(116);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				_localctx = new ListAddContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(90);
				match(ID);
				setState(91);
				match(DOT);
				setState(92);
				match(PIEVIENOT);
				setState(93);
				match(LPAREN);
				setState(94);
				expr(0);
				setState(95);
				match(RPAREN);
				setState(96);
				match(SEMI);
				}
				break;
			case 2:
				_localctx = new ListRemoveContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(98);
				match(ID);
				setState(99);
				match(DOT);
				setState(100);
				match(DZEST);
				setState(101);
				match(LPAREN);
				setState(102);
				expr(0);
				setState(103);
				match(RPAREN);
				setState(104);
				match(SEMI);
				}
				break;
			case 3:
				_localctx = new ListInsertContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(106);
				match(ID);
				setState(107);
				match(DOT);
				setState(108);
				match(IEVIETOT);
				setState(109);
				match(LPAREN);
				setState(110);
				expr(0);
				setState(111);
				match(COMMA);
				setState(112);
				expr(0);
				setState(113);
				match(RPAREN);
				setState(114);
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
		enterRule(_localctx, 16, RULE_assign);
		try {
			setState(137);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				_localctx = new ListAssignContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(118);
				match(ID);
				setState(119);
				match(LBRAC);
				setState(120);
				expr(0);
				setState(121);
				match(RBRAC);
				setState(122);
				match(ASSIGN);
				setState(123);
				expr(0);
				setState(124);
				match(SEMI);
				}
				break;
			case 2:
				_localctx = new ReAssignContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(126);
				match(ID);
				setState(127);
				match(ASSIGN);
				setState(128);
				expr(0);
				setState(129);
				match(SEMI);
				}
				break;
			case 3:
				_localctx = new NewAssignContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(131);
				type();
				setState(132);
				match(ID);
				setState(133);
				match(ASSIGN);
				setState(134);
				expr(0);
				setState(135);
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
		int _startState = 18;
		enterRecursionRule(_localctx, 18, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(168);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
			case 1:
				{
				_localctx = new IdContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(140);
				match(ID);
				}
				break;
			case 2:
				{
				_localctx = new NumContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(141);
				match(NUM);
				}
				break;
			case 3:
				{
				_localctx = new StringContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(142);
				match(STRING);
				}
				break;
			case 4:
				{
				_localctx = new BoolContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(143);
				match(BOOL);
				}
				break;
			case 5:
				{
				_localctx = new ListContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(144);
				match(LBRAC);
				setState(153);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << LBRAC) | (1L << BOOL) | (1L << STRING) | (1L << NUM) | (1L << ID))) != 0)) {
					{
					setState(145);
					expr(0);
					setState(150);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(146);
						match(COMMA);
						setState(147);
						expr(0);
						}
						}
						setState(152);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(155);
				match(RBRAC);
				}
				break;
			case 6:
				{
				_localctx = new ListAccessContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(156);
				match(ID);
				setState(157);
				match(LBRAC);
				setState(158);
				expr(0);
				setState(159);
				match(RBRAC);
				}
				break;
			case 7:
				{
				_localctx = new ListLengthContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(161);
				match(ID);
				setState(162);
				match(DOT);
				setState(163);
				match(GARUMS);
				}
				break;
			case 8:
				{
				_localctx = new ParenContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(164);
				match(LPAREN);
				setState(165);
				expr(0);
				setState(166);
				match(RPAREN);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(196);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(194);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
					case 1:
						{
						_localctx = new LogicOpContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(170);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(171);
						match(AND);
						setState(172);
						expr(9);
						}
						break;
					case 2:
						{
						_localctx = new LogicOpContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(173);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(174);
						match(OR);
						setState(175);
						expr(8);
						}
						break;
					case 3:
						{
						_localctx = new MathOpContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(176);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(177);
						match(EXP);
						setState(178);
						expr(7);
						}
						break;
					case 4:
						{
						_localctx = new MathOpContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(179);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(180);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MUL) | (1L << DIV) | (1L << MOD))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(181);
						expr(6);
						}
						break;
					case 5:
						{
						_localctx = new MathOpContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(182);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(183);
						_la = _input.LA(1);
						if ( !(_la==ADD || _la==SUB) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(184);
						expr(5);
						}
						break;
					case 6:
						{
						_localctx = new CompOpContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(185);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(186);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LESS) | (1L << LESSEQ) | (1L << LARG) | (1L << LARGEQ))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(187);
						expr(4);
						}
						break;
					case 7:
						{
						_localctx = new EqualityOpContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(188);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(189);
						_la = _input.LA(1);
						if ( !(_la==EQ || _la==NOTEQ) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(190);
						expr(3);
						}
						break;
					case 8:
						{
						_localctx = new ConcatOpContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(191);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(192);
						match(CONCAT);
						setState(193);
						expr(2);
						}
						break;
					}
					} 
				}
				setState(198);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
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
		enterRule(_localctx, 20, RULE_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(199);
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
		case 9:
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3(\u00cc\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\3\2\7\2\32\n\2\f\2\16\2\35\13\2\3\2\3\2\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\5\3(\n\3\3\4\3\4\7\4,\n\4\f\4\16\4/\13\4\3\4\5\4\62\n\4\3\5"+
		"\3\5\3\5\3\5\3\5\3\5\7\5:\n\5\f\5\16\5=\13\5\3\5\3\5\3\6\3\6\3\6\3\6\3"+
		"\6\3\6\3\6\7\6H\n\6\f\6\16\6K\13\6\3\6\3\6\3\7\3\7\3\7\7\7R\n\7\f\7\16"+
		"\7U\13\7\3\7\3\7\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3"+
		"\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\5\t"+
		"w\n\t\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n"+
		"\3\n\3\n\3\n\5\n\u008c\n\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\7\13\u0097\n\13\f\13\16\13\u009a\13\13\5\13\u009c\n\13\3\13\3\13\3\13"+
		"\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\5\13\u00ab\n\13\3\13"+
		"\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\7\13\u00c5\n\13\f\13\16"+
		"\13\u00c8\13\13\3\f\3\f\3\f\2\3\24\r\2\4\6\b\n\f\16\20\22\24\26\2\6\4"+
		"\2\7\b\n\n\3\2\5\6\3\2\23\26\3\2\21\22\2\u00df\2\33\3\2\2\2\4\'\3\2\2"+
		"\2\6)\3\2\2\2\b\63\3\2\2\2\n@\3\2\2\2\fN\3\2\2\2\16X\3\2\2\2\20v\3\2\2"+
		"\2\22\u008b\3\2\2\2\24\u00aa\3\2\2\2\26\u00c9\3\2\2\2\30\32\5\4\3\2\31"+
		"\30\3\2\2\2\32\35\3\2\2\2\33\31\3\2\2\2\33\34\3\2\2\2\34\36\3\2\2\2\35"+
		"\33\3\2\2\2\36\37\7\2\2\3\37\3\3\2\2\2 (\5\6\4\2!(\5\16\b\2\"(\5\20\t"+
		"\2#(\5\22\n\2$%\5\24\13\2%&\7\4\2\2&(\3\2\2\2\' \3\2\2\2\'!\3\2\2\2\'"+
		"\"\3\2\2\2\'#\3\2\2\2\'$\3\2\2\2(\5\3\2\2\2)-\5\b\5\2*,\5\n\6\2+*\3\2"+
		"\2\2,/\3\2\2\2-+\3\2\2\2-.\3\2\2\2.\61\3\2\2\2/-\3\2\2\2\60\62\5\f\7\2"+
		"\61\60\3\2\2\2\61\62\3\2\2\2\62\7\3\2\2\2\63\64\7!\2\2\64\65\7\13\2\2"+
		"\65\66\5\24\13\2\66\67\7\f\2\2\67;\7\r\2\28:\5\4\3\298\3\2\2\2:=\3\2\2"+
		"\2;9\3\2\2\2;<\3\2\2\2<>\3\2\2\2=;\3\2\2\2>?\7\16\2\2?\t\3\2\2\2@A\7\""+
		"\2\2AB\7!\2\2BC\7\13\2\2CD\5\24\13\2DE\7\f\2\2EI\7\r\2\2FH\5\4\3\2GF\3"+
		"\2\2\2HK\3\2\2\2IG\3\2\2\2IJ\3\2\2\2JL\3\2\2\2KI\3\2\2\2LM\7\16\2\2M\13"+
		"\3\2\2\2NO\7\"\2\2OS\7\r\2\2PR\5\4\3\2QP\3\2\2\2RU\3\2\2\2SQ\3\2\2\2S"+
		"T\3\2\2\2TV\3\2\2\2US\3\2\2\2VW\7\16\2\2W\r\3\2\2\2XY\7 \2\2YZ\5\24\13"+
		"\2Z[\7\4\2\2[\17\3\2\2\2\\]\7&\2\2]^\7\32\2\2^_\7\34\2\2_`\7\13\2\2`a"+
		"\5\24\13\2ab\7\f\2\2bc\7\4\2\2cw\3\2\2\2de\7&\2\2ef\7\32\2\2fg\7\35\2"+
		"\2gh\7\13\2\2hi\5\24\13\2ij\7\f\2\2jk\7\4\2\2kw\3\2\2\2lm\7&\2\2mn\7\32"+
		"\2\2no\7\36\2\2op\7\13\2\2pq\5\24\13\2qr\7\33\2\2rs\5\24\13\2st\7\f\2"+
		"\2tu\7\4\2\2uw\3\2\2\2v\\\3\2\2\2vd\3\2\2\2vl\3\2\2\2w\21\3\2\2\2xy\7"+
		"&\2\2yz\7\17\2\2z{\5\24\13\2{|\7\20\2\2|}\7\3\2\2}~\5\24\13\2~\177\7\4"+
		"\2\2\177\u008c\3\2\2\2\u0080\u0081\7&\2\2\u0081\u0082\7\3\2\2\u0082\u0083"+
		"\5\24\13\2\u0083\u0084\7\4\2\2\u0084\u008c\3\2\2\2\u0085\u0086\5\26\f"+
		"\2\u0086\u0087\7&\2\2\u0087\u0088\7\3\2\2\u0088\u0089\5\24\13\2\u0089"+
		"\u008a\7\4\2\2\u008a\u008c\3\2\2\2\u008bx\3\2\2\2\u008b\u0080\3\2\2\2"+
		"\u008b\u0085\3\2\2\2\u008c\23\3\2\2\2\u008d\u008e\b\13\1\2\u008e\u00ab"+
		"\7&\2\2\u008f\u00ab\7%\2\2\u0090\u00ab\7$\2\2\u0091\u00ab\7#\2\2\u0092"+
		"\u009b\7\17\2\2\u0093\u0098\5\24\13\2\u0094\u0095\7\33\2\2\u0095\u0097"+
		"\5\24\13\2\u0096\u0094\3\2\2\2\u0097\u009a\3\2\2\2\u0098\u0096\3\2\2\2"+
		"\u0098\u0099\3\2\2\2\u0099\u009c\3\2\2\2\u009a\u0098\3\2\2\2\u009b\u0093"+
		"\3\2\2\2\u009b\u009c\3\2\2\2\u009c\u009d\3\2\2\2\u009d\u00ab\7\20\2\2"+
		"\u009e\u009f\7&\2\2\u009f\u00a0\7\17\2\2\u00a0\u00a1\5\24\13\2\u00a1\u00a2"+
		"\7\20\2\2\u00a2\u00ab\3\2\2\2\u00a3\u00a4\7&\2\2\u00a4\u00a5\7\32\2\2"+
		"\u00a5\u00ab\7\37\2\2\u00a6\u00a7\7\13\2\2\u00a7\u00a8\5\24\13\2\u00a8"+
		"\u00a9\7\f\2\2\u00a9\u00ab\3\2\2\2\u00aa\u008d\3\2\2\2\u00aa\u008f\3\2"+
		"\2\2\u00aa\u0090\3\2\2\2\u00aa\u0091\3\2\2\2\u00aa\u0092\3\2\2\2\u00aa"+
		"\u009e\3\2\2\2\u00aa\u00a3\3\2\2\2\u00aa\u00a6\3\2\2\2\u00ab\u00c6\3\2"+
		"\2\2\u00ac\u00ad\f\n\2\2\u00ad\u00ae\7\27\2\2\u00ae\u00c5\5\24\13\13\u00af"+
		"\u00b0\f\t\2\2\u00b0\u00b1\7\30\2\2\u00b1\u00c5\5\24\13\n\u00b2\u00b3"+
		"\f\b\2\2\u00b3\u00b4\7\t\2\2\u00b4\u00c5\5\24\13\t\u00b5\u00b6\f\7\2\2"+
		"\u00b6\u00b7\t\2\2\2\u00b7\u00c5\5\24\13\b\u00b8\u00b9\f\6\2\2\u00b9\u00ba"+
		"\t\3\2\2\u00ba\u00c5\5\24\13\7\u00bb\u00bc\f\5\2\2\u00bc\u00bd\t\4\2\2"+
		"\u00bd\u00c5\5\24\13\6\u00be\u00bf\f\4\2\2\u00bf\u00c0\t\5\2\2\u00c0\u00c5"+
		"\5\24\13\5\u00c1\u00c2\f\3\2\2\u00c2\u00c3\7\31\2\2\u00c3\u00c5\5\24\13"+
		"\4\u00c4\u00ac\3\2\2\2\u00c4\u00af\3\2\2\2\u00c4\u00b2\3\2\2\2\u00c4\u00b5"+
		"\3\2\2\2\u00c4\u00b8\3\2\2\2\u00c4\u00bb\3\2\2\2\u00c4\u00be\3\2\2\2\u00c4"+
		"\u00c1\3\2\2\2\u00c5\u00c8\3\2\2\2\u00c6\u00c4\3\2\2\2\u00c6\u00c7\3\2"+
		"\2\2\u00c7\25\3\2\2\2\u00c8\u00c6\3\2\2\2\u00c9\u00ca\7&\2\2\u00ca\27"+
		"\3\2\2\2\20\33\'-\61;ISv\u008b\u0098\u009b\u00aa\u00c4\u00c6";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}