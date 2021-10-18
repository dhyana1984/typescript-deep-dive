# Readonly
```typescript
type Foo = {
  bar: number
  bas: number
}

// Readonly<T> mark all properties in T as readonly
type FooReadonly = Readonly<Foo>

const foo1: Foo = { bar: 123, bas: 456 }
const foo1ReadOnly: FooReadonly = { bar: 123, bas: 456 }

foo1.bar = 456 //correct
foo1ReadOnly.bar = 456 //error, foo1ReadOnly.bar is readonly property
```

# ReadonlyArray
```typescript
let foo: ReadonlyArray<number> = [1,2,3]
foo.push(4)     //error
foo.concat(4)   //correct, new copy created
```