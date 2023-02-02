/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  return kind === 'car' || kind === 'truck'
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  const bestOption = option1 < option2 ? option1 : option2
  return `${bestOption} is clearly the better choice.`
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  if (age < 3) return originalPrice * .8
  if (age > 2 && age < 11) return originalPrice * .7
  return originalPrice * .5
}

// TASK 1
console.log(needsLicense('car'), true)
// => true

console.log(needsLicense('bike'), false)
// => false

// TASK 2
console.log(chooseVehicle('Wuling Hongguang', 'Toyota Corolla'),'Toyota Corolla is clearly the better choice.')
// =>  'Toyota Corolla is clearly the better choice.'

console.log(chooseVehicle('Volkswagen Beetle', 'Volkswagen Golf'), 'Volkswagen Beetle is clearly the better choice.')
// =>  'Volkswagen Beetle is clearly the better choice.'

// TASK 3
console.log(calculateResellPrice(1000, 1), 800)
// => 800

console.log(calculateResellPrice(1000, 5), 700)
// => 700

console.log(calculateResellPrice(1000, 15), 500)
// => 500
