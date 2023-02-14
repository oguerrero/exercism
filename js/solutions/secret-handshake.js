//     1 = wink
//    10 = double blink
//   100 = close your eyes
//  1000 = jump
// 10000 = Reverse the order of the operations in the secret handshake.

const commands = (input) => {
  input = input.toString(2).split('')
  while (input.length !== 5) input.unshift('0')
  const commands = []

  if (input[4] === '1') commands.push('wink')
  if (input[3] === '1') commands.push('double blink')
  if (input[2] === '1') commands.push('close your eyes')
  if (input[1] === '1') commands.push('jump')
  if (input[0] === '1') return commands.reverse()
  
  return commands
}

console.log(commands(0))
console.log(commands(15))
console.log(commands(31))
