const { filteredArray } = require('./index')

let actual = filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)
let expected = [ ]

describe('filteredArray', () => {
  it('filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3) should return [ ]', () => {
    expect(actual).toEqual(expected)
  })

  actual = filteredArray([ ["amy", "beth", "sam"], ["dave", "sean", "peter"] ], "peter")
  expected =  [ ["amy", "beth", "sam"] ]
  it('filteredArray([ ["amy", "beth", "sam"], ["dave", "sean", "peter"] ], "peter") should return [ ["amy", "beth", "sam"] ]', () => {
    expect(actual).toEqual(expected)
  })
})