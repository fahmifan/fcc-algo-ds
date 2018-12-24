const { fixRegex } = require('./index')

let textToReplace = "This sandwich is good."
let replacement = "okey-dokey";
let actual = textToReplace.replace(fixRegex, replacement)
let expected = "This sandwich is okey-dokey."

describe('fixRegex', () => {
  it('should replace "good" with "okey-dokey"', () => {
    expect(actual).toBe(expected)
  })
})