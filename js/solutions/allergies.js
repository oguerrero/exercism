const allergiesScore = {
  cats: 128,
  pollen: 64,
  chocolate: 32,
  tomatoes: 16,
  strawberries: 8,
  shellfish: 4,
  peanuts: 2,
  eggs: 1
}

class Allergies {
  constructor(score) {
    this.allergiesList = this.generateList(score)
  }

  generateList(score) {
    if (score > 255) score -= 256
    const res = []
  
    Object.entries(allergiesScore).forEach(([key, value]) => {
      if (score >= value){
        res.push(key)
        score -= value
      } 
    })
    return res.reverse()
  }

  list() {
    return this.allergiesList
  }

  allergicTo(item) {
    return this.allergiesList.includes(item)
  }
}


const generateList2 = (score) => {
  if (score > 255) score -= 256
  // if (score === 0) return ['eggs']
  const res = []

  Object.entries(allergiesScore).forEach(([key, value]) => {
    if (score >= value){
      res.push(key)
      score -= value
    } 
  })
  return res.reverse()
}

generateList2(34)
generateList2(255)
generateList2(509)
generateList2(257)