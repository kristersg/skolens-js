import * as fs from 'fs';

import antlr4 from 'antlr4';
import SkolensLexer from './lib/SkolensLexer.js';
import SkolensParser from './lib/SkolensParser.js';
import SkolensInterpreter from './SkolensInterpreter.js';

const args = process.argv.slice(2);
if (args.length == 0) {
  console.error('Kļūda: nav norādīts programmas pirmkoda fails!');
  console.error('Izmantošana:  npm start <cels/uz/failu.sk>');
  process.exit(1);
}

if (!fs.existsSync(args[0])) {
  console.error(`Kļūda: norādītais fails netika atrasts! (${args[0]})`);
  process.exit(1);
}
const data = fs.readFileSync(args[0], { encoding: 'utf8' });

const chars = new antlr4.InputStream(data);
const lexer = new SkolensLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new SkolensParser(tokens);
parser.buildParseTrees = true;

const tree = parser.program();

const output = new SkolensInterpreter().start(tree);
