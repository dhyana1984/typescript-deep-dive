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
