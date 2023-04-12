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
		RPAREN=10, LCURL=11, RCURL=12, EQ=13, NOTEQ=14, LESS=15, LESSEQ=16, LARG=17, 
		LARGEQ=18, AND=19, OR=20, CONCAT=21, DOT=22, PRINT=23, IF=24, ELSE=25, 
		BOOL=26, STRING=27, NUM=28, ID=29, WS=30, COMMENT=31;
	public static final int
		RULE_program = 0, RULE_stat = 1, RULE_conditionalStat = 2, RULE_ifStat = 3, 
		RULE_elseIfStat = 4, RULE_elseStat = 5, RULE_teikt = 6, RULE_assign = 7, 
		RULE_expr = 8, RULE_type = 9;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "stat", "conditionalStat", "ifStat", "elseIfStat", "elseStat", 
			"teikt", "assign", "expr", "type"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'='", "';'", "'+'", "'-'", "'*'", "'/'", "'^'", "'%'", "'('", 
			"')'", "'{'", "'}'", "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", "'un'", 
			"'vai'", "'..'", "'.'", "'teikt '", "'ja'", "'cit\u0101di'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "ASSIGN", "SEMI", "ADD", "SUB", "MUL", "DIV", "EXP", "MOD", "LPAREN", 
			"RPAREN", "LCURL", "RCURL", "EQ", "NOTEQ", "LESS", "LESSEQ", "LARG", 
			"LARGEQ", "AND", "OR", "CONCAT", "DOT", "PRINT", "IF", "ELSE", "BOOL", 
			"STRING", "NUM", "ID", "WS", "COMMENT"
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
			setState(23);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << PRINT) | (1L << IF) | (1L << BOOL) | (1L << STRING) | (1L << NUM) | (1L << ID))) != 0)) {
				{
				{
				setState(20);
				stat();
				}
				}
				setState(25);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(26);
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
			setState(34);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(28);
				conditionalStat();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(29);
				teikt();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(30);
				assign();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(31);
				expr(0);
				setState(32);
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
			setState(36);
			ifStat();
			setState(40);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(37);
					elseIfStat();
					}
					} 
				}
				setState(42);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			}
			setState(44);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(43);
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
			setState(46);
			match(IF);
			setState(47);
			match(LPAREN);
			setState(48);
			expr(0);
			setState(49);
			match(RPAREN);
			setState(50);
			match(LCURL);
			setState(54);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << PRINT) | (1L << IF) | (1L << BOOL) | (1L << STRING) | (1L << NUM) | (1L << ID))) != 0)) {
				{
				{
				setState(51);
				stat();
				}
				}
				setState(56);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(57);
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
			setState(59);
			match(ELSE);
			setState(60);
			match(IF);
			setState(61);
			match(LPAREN);
			setState(62);
			expr(0);
			setState(63);
			match(RPAREN);
			setState(64);
			match(LCURL);
			setState(68);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << PRINT) | (1L << IF) | (1L << BOOL) | (1L << STRING) | (1L << NUM) | (1L << ID))) != 0)) {
				{
				{
				setState(65);
				stat();
				}
				}
				setState(70);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(71);
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
			setState(73);
			match(ELSE);
			setState(74);
			match(LCURL);
			setState(78);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << PRINT) | (1L << IF) | (1L << BOOL) | (1L << STRING) | (1L << NUM) | (1L << ID))) != 0)) {
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
			setState(83);
			match(PRINT);
			setState(84);
			expr(0);
			setState(85);
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

	public static class AssignContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(SkolensParser.ID, 0); }
		public TerminalNode ASSIGN() { return getToken(SkolensParser.ASSIGN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(SkolensParser.SEMI, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public AssignContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assign; }
	}

	public final AssignContext assign() throws RecognitionException {
		AssignContext _localctx = new AssignContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_assign);
		try {
			setState(98);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(87);
				match(ID);
				setState(88);
				match(ASSIGN);
				setState(89);
				expr(0);
				setState(90);
				match(SEMI);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(92);
				type();
				setState(93);
				match(ID);
				setState(94);
				match(ASSIGN);
				setState(95);
				expr(0);
				setState(96);
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
	public static class NumContext extends ExprContext {
		public TerminalNode NUM() { return getToken(SkolensParser.NUM, 0); }
		public NumContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class IdContext extends ExprContext {
		public TerminalNode ID() { return getToken(SkolensParser.ID, 0); }
		public IdContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class StringContext extends ExprContext {
		public TerminalNode STRING() { return getToken(SkolensParser.STRING, 0); }
		public StringContext(ExprContext ctx) { copyFrom(ctx); }
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
		int _startState = 16;
		enterRecursionRule(_localctx, 16, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(109);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				{
				_localctx = new IdContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(101);
				match(ID);
				}
				break;
			case NUM:
				{
				_localctx = new NumContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(102);
				match(NUM);
				}
				break;
			case STRING:
				{
				_localctx = new StringContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(103);
				match(STRING);
				}
				break;
			case BOOL:
				{
				_localctx = new BoolContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(104);
				match(BOOL);
				}
				break;
			case LPAREN:
				{
				_localctx = new ParenContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(105);
				match(LPAREN);
				setState(106);
				expr(0);
				setState(107);
				match(RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(137);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(135);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
					case 1:
						{
						_localctx = new LogicOpContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(111);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(112);
						match(AND);
						setState(113);
						expr(9);
						}
						break;
					case 2:
						{
						_localctx = new LogicOpContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(114);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(115);
						match(OR);
						setState(116);
						expr(8);
						}
						break;
					case 3:
						{
						_localctx = new MathOpContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(117);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(118);
						match(EXP);
						setState(119);
						expr(7);
						}
						break;
					case 4:
						{
						_localctx = new MathOpContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(120);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(121);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MUL) | (1L << DIV) | (1L << MOD))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(122);
						expr(6);
						}
						break;
					case 5:
						{
						_localctx = new MathOpContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(123);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(124);
						_la = _input.LA(1);
						if ( !(_la==ADD || _la==SUB) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(125);
						expr(5);
						}
						break;
					case 6:
						{
						_localctx = new CompOpContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(126);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(127);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LESS) | (1L << LESSEQ) | (1L << LARG) | (1L << LARGEQ))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(128);
						expr(4);
						}
						break;
					case 7:
						{
						_localctx = new EqualityOpContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(129);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(130);
						_la = _input.LA(1);
						if ( !(_la==EQ || _la==NOTEQ) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(131);
						expr(3);
						}
						break;
					case 8:
						{
						_localctx = new ConcatOpContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(132);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(133);
						match(CONCAT);
						setState(134);
						expr(2);
						}
						break;
					}
					} 
				}
				setState(139);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
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
		enterRule(_localctx, 18, RULE_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(140);
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
		case 8:
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3!\u0091\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\3\2\7\2\30\n\2\f\2\16\2\33\13\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\5"+
		"\3%\n\3\3\4\3\4\7\4)\n\4\f\4\16\4,\13\4\3\4\5\4/\n\4\3\5\3\5\3\5\3\5\3"+
		"\5\3\5\7\5\67\n\5\f\5\16\5:\13\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\7"+
		"\6E\n\6\f\6\16\6H\13\6\3\6\3\6\3\7\3\7\3\7\7\7O\n\7\f\7\16\7R\13\7\3\7"+
		"\3\7\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\5\te"+
		"\n\t\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\5\np\n\n\3\n\3\n\3\n\3\n\3\n"+
		"\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3"+
		"\n\3\n\7\n\u008a\n\n\f\n\16\n\u008d\13\n\3\13\3\13\3\13\2\3\22\f\2\4\6"+
		"\b\n\f\16\20\22\24\2\6\4\2\7\b\n\n\3\2\5\6\3\2\21\24\3\2\17\20\2\u009c"+
		"\2\31\3\2\2\2\4$\3\2\2\2\6&\3\2\2\2\b\60\3\2\2\2\n=\3\2\2\2\fK\3\2\2\2"+
		"\16U\3\2\2\2\20d\3\2\2\2\22o\3\2\2\2\24\u008e\3\2\2\2\26\30\5\4\3\2\27"+
		"\26\3\2\2\2\30\33\3\2\2\2\31\27\3\2\2\2\31\32\3\2\2\2\32\34\3\2\2\2\33"+
		"\31\3\2\2\2\34\35\7\2\2\3\35\3\3\2\2\2\36%\5\6\4\2\37%\5\16\b\2 %\5\20"+
		"\t\2!\"\5\22\n\2\"#\7\4\2\2#%\3\2\2\2$\36\3\2\2\2$\37\3\2\2\2$ \3\2\2"+
		"\2$!\3\2\2\2%\5\3\2\2\2&*\5\b\5\2\')\5\n\6\2(\'\3\2\2\2),\3\2\2\2*(\3"+
		"\2\2\2*+\3\2\2\2+.\3\2\2\2,*\3\2\2\2-/\5\f\7\2.-\3\2\2\2./\3\2\2\2/\7"+
		"\3\2\2\2\60\61\7\32\2\2\61\62\7\13\2\2\62\63\5\22\n\2\63\64\7\f\2\2\64"+
		"8\7\r\2\2\65\67\5\4\3\2\66\65\3\2\2\2\67:\3\2\2\28\66\3\2\2\289\3\2\2"+
		"\29;\3\2\2\2:8\3\2\2\2;<\7\16\2\2<\t\3\2\2\2=>\7\33\2\2>?\7\32\2\2?@\7"+
		"\13\2\2@A\5\22\n\2AB\7\f\2\2BF\7\r\2\2CE\5\4\3\2DC\3\2\2\2EH\3\2\2\2F"+
		"D\3\2\2\2FG\3\2\2\2GI\3\2\2\2HF\3\2\2\2IJ\7\16\2\2J\13\3\2\2\2KL\7\33"+
		"\2\2LP\7\r\2\2MO\5\4\3\2NM\3\2\2\2OR\3\2\2\2PN\3\2\2\2PQ\3\2\2\2QS\3\2"+
		"\2\2RP\3\2\2\2ST\7\16\2\2T\r\3\2\2\2UV\7\31\2\2VW\5\22\n\2WX\7\4\2\2X"+
		"\17\3\2\2\2YZ\7\37\2\2Z[\7\3\2\2[\\\5\22\n\2\\]\7\4\2\2]e\3\2\2\2^_\5"+
		"\24\13\2_`\7\37\2\2`a\7\3\2\2ab\5\22\n\2bc\7\4\2\2ce\3\2\2\2dY\3\2\2\2"+
		"d^\3\2\2\2e\21\3\2\2\2fg\b\n\1\2gp\7\37\2\2hp\7\36\2\2ip\7\35\2\2jp\7"+
		"\34\2\2kl\7\13\2\2lm\5\22\n\2mn\7\f\2\2np\3\2\2\2of\3\2\2\2oh\3\2\2\2"+
		"oi\3\2\2\2oj\3\2\2\2ok\3\2\2\2p\u008b\3\2\2\2qr\f\n\2\2rs\7\25\2\2s\u008a"+
		"\5\22\n\13tu\f\t\2\2uv\7\26\2\2v\u008a\5\22\n\nwx\f\b\2\2xy\7\t\2\2y\u008a"+
		"\5\22\n\tz{\f\7\2\2{|\t\2\2\2|\u008a\5\22\n\b}~\f\6\2\2~\177\t\3\2\2\177"+
		"\u008a\5\22\n\7\u0080\u0081\f\5\2\2\u0081\u0082\t\4\2\2\u0082\u008a\5"+
		"\22\n\6\u0083\u0084\f\4\2\2\u0084\u0085\t\5\2\2\u0085\u008a\5\22\n\5\u0086"+
		"\u0087\f\3\2\2\u0087\u0088\7\27\2\2\u0088\u008a\5\22\n\4\u0089q\3\2\2"+
		"\2\u0089t\3\2\2\2\u0089w\3\2\2\2\u0089z\3\2\2\2\u0089}\3\2\2\2\u0089\u0080"+
		"\3\2\2\2\u0089\u0083\3\2\2\2\u0089\u0086\3\2\2\2\u008a\u008d\3\2\2\2\u008b"+
		"\u0089\3\2\2\2\u008b\u008c\3\2\2\2\u008c\23\3\2\2\2\u008d\u008b\3\2\2"+
		"\2\u008e\u008f\7\37\2\2\u008f\25\3\2\2\2\r\31$*.8FPdo\u0089\u008b";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}