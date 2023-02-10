class List {
  constructor(values = []) {
    this.values = values
  }

  append(list) {
    return list.foldl((acc, value) => new List([...acc.values, value]), this)
  }

  concat(list) {
    return list.foldl(
      (acc, value) =>
        acc.append(value instanceof List ? value : new List([value])),
      this
    )
  }

  filter(pred) {
    return this.foldl((acc, value) =>
      pred(value) ? acc.append(new List([value])) : acc
    )
  }

  map(fn) {
    return this.foldl((acc, value) => acc.append(new List([fn(value)])))
  }

  length() {
    return this.foldl((length) => length + 1, 0)
  }

  foldl(fn, acc = new List()) {
    const [first, ...rest] = this.values

    return first === undefined ? acc : new List(rest).foldl(fn, fn(acc, first))
  }

  foldr(...args) {
    return this.reverse().foldl(...args)
  }

  reverse() {
    return this.foldl((acc, value) => new List([value]).append(acc))
  }
}

const list1 = new List([1, 2])

const list2 = new List([2, 3, 4, 5])

console.log(list1.append(list2))
