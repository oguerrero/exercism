const checkTriangle = (sides) => {
  const [side1, side2, side3] = sides.sort((a, b) => a - b)

  return (
    sides.every((side) => side > 0) &&
    sides[0] + sides[1] > sides[2] &&
    side1 + side2 >= side3
  )
}
export class Triangle {
  constructor(...sides) {
    this.isTriangle = checkTriangle(sides)
    this.sides = new Set(sides)
  }

  get isEquilateral() {
    return this.sides.size === 1 && this.isTriangle
  }

  get isIsosceles() {
    return this.sides.size <= 2 && this.isTriangle
  }

  get isScalene() {
    return this.sides.size === 3 && this.isTriangle
  }
}
