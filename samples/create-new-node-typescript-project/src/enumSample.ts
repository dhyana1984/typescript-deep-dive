// use &, |, ~ to handle enum
enum AnimalFlag {
  None = 0,
  HasClaws = 1 << 0, //0001
  CanFly = 1 << 1, //0010
  EatsFish = 1 << 2, //0100
  Endangered = 1 << 3 //1000
}

export const flagChange = () => {
  let animalFlag: AnimalFlag = AnimalFlag.None
  console.log(animalFlag) //0

  animalFlag |= AnimalFlag.HasClaws
  console.log(animalFlag & AnimalFlag.HasClaws) //1

  animalFlag |= AnimalFlag.CanFly
  console.log(animalFlag & AnimalFlag.HasClaws) //1
  console.log(animalFlag & AnimalFlag.Endangered) //0

  let animalFlag1 = AnimalFlag.None
  animalFlag1 |= AnimalFlag.EatsFish | AnimalFlag.Endangered
  console.log(animalFlag1 & AnimalFlag.EatsFish) //4
  console.log(animalFlag1 & AnimalFlag.Endangered) //8
  console.log(animalFlag1 & AnimalFlag.HasClaws) //0

  animalFlag1 &= ~AnimalFlag.Endangered
  console.log(animalFlag1 & AnimalFlag.Endangered) //0

  //|= to add a flag
  // &= ~flag to clear a flag
  // | to merge flag
}

//Use namespace + enum to implement static method for enum
enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

namespace Weekday {
  export const isBusinessDay = (day: Weekday) =>
    console.log(day !== Weekday.Sunday && day !== Weekday.Saturday)
}

export { Weekday }
