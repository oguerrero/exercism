const factorsSum = (number) =>
  Array.from(Array(number + 1), (_, i) => i)
    .filter((i) => number % i === 0)
    .reduce((acc, curr) => acc + curr, 0)

const classify = (number) => {
  if (n < 1 || !Number.isInteger(n)) throw new Error('Classification is only possible for natural numbers.')
  const classification = factorsSum(number) - number

  if (classification === number) return 'perfect'

  return classification > number ? 'abundant' : 'deficient'
}
