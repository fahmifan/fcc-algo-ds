const { reRegex } = require('./index')

let repeatNum = "42 42 42"
let actual = reRegex.test(repeatNum);
let expected = true;

describe('reRegex', () => {
  it('should match "42 42 42"', () => {
    expect(actual).toBe(expected)
  })
})

