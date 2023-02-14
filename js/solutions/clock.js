const HOUR_MINUTES = 60

const DAY_MINUTES = 24 * 60

const absModulus = (dividend, divisor) =>
  (divisor + (dividend % divisor)) % divisor

export class Clock {
  constructor(hours, minutes = 0) {
    this._minutes = absModulus(hours * HOUR_MINUTES + minutes, DAY_MINUTES)
  }

  get minutes() {
    return this._minutes % HOUR_MINUTES
  }

  get hours() {
    return Math.floor(this._minutes / HOUR_MINUTES)
  }

  toString() {
    return [this.hours, this.minutes]
      .map((time) => `${time}`.padStart(2, '0'))
      .join(':')
  }

  plus(minutes) {
    return new Clock(0, this._minutes + minutes)
  }

  minus(minutes) {
    return this.plus(-minutes)
  }

  equals(newClock) {
    return this._minutes === newClock._minutes
  }
}
