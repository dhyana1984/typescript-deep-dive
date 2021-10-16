# Double assert
```typescript
function handler(event: Event){
    //double assert
    const element = (event as any) as HTMLElement
}
```