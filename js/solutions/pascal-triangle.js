export const rows = (numRows) => {
  const result = []

  for (let rows = 0; rows < numRows; rows++) {
    const arr = [1]

    for (let cols = 1; cols < rows; cols++) {
      arr.push(result[rows - 1][cols - 1] + result[rows - 1][cols])
    }

    if (rows > 0) arr.push(1)

    result.push(arr)
  }

  return result
}
