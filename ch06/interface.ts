namespace ch06.interface {
  //a.d.ts
  interface Point {
    x: number
    y: number
  }
  declare const myPoint: Point

  //b.d.ts
  interface Point {
    z: number
  }

  // customized code
  myPoint.z //this is allowed

  // use &, |, ~ to handle enum
  enum AnimalFlag {
    None = 0,
    HasClaws = 1 << 0, //0001
    CanFly = 1 << 1, //0010
    EatsFish = 2 << 1, //0100
    Endangered = 3 << 1 //1000
  }

  export const animal: { flag: AnimalFlag } = { flag: AnimalFlag.None }
  animal.flag |= AnimalFlag.HasClaws
  console.log(animal.flag)
}

interface Overloaded {
  (foo: string): string
  (foo: number): number
}

//override
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

//arrow function
const arrowFuncSimple: (foo: number) => string = (foo) => foo.toString()

// constructible
interface CallMeWithNewToGetString {
  new (): string
}

// implement interface
declare const Foo: CallMeWithNewToGetString
//instance should use new
const bar = new Foo()

// callable
interface ReturnString {
  (): string
}
//implement interface
declare const foo: ReturnString
//instance
const barStr = foo() //barStr should be string
