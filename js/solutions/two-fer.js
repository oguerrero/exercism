//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const twoFer = (you = 'you') => {
  return `One for ${you}, one for me.`
}

import { twoFer } from './two-fer'

describe('twoFer()', () => {
  test('no name given', () => {
    expect(twoFer()).toEqual('One for you, one for me.')
  })

  xtest('a name given', () => {
    expect(twoFer('Alice')).toEqual('One for Alice, one for me.')
  })

  xtest('another name given', () => {
    expect(twoFer('Bob')).toEqual('One for Bob, one for me.')
  })
})
