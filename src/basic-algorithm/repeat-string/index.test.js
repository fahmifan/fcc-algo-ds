const { repeatStringNumTimes } = require('./index')
describe('repeatStringNumTimes(str, num)', () => {
  it('should return aaa when str="a", num=3', () => {
    expect(repeatStringNumTimes('a', 3))
  })
  
  it('should return "wo wo wo" when str="wo ", num=3', () => {
    expect(repeatStringNumTimes('wo ', 3))
  })
})