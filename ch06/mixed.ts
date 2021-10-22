// define a construcor type
type Constructor<T = {}> = new (...args: any[]) => T

//////////////
//sample of mixed
//////////////

//add property
function TimesTamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    timestamp = Date.now()
  }
}

//add property and method
function Activatable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    isActivated = false

    activate() {
      this.isActivated = true
    }

    decactivate() {
      this.isActivated = false
    }
  }
}

// user class
class User {
  name = ''
}

//user with timestamp
const TimestampUser = TimesTamped(User)

//user with timestamp and could be activated
const TimestampActivatableUser = TimesTamped(Activatable(User))

const timestampUserExample = new TimestampUser()
console.log(timestampUserExample.timestamp)

const timestampActivatableUserExample = new TimestampActivatableUser()
timestampActivatableUserExample.activate()
console.log(timestampActivatableUserExample.timestamp)
console.log(timestampActivatableUserExample.isActivated)
