import * as fs from 'fs';

import antlr4 from 'antlr4';
import SkolensLexer from './lib/SkolensLexer.js';
import SkolensParser from './lib/SkolensParser.js';
import SkolensInterpreter from './SkolensInterpreter.js';

// const input = 'teikt 7 * (2  + 2);';
const data = fs.readFileSync('test.sk', { encoding: 'utf8' });

const chars = new antlr4.InputStream(data);
const lexer = new SkolensLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new SkolensParser(tokens);
parser.buildParseTrees = true;

const tree = parser.program();

const output = new SkolensInterpreter().start(tree);
