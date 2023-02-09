export const transform = (old) => {
  let result = {}
  for (let score in old) {
    old[score].forEach(letter => result[letter.toLowerCase()] = +score)
  }

  return result
}
