import { romanToDenary } from './romanNumeralDecoder'

describe('romanToDenary()', function() {
  it('Basic conversion of roman numerals to denary', () => {
    expect(romanToDenary('I')).toBe(1)
    expect(romanToDenary('XXI')).toBe(21)
    expect(romanToDenary('IV')).toBe(4)
    expect(romanToDenary('MMVIII')).toBe(2008)
    expect(romanToDenary('MDCLXVI')).toBe(1666)
    expect(romanToDenary('MDCLXIV')).toBe(1664)
  })
})
