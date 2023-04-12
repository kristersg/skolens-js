grammar Skolens;

program: stat* EOF;

stat: conditionalStat | teikt | assign | expr ';';

conditionalStat: ifStat elseIfStat* elseStat?;

ifStat: 'ja' '(' expr ')' '{' stat* '}';
elseIfStat: 'citadi' 'ja' '(' expr ')' '{' stat* '}';
elseStat: 'citadi' '{' stat* '}';

teikt: 'teikt ' expr ';';

assign: ID '=' expr ';' | type ID '=' expr ';';

expr:
	ID										# Id
	| NUM									# Num
	| STRING								# String
	| BOOL									# Bool
	| '(' expr ')'							# Paren
	| expr 'un' expr						# LogicOp
	| expr 'vai' expr						# LogicOp
	| expr '^' expr							# MathOp
	| expr ('*' | '/' | '%') expr			# MathOp
	| expr ('+' | '-') expr					# MathOp
	| expr ('<' | '<=' | '>' | '>=') expr	# CompOp
	| expr ('==' | '!=') expr				# EqualityOp;

type: ID;

// ----------------------- ----- LEXER RULES ----- -----------------------

ASSIGN: '=';
SEMI: ';';
ADD: '+';
SUB: '-';
MUL: '*';
DIV: '/';
EXP: '^';
MOD: '%';
LPAREN: '(';
RPAREN: ')';
LCURL: '{';
RCURL: '}';
EQ: '==';
NOTEQ: '!=';
LESS: '<';
LESSEQ: '<=';
LARG: '>';
LARGEQ: '>=';
AND: 'un';
OR: 'vai';
DOT: '.';

PRINT: 'teikt ';
IF: 'ja';
ELSE: 'citadi';

BOOL: 'patiess' | 'aplams';
STRING: '"' (ESC | ~["\\])* '"';
fragment ESC: '\\' ["\\];
NUM: [+|-]? [0-9]+ (DOT [0-9]+)?;
ID: [a-zA-Z_][a-zA-Z_0-9]*;
WS: [ \t\n\r\f]+ -> skip;
COMMENT: '//' ~[\r\n]* -> skip;