export const isPangram = (input) => {
  const regex = /([a-z])(?!.*\1)/g
  return (input.toLowerCase().match(regex) || []).length === 26
}
