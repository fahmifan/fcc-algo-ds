const { whatIsInAName } = require('./index')

let collection = [
  { first: "Romeo", last: "Montague" }, 
  { first: "Mercutio", last: null }, 
  { first: "Tybalt", last: "Capulet" }
]
let source = { last: "Capulet" }
let expected = { first: "Tybalt", last: "Capulet" }

describe('whatIsInAName(collection, source)', () => {
  it('should return `{ first: "Tybalt", last: "Capulet" }`', () => {
    expect(whatIsInAName(collection, source)).toEqual(expected)
  })

  it('should return `[{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]`', () => {
    expect(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }))
      .toEqual([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }])
  })

  it('should return `[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]`', () => {
    expect(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], 
      { "apple": 1, "bat": 2 }))
      .toEqual([{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }])
  })

  it('should return `[{ "apple": 1, "bat": 2, "cookie": 2 }]`', () => {
    expect(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }))
      .toEqual([{ "apple": 1, "bat": 2, "cookie": 2 }])
  })

  it('should return `[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]`', () => {
    expect(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }))
      .toEqual([{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }])
  })

  it('should return `[]`', () => {
    expect(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}))
      .toEqual([])
  })
})