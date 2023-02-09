const compute = (strands1, strands2) => {
  if (strands1.length !== strands2.length) throw new Error('strands must be of equal length')
  let count = 0
  for (let i = 0; i <= strands1.length; i++) {
    if (strands1[i] !== strands2[i]) count++
  }
  return count
}

console.log(compute('GGACTGAAATCTG', 'GGACTGAAATCTG'))