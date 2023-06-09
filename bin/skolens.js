#!/usr/bin/env node

import * as fs from 'fs';
import antlr4 from 'antlr4';
import { ErrorListener } from 'antlr4';
import SkolensLexer from '../lib/SkolensLexer.js';
import SkolensParser from '../lib/SkolensParser.js';
import SkolensInterpreter from '../lib/SkolensInterpreter.js';

try {
  class LexerErrorListener extends ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, message, e) {
      console.error(`Sintakses kļūda rindā ${line}, kolonnā ${column}: neatpazīta tekstvienība "${message.substring(message.indexOf("'") + 1, message.lastIndexOf("'"))}"`);
      process.exit(1);
    }
  }

  class ParserErrorListener extends ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, message, e) {
      console.error(`Sintakses kļūda rindā ${line}, kolonnā ${column}: nepareizs simbols "${offendingSymbol.text}"`);
      process.exit(1);
    }
  }

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

  const chars = new antlr4.CharStreams.fromPathSync(args[0]);

  const lexer = new SkolensLexer(chars);
  const lexerErrorListener = new LexerErrorListener();
  lexer.removeErrorListeners();
  lexer.addErrorListener(lexerErrorListener);

  const tokens = new antlr4.CommonTokenStream(lexer);

  const parser = new SkolensParser(tokens);
  const parserErrorListener = new ParserErrorListener();
  parser.removeErrorListeners();
  parser.addErrorListener(parserErrorListener);
  parser.buildParseTrees = true;

  const tree = parser.program();

  new SkolensInterpreter().start(tree);
} catch (error) {
  console.error('Notika kļūda programmas izpildē. Pārliecinies, ka kods ir pareizs.');
}
