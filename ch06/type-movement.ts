//capture member of class

class Foo {
  // what we want to capture
  foo: number
}

declare let _foo: Foo
// capture the type of foo in class Foo
let bar: typeof _foo.foo

//capture copy type and value
namespace importing {
  export class Foo {}
}
import Bar = importing.Foo
let bar1: Bar

//capture key name
const colors = {
  red: 'red',
  blue: 'blue'
}

type Colors = keyof typeof colors

let color: Colors //the type of color is 'red' | 'blue'
color = 'blue'
color = 'red'
// color = 'else' //error
