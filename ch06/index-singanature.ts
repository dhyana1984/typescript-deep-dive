type Index = 'a' | 'b' | 'c'
type FromIndex = { [k in Index]?: number }

const good: FromIndex = { b: 1, c: 2 }
// const bac: FromIndex = { d: 3 } // error, FromIndex don't have 'd'
