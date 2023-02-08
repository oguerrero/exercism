const planetValues = {
  'mercury': 0.2408467,
  'venus': 0.61519726,
  'earth': 31557600,
  'mars':1.8808158,
  'jupiter': 11.862615,
  'saturn': 29.447498,
  'uranus': 84.016846,
  'neptune': 164.79132 
}

const age = (planet, seconds) => {
  const earthAge = seconds / planetValues['earth']

  if (planet === 'earth') return earthAge.toFixed(2) * 1
  return (earthAge / planetValues[planet]).toFixed(2) * 1
}

console.log(age('earth', 1000000000))
console.log(age('mercury', 2134835688))
console.log(age('jupiter', 901876382))