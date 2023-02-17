const countWords = (string) => string
    .toLowerCase()
    .match(/\w+('\w+)?/g)
    .reduce((counts, word) => ({ ...counts, [word]: ~~counts[word] + 1 }), {})

console.log(
  countWords(
    `"That's the password: 'PASSWORD 123'!", cried the Special Agent.\nSo I fled.`
  )
)
