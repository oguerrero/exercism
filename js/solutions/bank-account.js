export class BankAccount {
  constructor() {
    this.money = 0
    this.isOpen = false
  }

  open() {
    if (this.isOpen) throw new ValueError('Error')
    this.isOpen = true
    this.money = 0
  }

  close() {
    if (!this.isOpen) throw new ValueError('Error')
    this.isOpen = false
  }

  deposit(quantity) {
    if (!this.isOpen || quantity < 0) throw new ValueError('Error')
    this.money += quantity
  }

  withdraw(quantity) {
    if (!this.isOpen || quantity > this.money || quantity < 0) throw new ValueError('Error')
    this.money -= quantity
  }

  get balance() {
    if (!this.isOpen) throw new ValueError('Error')
    return this.money
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
