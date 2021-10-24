class C {
  foo!: number[] // correct because of assert
  tee: number[] // correct  because of assigned in constructor
  bar: number[] // error because bar was not assiged in constructor

  constructor() {
    this.tee = [1, 2, 3, 4]
  }

  initialize() {
    this.foo = [1, 2, 3]
    this.bar = [1, 2, 3]
  }
}

let a: number[]
let b!: number[]

initialize()

a.push(4) //error, variable cannot be used before assign
b.push(4) //correct because of assert
function initialize() {
  a = [1, 2, 3]
  b = [1, 2, 3]
}
