# TypeScript for NodeJS developers

## TypeScript setup

```sh
pnpm i -D typescript @types/express @types/node ts-node
```

### package.json
```json
  "scripts": {
    "build": "tsc --w",
    "dev": "nodemon ./dist/index.js --exec babel-node -e js",
    "start": "tsc && ts-node ./dist/index.js"
  },
```

### tsconfig.json
```json

```