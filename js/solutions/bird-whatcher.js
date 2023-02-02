/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
function totalBirdCount(birdsPerDay) {
  return birdsPerDay.reduce((acc, birds) => acc + birds, 0)
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
function birdsInWeek(birdsPerDay, week) {
  return totalBirdCount(birdsPerDay.slice(week * 7 - 7, week * 7))
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
function fixBirdCountLog(birdsPerDay) {
  console.log(birdsPerDay)
  for (let i = 0; i < birdsPerDay.length; i+=2) {
    birdsPerDay[i] += 1
  }
  return birdsPerDay
  // return birdsPerDay.map((birds, index) => index % 2 === 0 ? birds + 1 : birds)
}
birdsPerDay = [2, 5, 0, 7, 4, 1];
console.log(fixBirdCountLog(birdsPerDay))
// => [3, 5, 1, 7, 5, 1]