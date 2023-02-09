export const convert = (input) => {
  const hasThreeFactor = input % 3 === 0 ? 'Pling': ''
  const hasFiveFactor = input % 5 === 0 ? 'Plang': ''
  const hasSevenFactor = input % 7 === 0 ? 'Plong': ''

  if(hasThreeFactor || hasFiveFactor || hasSevenFactor) return `${hasThreeFactor}${hasFiveFactor}${hasSevenFactor}`

  return input.toString()
}
