# declare a function type
```typescript
// below are the same
type LongHand = {
    (a: number) : number
}

type ShortHand = (a: number) => number

//but if we are using override we can only use this
type  LongHandAllowsOverrider = {
    (a: number) : number
    (a: string) : string
}
```