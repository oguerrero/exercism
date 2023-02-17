export const valid = (input) => {
  if (input.match(/[^0-9 ]/)) return false

  const numbers = [...input]
    .filter((ch) => ch.match(/[0-9]/))
    .map((ch) => +ch)

  return (
    numbers.length > 1 && numbers
      .map((k, i) => (numbers.length + i) % 2 === 1 ? k : k >= 5 ? 2 * k - 9 : 2 * k)
      .reduce((acc, k) => acc + k, 0) % 10 === 0
  )
}
