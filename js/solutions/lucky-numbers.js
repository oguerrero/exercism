/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
function twoSum(array1, array2) {
  return +''.concat(...array1) + +''.concat(...array2)
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
function luckyNumber(value) {
  return value.toString() === [...value.toString()].reverse().join('')
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
function errorMessage(input) {
  if (!input) return 'Required field'
  if (input ===  0 || !Number(input)) return 'Must be a number besides 0'
  return ''
}

console.log(errorMessage('123'))
// => ''

console.log(errorMessage(''))
// => 'Required field'

console.log(errorMessage('abc'))
// => 'Must be a number besides 0'
