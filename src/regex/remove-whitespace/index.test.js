const { wsRegex } = require('./index')
let hello = "   Hello, World!  "
let actual = hello.match(wsRegex)[0]
let expected = "Hello, World!"

describe('wsRegex', () => {
  it('should remove beginning and ending whitespace from " Hello World "', () => {
    expect(actual).toBe(expected)
  })
})