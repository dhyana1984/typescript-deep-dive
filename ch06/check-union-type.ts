interface Squre {
  kind: 'square'
  size: number
}

interface Rectangle {
  kind: 'rectangle'
  width: number
  height: number
}

interface Circle {
  kind: 'circle'
  radius: number
}

type Shape = Squre | Rectangle | Circle

const area = (s: Shape): number => {
  switch (s.kind) {
    case 'square':
      return s.size * s.size
    case 'rectangle':
      return s.width * s.height
    case 'circle':
      return Math.PI * s.radius ** 2
    default:
      // check if the type of s is invalid
      const _exhaustiveCheck: never = s
      return _exhaustiveCheck
  }
}
