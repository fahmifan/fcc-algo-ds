const { pwRegex } = require('./index')

describe('pwRegex', () => {
    it('should match bana12', () => {
        expect(pwRegex.test("bana12")).toBe(true)
    })
})