# To extend a interface
```javascript
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
```

# Use &, |, ~ to handle enum
```javascript
  // use &, |, ~ to handle enum
  enum AnimalFlag {
    None = 0,
    HasClaws = 1 << 0, //0001
    CanFly = 1 << 1, //0010
    EatsFish = 2 << 1, //0100
    Endangered = 3 << 1 //1000
  }

  //|= to add a flag
  // &= ~flag to clear a flag
  // | to merge flag
  // use & to verify if a variable has a flag

  animalFlag |= AnimalFlag.HasClaws
  console.log(!!(animalFlag & AnimalFlag.HasClaws)) //true

  animalFlag1 |= AnimalFlag.EatsFish | AnimalFlag.Endangered
  console.log(!!(animalFlag1 & AnimalFlag.EatsFish)) //true
  console.log(!!(animalFlag1 & AnimalFlag.Endangered)) //true

  animalFlag1 &= ~AnimalFlag.Endangered
  console.log(!!(animalFlag1 & AnimalFlag.Endangered) //false
}
```
# Add static method to enum
```javascript
//Use namespace + enum to implement static method for enum

// Weekday.ts
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

// index.ts
import { Weekday } from './Weekday'
Weekday.isBusinessDay(Weekday.Friday) // true

```