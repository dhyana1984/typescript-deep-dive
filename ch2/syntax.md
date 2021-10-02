# Some weird result in JS, but in TS the error will be throwed
``` javascript
[] + [] // JavaScript: ''  
{} + [] // JavaScript: 0  
[] + {} // JavaScript: '[object Object]'  
{} + {} // NaN or '[object Object]', depends on different browser  
'hello' - 1 // JavaScript: NaN
```

# To verify if 2 object is the same, use deep-equal library
```console
npm install deep-equal
```

# null and undefined
```javascript
console.log(null == undefined) // javascript: true

// in TypeScript, it's better to use null to check undefined and null
const foo = (arg: string | null | undefined ){
    if(arg != null){
        // arg should be a string because "!=null" excludes null and undefined
    }
}
```

# big.js as accuracy calculation library
```console
npm install big.js @types/big.js
```
It's good for finance calculate but don't use this in the performance required scenario such as UI render 