grammar Skolens;

program: (stat | funcDef)* EOF;

stat:
	returnStat
	| breakStat
	| continueStat
	| conditionalStat
	| whileLoop
	| doWhileLoop
	| forLoop
	| teikt
	| variableMethodCalls
	| assign
	| expr ';';

conditionalStat: ifStat elseIfStat* elseStat?;

ifStat: 'ja' '(' expr ')' '{' stat* '}';
elseIfStat: 'cit\u0101di' 'ja' '(' expr ')' '{' stat* '}';
elseStat: 'cit\u0101di' '{' stat* '}';

whileLoop: WHILE '(' expr ')' '{' stat* '}';
doWhileLoop: DO '{' stat* '}' WHILE '(' expr ')' ';';
forLoop: EACH ID FROM expr TO expr '{' stat* '}';

funcDef:
	type ID '(' ((type ID) (',' (type ID))*)? ')' '{' stat* '}';

returnStat: 'atgriezt' expr ';' | 'atgriezt' ';';
breakStat: 'izlauzties' ';';
continueStat: 'izlaist' ';';

teikt: PRINT expr ';';

variableMethodCalls:
	ID '.' PIEVIENOT '(' expr ')' ';'			# ListAdd
	| ID '.' DZEST '(' expr ')' ';'				# ListRemove
	| ID '.' IEVIETOT '(' expr ',' expr ')' ';'	# ListInsert;

assign:
	ID '[' expr ']' '=' expr ';'	# ListAssign
	| ID '=' expr ';'				# ReAssign
	| type ID '=' expr ';'			# NewAssign;

expr:
	ID										# Id
	| NUM									# Num
	| STRING								# String
	| BOOL									# Bool
	| '[' (expr (',' expr)*)? ']'			# List
	| ID '(' (expr (',' expr)*)? ')'		# FuncCall
	| ID '[' expr ']'						# ListAccess
	| ID '.' GARUMS							# ListLength
	| '(' expr ')'							# Paren
	| expr 'un' expr						# LogicOp
	| expr 'vai' expr						# LogicOp
	| expr '^' expr							# MathOp
	| expr ('*' | '/' | '%') expr			# MathOp
	| expr ('+' | '-') expr					# MathOp
	| expr ('<' | '<=' | '>' | '>=') expr	# CompOp
	| expr ('==' | '!=') expr				# EqualityOp
	| expr '..' expr						# ConcatOp;

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
LBRAC: '[';
RBRAC: ']';
EQ: '==';
NOTEQ: '!=';
LESS: '<';
LESSEQ: '<=';
LARG: '>';
LARGEQ: '>=';
AND: 'un';
OR: 'vai';
CONCAT: '..';
DOT: '.';
COMMA: ',';

PIEVIENOT: 'pievienot';
DZEST: 'dz\u0113st';
IEVIETOT: 'ievietot';
GARUMS: 'garums';

PRINT: 'teikt';
IF: 'ja';
ELSE: 'cit\u0101di';
WHILE: 'kam\u0113r';
DO: 'dar\u012Bt';
EACH: 'katram';
FROM: 'no';
TO: 'l\u012Bdz';
RETURN: 'atgriezt';
BREAK: 'izlauzties';
CONTINUE: 'izlaist';

BOOL: 'patiess' | 'aplams';
STRING: '\'' (ESC | ~['\\])* '\'';
fragment ESC: '\\' '\'';
NUM: [+|-]? [0-9]+ (DOT [0-9]+)?;
ID: [a-zA-Z\u0080-\uFFFF_][a-zA-Z\u0080-\uFFFF_0-9]*;
WS: [ \t\n\r\f]+ -> skip;
COMMENT: '//' ~[\r\n]* -> skip;