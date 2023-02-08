const BOOK_PRICE = 800
const DISCOUNT = {
  1: 0,
  2: 0.05,
  3: 0.1,
  4: 0.2,
  5: 0.25
}

const cost = (books) => {
  let total = books.length * BOOK_PRICE
  let booksSet = []

  while (books.length > 0) {
    booksSet.push(new Set(books).size)
    for (let book of new Set(books)) {
      books.splice(books.indexOf(book), 1)
    }
  }

  while (booksSet.includes(3) && booksSet.includes(5)) {
    booksSet.splice(booksSet.indexOf(3), 1)
    booksSet.splice(booksSet.indexOf(5), 1)
    booksSet.push(4, 4)
  }

  return (
    total -
    booksSet.reduce(
      (prev, curr) => prev + (DISCOUNT[curr] || 0) * BOOK_PRICE * curr,
      0
    )
  )
}
