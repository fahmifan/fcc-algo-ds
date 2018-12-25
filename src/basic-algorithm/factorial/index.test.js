const { factorial } = require('./index')

describe('factorial', () => {
  it('factorial(5) should return 120', () => {
    expect(factorial(5)).toEqual(120)
  })
})