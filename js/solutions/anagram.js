const findAnagrams = (target, candidates) => {
  target = target.toLowerCase()
  return candidates
    .map((candidate) => {
      if (candidate.toLowerCase() !== target) {
        if (
          target.split('').sort().join('') ===
          candidate.toLowerCase().split('').sort().join('')
        )
          return candidate
      }
    })
    .filter(Boolean)
}

console.log(
  findAnagrams('stone', ['stone', 'tones', 'banana', 'tons', 'notes', 'Seton'])
)
// 'tones', 'notes', 'Seton'
