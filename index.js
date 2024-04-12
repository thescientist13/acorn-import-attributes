import * as acorn from 'acorn';
import fs from 'fs';

const source = fs.readFileSync('./source.js', 'utf-8');

console.log({ source });

const ast = acorn.parse(source, {
  ecmaVersion: 'latest',
  sourceType: 'module'
});

console.log({ ast });