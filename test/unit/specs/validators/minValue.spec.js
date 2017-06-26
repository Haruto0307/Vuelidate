import minValue from 'src/validators/minValue'

describe('minValue validator', () => {
  it('should ', () => {
    expect(minValue(5)(5)).to.be.true
  })

  it('should validate the valid number', () => {
    expect(minValue(5)(6)).to.be.true
  })

  it('should validate the invalid number', () => {
    expect(minValue(5)(4)).to.be.false
  })

  it('should validate the string value', () => {
    expect(minValue(5)('not string here')).to.be.false
  })
})
