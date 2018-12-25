const { truncateString } = require('./index') 

describe('truncateString(str, maxLength)', () => {
  it(`should return 'Peter Piper...'`, () => {
      expect(truncateString('Peter Piper picked a peck of pickled peppers', 11)).toEqual('Peter Piper...')
    })

  it(`should return "A-tisket..."`, () => {
    expect(truncateString("A-tisket a-tasket A green and yellow basket", 8)).toEqual('A-tisket...')
  })

  it(`should return "A-tisket a-tasket A green and yellow basket"`, () => {
      expect(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2))
        .toEqual("A-tisket a-tasket A green and yellow basket")
    })
})