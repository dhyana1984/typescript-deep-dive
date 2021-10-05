# Start a node.js TypeScript
```console
// Create node.js project package.json
npm init -y

// Add TypeScript
npm install typescript --save-dev

// Add node.d.ts
npm install @types/node --save-dev

// Initial tsconfig.json and add some options

npx tsc --init --rootDir src --outDir lib --esModuleInterop -- resolveJsonModule --lib es6, dom --module commonjs
```