# Start a node.js TypeScript and add some lib
```console
// Create node.js project package.json
npm init -y

// Add TypeScript
npm install typescript --save-dev

// Add node.d.ts
npm install @types/node --save-dev

// Initial tsconfig.json and add some options
npx tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib 'es6, dom' --module commonjs

// Real time compile and run
npm install ts-node --save-dev 

// Check if file changed, call ts-node
npm install nodemon --save-dev
```

# Add script in package.json
```json
  "scripts": {
    "start": "npm run build:live",
    "build": "tsc -p .",
    "build:live": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts"
  },
```

# Create initial file in project
Create index in "src" folder in root folder of project as configurated in package.json
# Start project
run **npm start** to start project, when index.ts was changed,
* nodemon will re-run ts-node
* ts-node will compile project via tsconfig.json and TypeScript version
* ts-node output JavaScript via Node.js