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
	ID
	| INT
	| STRING
	| BOOL
	| '(' expr ')'
	| expr '*' expr
	| expr '/' expr
	| expr '+' expr
	| expr '-' expr;

type: ID;

// ----------------------- ----- LEXER RULES ----- -----------------------

EQ: '=';
SEMI: ';';
ADD: '+';
SUB: '-';
MUL: '*';
DIV: '/';
LPAREN: '(';
RPAREN: ')';
LCURL: '{';
RCURL: '}';

PRINT: 'teikt ';
IF: 'ja';
ELSE: 'citadi';

BOOL: 'patiess' | 'aplams';
STRING: '"' (ESC | ~["\\])* '"';
fragment ESC: '\\' ["\\];
INT: [0-9]+;
ID: [a-zA-Z_][a-zA-Z_0-9]*;
WS: [ \t\n\r\f]+ -> skip;

COMMENT: '//' ~[\r\n]* -> skip;