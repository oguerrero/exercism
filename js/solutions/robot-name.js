const TOTAL_NUMBER_OF_NAMES = 26 ** 2 * 10 ** 3

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min)

const generateName = () => {
  const firstLetter = String.fromCharCode(getRandomInt(65, 90))
  const secondLetter = String.fromCharCode(getRandomInt(65, 90))
  const firstNumber = getRandomInt(0, 9)
  const secondNumber = getRandomInt(0, 9)
  const thirdNumber = getRandomInt(0, 9)

  return `${firstLetter}${secondLetter}${firstNumber}${secondNumber}${thirdNumber}`
}

let generatedNames = new Set()

class Robot {
  constructor() {
    this.reset()
  }

  get name() {
    return this.robotName
  }

  set name(name) {
    throw new Error('Name modification is not allowed')
  }

  reset() {
    let verifyName = generateName()

    while (generatedNames.has(verifyName)) {
      verifyName = generateName()
      if (generatedNames.length > TOTAL_NUMBER_OF_NAMES)
        throw new Error('THERE ARE NO MORE POSSIBLE NAMES')
    }

    generatedNames.add(verifyName)
    this.robotName = verifyName
  }

  static releaseNames() {
    generatedNames = new Set()
  }
}

let robot = new Robot()
console.log(robot.name)

const usedNames = new Set()
usedNames.add(robot.name)
for (let i = 0; i < 10000; i += 1) {
  robot.reset()
  usedNames.add(robot.name)
}
console.log(usedNames.size)