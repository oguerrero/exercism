/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
	if (name === "Pure Strawberry Joy") return 0.5
	if (name === "Energizer" || name === "Green Garden") return 1.5
	if (name === "Tropical Island") return 3
	if (name === "All or Nothing") return 5
	return 2.5
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
	let limesCutted = 0
	limes.forEach((lime) => {
    if (wedgesNeeded > 0) {
      if (lime === "small") wedgesNeeded -= 6
      if (lime === "medium") wedgesNeeded -= 8
      if (lime === "large") wedgesNeeded -= 10
      limesCutted++
    }
	})
	return limesCutted
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let drinksFinished = 0
	orders.map(order => {
    if (timeLeft > 0) {
      timeLeft -= timeToMixJuice(order)
      drinksFinished++
    }
  })
  return orders.slice(drinksFinished)
}

// TASK 1
console.log(timeToMixJuice("Tropical Island"))
// => 3

console.log(timeToMixJuice("Berries & Lime"))
// => 2.5

// TASK 2
console.log(limesToCut(25, ["small", "small", "large", "medium", "small"]))
// => 4

// TASk 3
console.log(
	remainingOrders(5, ["Energizer", "All or Nothing", "Green Garden"]),
)
// => ['Green Garden']
