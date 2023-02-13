const ASCII_START = 97

const ASCII_END = 122

const ASCII_LENGTH = ASCII_END - ASCII_START + 1

export class Cipher {
  static generateRandomKey() {
    return String.fromCharCode(
      ...[...Array(100)].map(
        () => Math.floor(Math.random() * ASCII_LENGTH) + ASCII_START
      )
    )
  }

  #key

  #keyShift

  constructor(key = Cipher.generateRandomKey()) {
    this.#key = key.replace(/[^A-Za-z]/g, '')

    this.#keyShift = [...this.#key].map(
      (char) => char.toLowerCase().charCodeAt(0) - ASCII_START
    )
  }

  encode([...chars]) {
    return String.fromCharCode(
      ...chars.map(
        (char, i) =>
          ((char.charCodeAt(0) -
            ASCII_START +
            this.#keyShift[i % this.#keyShift.length]) %
            ASCII_LENGTH) +
          ASCII_START
      )
    )
  }

  decode([...chars]) {
    return String.fromCharCode(
      ...chars.map(
        (char, i) =>
          ((char.charCodeAt(0) -
            ASCII_START -
            this.#keyShift[i % this.#keyShift.length] +
            ASCII_LENGTH) %
            ASCII_LENGTH) +
          ASCII_START
      )
    )
  }

  get key() {
    return this.#key
  }
}
