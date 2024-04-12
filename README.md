# acorn-import-attributes

Demonstration repo for testing import attributes support in acorn.

## Setup

1. Have Node installed (you can run `nvm use` if you have **nvm** installed)
1. Run `npm ci`

## Demo

To run the demo, run `npm run demo`.

This demo simply reads a file that contains usage of Import Attributes.  Currently, this error is shown.

<details>
  <pre>
    ➜  acorn-import-attributes git:(master) ✗ npm run demo

    > acorn-import-attributes@1.0.0 demo
    > node index.js

    {
      source: "import data from './data.json' with { type: 'json '};\n" +
        '\n' +
        "// console.log('hello world!');"
    }
    file:///Users/owenbuckley/Workspace/github/acorn-import-attributes/node_modules/acorn/dist/acorn.mjs:3567
      var err = new SyntaxError(message);
                ^

    SyntaxError: Unexpected token (1:31)
        at pp$4.raise (file:///Users/owenbuckley/Workspace/github/acorn-import-attributes/node_modules/acorn/dist/acorn.mjs:3567:13)
        at pp$9.unexpected (file:///Users/owenbuckley/Workspace/github/acorn-import-attributes/node_modules/acorn/dist/acorn.mjs:766:8)
        at pp$9.semicolon (file:///Users/owenbuckley/Workspace/github/acorn-import-attributes/node_modules/acorn/dist/acorn.mjs:743:66)
        at pp$8.parseImport (file:///Users/owenbuckley/Workspace/github/acorn-import-attributes/node_modules/acorn/dist/acorn.mjs:1839:8)
        at pp$8.parseStatement (file:///Users/owenbuckley/Workspace/github/acorn-import-attributes/node_modules/acorn/dist/acorn.mjs:942:49)
        at pp$8.parseTopLevel (file:///Users/owenbuckley/Workspace/github/acorn-import-attributes/node_modules/acorn/dist/acorn.mjs:823:21)
        at Parser.parse (file:///Users/owenbuckley/Workspace/github/acorn-import-attributes/node_modules/acorn/dist/acorn.mjs:595:15)
        at Function.parse (file:///Users/owenbuckley/Workspace/github/acorn-import-attributes/node_modules/acorn/dist/acorn.mjs:645:35)
        at Module.parse (file:///Users/owenbuckley/Workspace/github/acorn-import-attributes/node_modules/acorn/dist/acorn.mjs:5955:17)
        at file:///Users/owenbuckley/Workspace/github/acorn-import-attributes/index.js:8:19 {
      pos: 31,
      loc: Position { line: 1, column: 31 },
      raisedAt: 35
    }

    Node.js v18.12.1
  </pre>
</details>