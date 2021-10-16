# Callable
```typescript
interface ReturnString {
  (): string
}

//implement interface
declare const foo: ReturnString

//instance
const barStr = foo() //barStr should be string
```  

# Override
```typescript
interface Overloaded {
  (foo: string): string
  (foo: number): number
}

//overrider
function stringOrNumber(foo: number): number
function stringOrNumber(foo: string): string
function stringOrNumber(foo: any): any {
  if (typeof foo === 'number') return foo * foo
  if (typeof foo === 'string') return `Hello ${foo}`
}

// implement the interface
const overloaded: Overloaded = stringOrNumber

//instance
const str = overloaded('') //str will be string
const num = overloaded(123) //num will be number
```  

# Constructible
```typescript
interface CallMeWithNewToGetString {
  new (): string
}

// implement interface
declare const Foo: CallMeWithNewToGetString

//instance should use new
const bar = new Foo()
```  

# Arrow function
```typescript
//arrow function
const arrowFuncSimple: (foo: number) => string = (foo) => foo.toString()

```