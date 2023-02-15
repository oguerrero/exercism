class HighScores {
  constructor(scoreBoard) {
    this.scoreBoard = scoreBoard
  }

  get scores() {
    return this.scoreBoard
  }

  get latest() {
    return this.scoreBoard.slice(-1)[0]
  }

  get personalBest() {
    return Math.max(...this.scoreBoard)
  }

  get personalTopThree() {
    return this.scoreBoard.sort((a, b) => b - a).slice(0, 3)
  }
}
