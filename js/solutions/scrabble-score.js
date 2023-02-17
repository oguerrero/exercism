const regexValues = [
  /[AEIOULNRST]/gi,
  /[DG]/gi,
  /[BCMP]/gi,
  /[FHVWY]/gi,
  /[K]/gi,
  /[JX]/gi,
  /[QZ]/gi
]
const points = [1, 2, 3, 4, 5, 8, 10]

const score = (word) => {
  let totalScore = 0

  regexValues.forEach((regex, idx) => {
    if (regex.test(word)) totalScore += word.match(regex).length * points[idx]
  })

  return totalScore
}

console.log(score('cabbage'))
