const { confirmEnding } = require('./index')

describe('confirmEnding(str, target)', () => {
  it('should return true', () => {
    expect(confirmEnding("Abstraction", "action")).toEqual(true)
    expect(confirmEnding("Bastian", "n")).toEqual(true)
    expect(confirmEnding("Congratulation", "on")).toEqual(true)
    expect(confirmEnding("He has to give me a new name", "name")).toEqual(true)
  })

  it('should return false', () => {
    expect(confirmEnding("Open sesame", "pen")).toEqual(false)
    expect(confirmEnding("Open sesame", "game")).toEqual(false)
    expect(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"))
      .toEqual(false)
  })
})
