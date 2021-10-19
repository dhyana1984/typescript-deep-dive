type Foo = {
  bar: number
  bas: number
}

type FooReadonly = Readonly<Foo>

const foo1: Foo = { bar: 123, bas: 456 }
const foo1ReadOnly: FooReadonly = { bar: 123, bas: 456 }

foo1.bar = 456 //correct
// foo1ReadOnly.bar = 456 //error, foo1ReadOnly.bar is readonly property
