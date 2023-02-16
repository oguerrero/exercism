const isIsogram = (word) => !/(.).*\1/.test(word.toLowerCase().replace(/[^a-z]/gi, ''))

console.log(isIsogram(''))
