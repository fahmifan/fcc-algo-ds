const { findLongestWordLength } = require('./index')

describe('findLongestWordLength(str)' , () => {
  it('should return 6 when str = "The quick brown fox jumped over the lazy dog"', () => {
    expect(findLongestWordLength("The quick brown fox jumped over the lazy dog")).toEqual(6)
  })

  it('should return 5 when str = "May the force be with you"', () => {
    expect(findLongestWordLength("May the force be with you")).toEqual(5)
  })

  it('should return 6 when str = "Google do a barrel roll"', () => {
    expect(findLongestWordLength("Google do a barrel roll")).toEqual(6)
  })

  it('should return 8 when str = "What is the average airspeed velocity of an unladen swallow"', () => {
    expect(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"))
      .toEqual(8)
  })
})