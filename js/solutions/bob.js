const hey = (message) => {
  message = message.trim()
  if (!message) return 'Fine. Be that way!'

  if (message.endsWith('?')) {
    if (message === message.toUpperCase() && /[a-z]/i.test(message))
      return "Calm down, I know what I'm doing!"
    else return 'Sure.'
  }

  if (message === message.toUpperCase() && /[a-z]/i.test(message)) return 'Whoa, chill out!'

  return 'Whatever.'
}

console.log(hey('You are, what, like 15?'))
