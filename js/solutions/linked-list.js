class Node {
  constructor(value) {
    this.value = value
    this.prev = null
    this.next = null
  }
}

export class LinkedList {
  constructor() {
    this.size = 0
    this.first = null
    this.last = null
  }

  push(value) {
    let node = new Node(value)

    if (this.last) this.last.next = node
    node.prev = this.last
    this.last = node

    if (++this.size === 1) this.first = node
  }

  pop() {
    this.size--

    let node = this.last
    this.last = this.last.prev

    return node.value
  }

  shift() {
    this.size--

    let node = this.first
    this.first = this.first.next

    return node.value
  }

  unshift(value) {
    let node = new Node(value)

    if (this.first) this.first.prev = node
    node.next = this.first
    this.first = node

    if (++this.size === 1) this.last = node
  }

  delete(value) {
    let node = this.first

    while (node !== null) {
      if (node.value === value) {
        if (node.prev) node.prev.next = node.next
        if (node.next) node.next.prev = node.prev
        this.size--

        if (this.first === node) this.first = node.next
        if (this.last === node) this.last = node.prev

        break
      } else node = node.next
    }
  }

  count() {
    return this.size
  }
}
