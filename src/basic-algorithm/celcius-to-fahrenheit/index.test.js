const { convertToF } = require('./index')

describe('convertToF(celsius)', () => {
  it('should return 122 when celsius = 50', () => {
    expect(convertToF(50)).toEqual(122)
  })
})