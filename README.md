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
{
    "compilerOptions": {
        "target": "es2022",
        "module": "commonjs",
        "strict": true,
        "outDir": "./dist",
        "esModuleInterop": true,
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true
    },
    "include": ["./src/**/*","index.ts"],
    "exclude": ["node_modules"]
}
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

TypeScript [docs](https://www.typescriptlang.org/docs/handbook/decorators.html)

### Disposable

```ts
class TempFile implements Disposable {
    #path: string;
    #handle: number;

    constructor(path: string) {
        this.#path = path;
        this.#handle = fs.openSync(path, "w+");
    }

    // other methods
    [Symbol.dispose]() {
        // Close the file and delete it.
        fs.closeSync(this.#handle);
        fs.unlinkSync(this.#path);
    }
}

function doSomeWork() {
    const file = new TempFile(".some_temp_file");
    try {
        // ...
    }
    finally {
        file[Symbol.dispose]();
    }
}
```

### Suppressed errors

```ts

```