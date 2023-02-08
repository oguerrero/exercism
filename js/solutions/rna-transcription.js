let rnaValues = { G: 'C', C: 'G', T: 'A', A: 'U' }

export const toRna = (input) => {
  var regex = new RegExp(Object.keys(rnaValues).join('|'), 'gi')
  return input.replace(regex, (matched) => { return rnaValues[matched] })
}

console.log(toRna('ACGTGGTCTTAA')) // UGCACCAGAAUU
console.log(toRna('G')) // C
console.log(toRna('C')) // G
console.log(toRna('T')) // A
console.log(toRna('A')) // U
console.log(toRna(''))
