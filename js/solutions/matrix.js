class Matrix {
  constructor(matrix) {
    this.matrixRows = matrix
      .split('\n')
      .map((row) => row.split(' ').map((num) => num * 1))
    this.matrixCols = this.matrixRows[0].map((_, index) =>
      this.matrixRows.map((row) => row[index])
    )
  }

  get rows() {
    return this.matrixRows
  }

  get columns() {
    return this.matrixCols
  }
}

console.log(new Matrix('1 2\n3 4').rows[0])
console.log(new Matrix('1 2\n3 4').rows[1])
console.log(new Matrix('1 2\n3 4').columns[0])
console.log(new Matrix('1 2\n3 4').columns[1])
