/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

function isValidCommand(command) {
  console.log(command.slice(0, 7).toLocaleLowerCase())
  return /chatbot$/.test(command.slice(0, 5).toLocaleLowerCase())
}
console.log(isValidCommand('Chatbot, Do you understand this command'))

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
function removeEmoji(message) {
  return message.replace(new RegExp(/emoji\S*/, 'gi'), '')
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
function checkPhoneNumber(number) {
  return number.match(/\(\+[0-9]{2}\) [0-9]{3}-[0-9]{3}-[0-9]{3}/)
    ? 'Thanks! You can now download me to your phone.'
    : `Oops, it seems like I can't reach out to ${number}`
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
function getURL(userInput) {
  return userInput.match(/\S*\.\S*/g)
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
function niceToMeetYou(fullName) {
  let string = 'Nice to meet you, first last'
  let split = fullName.split(/, /)

  return string.replace(/first last/, `${split[1]} ${split[0]}`)
}
