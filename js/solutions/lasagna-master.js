/**
 * Determines the status of the cooking lasagna
 *
 * @param {number} remainingTime - The amount of time remaining in the timer.
 * @returns {string} - Status of cooking lasanga
 */
function cookingStatus(remainingTime) {
  if (remainingTime === 0) return 'Lasagna is done.'
  if (!remainingTime) return 'You forgot to set the timer.'
  return 'Not done, please wait.'
}
/**
 * Determines the preparation time based on the number of layers and the preparation
 * time per layer.
 *
 * @param {string[]} layers - Array of layer content
 * @param {number} timePerLayer  - Time per layer, default value: 2
 */
function preparationTime(layers, timePerLayer = 2) {
  return layers.length * timePerLayer
}

/**
 * It takes an array of strings, and returns an object with two properties, `noodles` and `sauce`,
 * which are the quantities of each ingredient needed to make the lasagna.
 *
 * @param layers - an array of strings, each of which is either 'noodles' or 'sauce'
 * @returns An object with two properties, noodles and sauce.
 */
function quantities(layers) {
  let noodles = 0
  let sauce = 0
  layers.map((layer) => {
    if (layer === 'noodles') noodles += 50
    if (layer === 'sauce') sauce += 0.2
  })
  return { noodles, sauce }
}

/**
 * AddSecretIngredient takes in two arrays, friendsList and myList, and adds the last element of
 * friendsList to myList
 * @param {string[]} friendsList
 * @param {string[]} myList
 */
function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1])
}

/**
 * It takes a recipe object and a number of portions, and returns a new recipe object with the
 * ingredients scaled to the number of portions
 * @param recipe - an object with ingredients as keys and amounts as values
 * @param portions - The number of portions you want to make.
 * @returns An object of the scaled ingredients.
 */
function scaleRecipe(recipe, portions) {
  const modifiedRecipe = {...recipe}
  Object.keys(modifiedRecipe).map(ingredient => modifiedRecipe[ingredient] *= portions / 2)
  return modifiedRecipe
}
