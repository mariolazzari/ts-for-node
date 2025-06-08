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

## TypeScript tools for NodeJs

### Declaration merging

```ts
interface Warriors {
  weapon: string;
  skills: number;
}

interface Warriors {
  name: string;
}

const ninja: Warriors = {
  name: "Mario",
  wepon: "gun",
  skills: 1
}
```

### Iterators

```ts
for(const contact of contacts){
  console.log(contact.name);
}

for(const contactId in contacts){
  console.log(contacts[contactId]);
}
```

### Decorators

```ts

```