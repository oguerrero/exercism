const countNucleotides = (strand) => {
  let values = { A: 0, C: 0, G: 0, T: 0 }
  if (/[^ACGT]/gi.test(strand)) throw new Error('Invalid nucleotide in strand')
  strand.split('').forEach((letter) => values[letter] += 1)

  return Object.values(values).join(' ')
}

console.log(countNucleotides('GATTACA'))
console.log(countNucleotides('INVALID'))
