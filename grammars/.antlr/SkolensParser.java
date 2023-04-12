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
		EQ=1, SEMI=2, ADD=3, SUB=4, MUL=5, DIV=6, LPAREN=7, RPAREN=8, LCURL=9, 
		RCURL=10, PRINT=11, IF=12, ELSE=13, BOOL=14, STRING=15, INT=16, ID=17, 
		WS=18, COMMENT=19;
	public static final int
		RULE_program = 0, RULE_stat = 1, RULE_ifstat = 2, RULE_elsestat = 3, RULE_teikt = 4, 
		RULE_assign = 5, RULE_expr = 6, RULE_type = 7;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "stat", "ifstat", "elsestat", "teikt", "assign", "expr", "type"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'='", "';'", "'+'", "'-'", "'*'", "'/'", "'('", "')'", "'{'", 
			"'}'", "'teikt '", "'ja'", "'citadi'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "EQ", "SEMI", "ADD", "SUB", "MUL", "DIV", "LPAREN", "RPAREN", "LCURL", 
			"RCURL", "PRINT", "IF", "ELSE", "BOOL", "STRING", "INT", "ID", "WS", 
			"COMMENT"
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
			setState(19);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << PRINT) | (1L << IF) | (1L << ELSE) | (1L << BOOL) | (1L << STRING) | (1L << INT) | (1L << ID))) != 0)) {
				{
				{
				setState(16);
				stat();
				}
				}
				setState(21);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(22);
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
		public IfstatContext ifstat() {
			return getRuleContext(IfstatContext.class,0);
		}
		public ElsestatContext elsestat() {
			return getRuleContext(ElsestatContext.class,0);
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
			setState(31);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(24);
				ifstat();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(25);
				elsestat();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(26);
				teikt();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(27);
				assign();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(28);
				expr(0);
				setState(29);
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

	public static class IfstatContext extends ParserRuleContext {
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
		public IfstatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifstat; }
	}

	public final IfstatContext ifstat() throws RecognitionException {
		IfstatContext _localctx = new IfstatContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_ifstat);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(33);
			match(IF);
			setState(34);
			match(LPAREN);
			setState(35);
			expr(0);
			setState(36);
			match(RPAREN);
			setState(37);
			match(LCURL);
			setState(41);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << PRINT) | (1L << IF) | (1L << ELSE) | (1L << BOOL) | (1L << STRING) | (1L << INT) | (1L << ID))) != 0)) {
				{
				{
				setState(38);
				stat();
				}
				}
				setState(43);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(44);
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

	public static class ElsestatContext extends ParserRuleContext {
		public TerminalNode ELSE() { return getToken(SkolensParser.ELSE, 0); }
		public TerminalNode LCURL() { return getToken(SkolensParser.LCURL, 0); }
		public TerminalNode RCURL() { return getToken(SkolensParser.RCURL, 0); }
		public List<StatContext> stat() {
			return getRuleContexts(StatContext.class);
		}
		public StatContext stat(int i) {
			return getRuleContext(StatContext.class,i);
		}
		public ElsestatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elsestat; }
	}

	public final ElsestatContext elsestat() throws RecognitionException {
		ElsestatContext _localctx = new ElsestatContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_elsestat);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(46);
			match(ELSE);
			setState(47);
			match(LCURL);
			setState(51);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << PRINT) | (1L << IF) | (1L << ELSE) | (1L << BOOL) | (1L << STRING) | (1L << INT) | (1L << ID))) != 0)) {
				{
				{
				setState(48);
				stat();
				}
				}
				setState(53);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(54);
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
		enterRule(_localctx, 8, RULE_teikt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(56);
			match(PRINT);
			setState(57);
			expr(0);
			setState(58);
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
		public TerminalNode EQ() { return getToken(SkolensParser.EQ, 0); }
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
		enterRule(_localctx, 10, RULE_assign);
		try {
			setState(71);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(60);
				match(ID);
				setState(61);
				match(EQ);
				setState(62);
				expr(0);
				setState(63);
				match(SEMI);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(65);
				type();
				setState(66);
				match(ID);
				setState(67);
				match(EQ);
				setState(68);
				expr(0);
				setState(69);
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
		public TerminalNode ID() { return getToken(SkolensParser.ID, 0); }
		public TerminalNode INT() { return getToken(SkolensParser.INT, 0); }
		public TerminalNode STRING() { return getToken(SkolensParser.STRING, 0); }
		public TerminalNode BOOL() { return getToken(SkolensParser.BOOL, 0); }
		public TerminalNode LPAREN() { return getToken(SkolensParser.LPAREN, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode RPAREN() { return getToken(SkolensParser.RPAREN, 0); }
		public TerminalNode MUL() { return getToken(SkolensParser.MUL, 0); }
		public TerminalNode DIV() { return getToken(SkolensParser.DIV, 0); }
		public TerminalNode ADD() { return getToken(SkolensParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(SkolensParser.SUB, 0); }
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 12;
		enterRecursionRule(_localctx, 12, RULE_expr, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(82);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				{
				setState(74);
				match(ID);
				}
				break;
			case INT:
				{
				setState(75);
				match(INT);
				}
				break;
			case STRING:
				{
				setState(76);
				match(STRING);
				}
				break;
			case BOOL:
				{
				setState(77);
				match(BOOL);
				}
				break;
			case LPAREN:
				{
				setState(78);
				match(LPAREN);
				setState(79);
				expr(0);
				setState(80);
				match(RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(98);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(96);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
					case 1:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(84);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(85);
						match(MUL);
						setState(86);
						expr(5);
						}
						break;
					case 2:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(87);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(88);
						match(DIV);
						setState(89);
						expr(4);
						}
						break;
					case 3:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(90);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(91);
						match(ADD);
						setState(92);
						expr(3);
						}
						break;
					case 4:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(93);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(94);
						match(SUB);
						setState(95);
						expr(2);
						}
						break;
					}
					} 
				}
				setState(100);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
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
		enterRule(_localctx, 14, RULE_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(101);
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
		case 6:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 4);
		case 1:
			return precpred(_ctx, 3);
		case 2:
			return precpred(_ctx, 2);
		case 3:
			return precpred(_ctx, 1);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\25j\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\3\2\7\2\24\n\2\f\2"+
		"\16\2\27\13\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\5\3\"\n\3\3\4\3\4\3"+
		"\4\3\4\3\4\3\4\7\4*\n\4\f\4\16\4-\13\4\3\4\3\4\3\5\3\5\3\5\7\5\64\n\5"+
		"\f\5\16\5\67\13\5\3\5\3\5\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7"+
		"\3\7\3\7\3\7\3\7\5\7J\n\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\bU\n\b"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\7\bc\n\b\f\b\16\bf\13"+
		"\b\3\t\3\t\3\t\2\3\16\n\2\4\6\b\n\f\16\20\2\2\2q\2\25\3\2\2\2\4!\3\2\2"+
		"\2\6#\3\2\2\2\b\60\3\2\2\2\n:\3\2\2\2\fI\3\2\2\2\16T\3\2\2\2\20g\3\2\2"+
		"\2\22\24\5\4\3\2\23\22\3\2\2\2\24\27\3\2\2\2\25\23\3\2\2\2\25\26\3\2\2"+
		"\2\26\30\3\2\2\2\27\25\3\2\2\2\30\31\7\2\2\3\31\3\3\2\2\2\32\"\5\6\4\2"+
		"\33\"\5\b\5\2\34\"\5\n\6\2\35\"\5\f\7\2\36\37\5\16\b\2\37 \7\4\2\2 \""+
		"\3\2\2\2!\32\3\2\2\2!\33\3\2\2\2!\34\3\2\2\2!\35\3\2\2\2!\36\3\2\2\2\""+
		"\5\3\2\2\2#$\7\16\2\2$%\7\t\2\2%&\5\16\b\2&\'\7\n\2\2\'+\7\13\2\2(*\5"+
		"\4\3\2)(\3\2\2\2*-\3\2\2\2+)\3\2\2\2+,\3\2\2\2,.\3\2\2\2-+\3\2\2\2./\7"+
		"\f\2\2/\7\3\2\2\2\60\61\7\17\2\2\61\65\7\13\2\2\62\64\5\4\3\2\63\62\3"+
		"\2\2\2\64\67\3\2\2\2\65\63\3\2\2\2\65\66\3\2\2\2\668\3\2\2\2\67\65\3\2"+
		"\2\289\7\f\2\29\t\3\2\2\2:;\7\r\2\2;<\5\16\b\2<=\7\4\2\2=\13\3\2\2\2>"+
		"?\7\23\2\2?@\7\3\2\2@A\5\16\b\2AB\7\4\2\2BJ\3\2\2\2CD\5\20\t\2DE\7\23"+
		"\2\2EF\7\3\2\2FG\5\16\b\2GH\7\4\2\2HJ\3\2\2\2I>\3\2\2\2IC\3\2\2\2J\r\3"+
		"\2\2\2KL\b\b\1\2LU\7\23\2\2MU\7\22\2\2NU\7\21\2\2OU\7\20\2\2PQ\7\t\2\2"+
		"QR\5\16\b\2RS\7\n\2\2SU\3\2\2\2TK\3\2\2\2TM\3\2\2\2TN\3\2\2\2TO\3\2\2"+
		"\2TP\3\2\2\2Ud\3\2\2\2VW\f\6\2\2WX\7\7\2\2Xc\5\16\b\7YZ\f\5\2\2Z[\7\b"+
		"\2\2[c\5\16\b\6\\]\f\4\2\2]^\7\5\2\2^c\5\16\b\5_`\f\3\2\2`a\7\6\2\2ac"+
		"\5\16\b\4bV\3\2\2\2bY\3\2\2\2b\\\3\2\2\2b_\3\2\2\2cf\3\2\2\2db\3\2\2\2"+
		"de\3\2\2\2e\17\3\2\2\2fd\3\2\2\2gh\7\23\2\2h\21\3\2\2\2\n\25!+\65ITbd";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}