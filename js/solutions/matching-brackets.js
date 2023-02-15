export const isPaired = (brackets) => {
  brackets = brackets.replace(/[^{}\[\]\(\)]/g, '')

  for (let len = -1; len !== brackets.length; ) {
    len = brackets.length

    brackets = brackets.replace(/\{\}|\[\]|\(\)/g, '')
  }
  return brackets.length === 0
}
