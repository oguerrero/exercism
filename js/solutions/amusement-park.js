/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
function createVisitor(name, age, ticketId) {
  return {
    name,
    age,
    ticketId
  }
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
function revokeTicket(visitor) {
  visitor.ticketId = null
  return visitor
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
function ticketStatus(tickets, ticketId) {
  const result = Object.entries(tickets).filter((info) => info[0] === ticketId)
  if (!result[0]) return 'unknown ticket id'
  if (!result[0][1]) return 'not sold'
  return `sold to ${result[0][1]}`
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
function simpleTicketStatus(tickets, ticketId) {
  const result = Object.entries(tickets).filter((info) => info[0] === ticketId)
  if (result[0] === null || result[0] === undefined) return 'invalid ticket !!!'
  if (result[0][1] === null || result[0][1] === undefined)
    return 'invalid ticket !!!'
  return `${result[0][1]}`
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
function gtcVersion(visitor) {
  const gtc = Object.entries(visitor).filter((attr) => attr[0] === 'gtc')
  if (!gtc[0]) return
  return gtc[0][1].version
}

// TASK 5
const visitorNew = {
  name: 'Verena Nardi',
  age: 45,
  ticketId: 'H32AZ123',
  gtc: {
    signed: true,
    version: '2.1'
  }
}

console.log(gtcVersion(visitorNew))
// => '2.1'

const visitorOld = {
  name: 'Verena Nardi',
  age: 45,
  ticketId: 'H32AZ123'
}

console.log(gtcVersion(visitorOld))
// => undefined
