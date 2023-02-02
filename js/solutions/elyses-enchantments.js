/**
 * Retrieve card from cards array at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number} the card
 */
export function getItem(cards, position) {
  return cards[position]
}

/**
 * Exchange card with replacementCard at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 * @param {number} replacementCard
 *
 * @returns {number[]} the cards with the change applied
 */
export function setItem(cards, position, replacementCard) {
  cards[position] = replacementCard
  return cards
}

/**
 * Insert newCard at the end of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards with the newCard applied
 */
export function insertItemAtTop(cards, newCard) {
  cards.push(newCard)
  return cards
}

/**
 * Remove the card at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItem(cards, position) {
  cards.splice(position, 1)
  return cards
}

/**
 * Remove card from the end of the cards array
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemFromTop(cards) {
  cards.pop()
  return cards
}

/**
 * Insert newCard at beginning of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards including the new card
 */
export function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard)
  return cards
}

/**
 * Remove card from the beginning of the cards
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemAtBottom(cards) {
  cards.shift()
  return cards
}

/**
 * Compare the number of cards with the given stackSize
 *
 * @param {number[]} cards
 * @param {number} stackSize
 *
 * @returns {boolean} true if there are exactly stackSize number of cards, false otherwise
 */
export function checkSizeOfStack(cards, stackSize) {
  return cards.length === stackSize
}

// TASK 1
const position = 2
getItem([1, 2, 4, 1], position)
// => 4

// // TASK 2
// const position = 2;
// const replacementCard = 6;
// setItem([1, 2, 4, 1], position, replacementCard);
// // => [1, 2, 6, 1]

// // TASK 3
// const newCard = 8;
// insertItemAtTop([5, 9, 7, 1], newCard);
// // => [5, 9, 7, 1, 8]

// // TASK 4
// const position = 2;
// removeItem([3, 2, 6, 4, 8], position);
// // => [3, 2, 4, 8]

// // TASK 5
// removeItemFromTop([3, 2, 6, 4, 8]);
// // => [3, 2, 6, 4]

// // TASK 6
// const newCard = 8;
// insertItemAtBottom([5, 9, 7, 1], newCard);
// // => [8, 5, 9, 7, 1]

// // TASK 7
// removeItemAtBottom([8, 5, 9, 7, 1]);
// // => [5, 9, 7, 1]

// // TASK 8
// const stackSize = 4;
// checkSizeOfStack([3, 2, 6, 4, 8], stackSize);
// // => false
