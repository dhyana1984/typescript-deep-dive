# lib.d.ts
lib.d.ts is including some declare of variables, like window, document, math, and some declare of interface, like Window, Document, Math
```javascript
declare var window: Window
```
If we want to use some members that not exists, we can add them into lib.d.ts, but it's better to create globals.d.ts
```javascript
// add a method to Window interface
interface Window{
    helloWorld(): void
}

// add method in runtime
window.helloWorld = () => console.log('hello world')
```

# --lib decoupling the compile target(generated javascript version) and environment libaray(lib)
```json
// suggestion
"compilerOptions": {
    "target": "es5",
    "lib": ["es6", "dom"],
  },
```

