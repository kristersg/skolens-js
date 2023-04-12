// Generated from /Users/kristers/Documents/Bakalaura Darbs/antlr-js-test/grammars/Skolens.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ExprParserLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		EQ=1, SEMI=2, ADD=3, SUB=4, MUL=5, DIV=6, LPAREN=7, RPAREN=8, SKAITLIS=9, 
		TEKSTS=10, BULS=11, PRINT=12, BOOL=13, STRING=14, INT=15, ID=16, WS=17, 
		COMMENT=18;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"EQ", "SEMI", "ADD", "SUB", "MUL", "DIV", "LPAREN", "RPAREN", "SKAITLIS", 
			"TEKSTS", "BULS", "PRINT", "BOOL", "STRING", "ESC", "INT", "ID", "WS", 
			"COMMENT"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'='", "';'", "'+'", "'-'", "'*'", "'/'", "'('", "')'", "'skaitlis'", 
			"'teksts'", "'buls'", "'teikt '"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "EQ", "SEMI", "ADD", "SUB", "MUL", "DIV", "LPAREN", "RPAREN", "SKAITLIS", 
			"TEKSTS", "BULS", "PRINT", "BOOL", "STRING", "INT", "ID", "WS", "COMMENT"
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


	public ExprParserLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Skolens.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\24\u008f\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\3\2\3\2\3\3\3\3\3\4\3\4\3\5\3\5\3\6\3\6\3\7"+
		"\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13"+
		"\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3"+
		"\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\5\16c"+
		"\n\16\3\17\3\17\3\17\7\17h\n\17\f\17\16\17k\13\17\3\17\3\17\3\20\3\20"+
		"\3\20\3\21\6\21s\n\21\r\21\16\21t\3\22\3\22\7\22y\n\22\f\22\16\22|\13"+
		"\22\3\23\6\23\177\n\23\r\23\16\23\u0080\3\23\3\23\3\24\3\24\3\24\3\24"+
		"\7\24\u0089\n\24\f\24\16\24\u008c\13\24\3\24\3\24\2\2\25\3\3\5\4\7\5\t"+
		"\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\2!\21#\22%"+
		"\23\'\24\3\2\b\4\2$$^^\3\2\62;\5\2C\\aac|\6\2\62;C\\aac|\5\2\13\f\16\17"+
		"\"\"\4\2\f\f\17\17\2\u0094\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2"+
		"\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2"+
		"\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2!\3\2"+
		"\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\3)\3\2\2\2\5+\3\2\2\2\7-\3\2\2"+
		"\2\t/\3\2\2\2\13\61\3\2\2\2\r\63\3\2\2\2\17\65\3\2\2\2\21\67\3\2\2\2\23"+
		"9\3\2\2\2\25B\3\2\2\2\27I\3\2\2\2\31N\3\2\2\2\33b\3\2\2\2\35d\3\2\2\2"+
		"\37n\3\2\2\2!r\3\2\2\2#v\3\2\2\2%~\3\2\2\2\'\u0084\3\2\2\2)*\7?\2\2*\4"+
		"\3\2\2\2+,\7=\2\2,\6\3\2\2\2-.\7-\2\2.\b\3\2\2\2/\60\7/\2\2\60\n\3\2\2"+
		"\2\61\62\7,\2\2\62\f\3\2\2\2\63\64\7\61\2\2\64\16\3\2\2\2\65\66\7*\2\2"+
		"\66\20\3\2\2\2\678\7+\2\28\22\3\2\2\29:\7u\2\2:;\7m\2\2;<\7c\2\2<=\7k"+
		"\2\2=>\7v\2\2>?\7n\2\2?@\7k\2\2@A\7u\2\2A\24\3\2\2\2BC\7v\2\2CD\7g\2\2"+
		"DE\7m\2\2EF\7u\2\2FG\7v\2\2GH\7u\2\2H\26\3\2\2\2IJ\7d\2\2JK\7w\2\2KL\7"+
		"n\2\2LM\7u\2\2M\30\3\2\2\2NO\7v\2\2OP\7g\2\2PQ\7k\2\2QR\7m\2\2RS\7v\2"+
		"\2ST\7\"\2\2T\32\3\2\2\2UV\7r\2\2VW\7c\2\2WX\7v\2\2XY\7k\2\2YZ\7g\2\2"+
		"Z[\7u\2\2[c\7u\2\2\\]\7c\2\2]^\7r\2\2^_\7n\2\2_`\7c\2\2`a\7o\2\2ac\7u"+
		"\2\2bU\3\2\2\2b\\\3\2\2\2c\34\3\2\2\2di\7$\2\2eh\5\37\20\2fh\n\2\2\2g"+
		"e\3\2\2\2gf\3\2\2\2hk\3\2\2\2ig\3\2\2\2ij\3\2\2\2jl\3\2\2\2ki\3\2\2\2"+
		"lm\7$\2\2m\36\3\2\2\2no\7^\2\2op\t\2\2\2p \3\2\2\2qs\t\3\2\2rq\3\2\2\2"+
		"st\3\2\2\2tr\3\2\2\2tu\3\2\2\2u\"\3\2\2\2vz\t\4\2\2wy\t\5\2\2xw\3\2\2"+
		"\2y|\3\2\2\2zx\3\2\2\2z{\3\2\2\2{$\3\2\2\2|z\3\2\2\2}\177\t\6\2\2~}\3"+
		"\2\2\2\177\u0080\3\2\2\2\u0080~\3\2\2\2\u0080\u0081\3\2\2\2\u0081\u0082"+
		"\3\2\2\2\u0082\u0083\b\23\2\2\u0083&\3\2\2\2\u0084\u0085\7\61\2\2\u0085"+
		"\u0086\7\61\2\2\u0086\u008a\3\2\2\2\u0087\u0089\n\7\2\2\u0088\u0087\3"+
		"\2\2\2\u0089\u008c\3\2\2\2\u008a\u0088\3\2\2\2\u008a\u008b\3\2\2\2\u008b"+
		"\u008d\3\2\2\2\u008c\u008a\3\2\2\2\u008d\u008e\b\24\2\2\u008e(\3\2\2\2"+
		"\n\2bgitz\u0080\u008a\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}