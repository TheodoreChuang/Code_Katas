import { vowels, vowels2 } from './'

describe('vowels()', () => {
  test('Vowels is a function', () => {
    expect(typeof vowels).toEqual('function')
  })

  test('returns the number of vowels used', () => {
    expect(vowels('aeiou')).toEqual(5)
  })

  test('returns the number of vowels used when they are capitalized', () => {
    expect(vowels('AEIOU')).toEqual(5)
  })

  test('returns the number of vowels used', () => {
    expect(vowels('abcdefghijklmnopqrstuvwxyz')).toEqual(5)
  })

  test('returns the number of vowels used', () => {
    expect(vowels('bcdfghjkl')).toEqual(0)
  })
})

describe('vowels2()', () => {
  test('Vowels is a function', () => {
    expect(typeof vowels2).toEqual('function')
  })

  test('returns the number of vowels used', () => {
    expect(vowels2('aeiou')).toEqual(5)
  })

  test('returns the number of vowels used when they are capitalized', () => {
    expect(vowels2('AEIOU')).toEqual(5)
  })

  test('returns the number of vowels used', () => {
    expect(vowels2('abcdefghijklmnopqrstuvwxyz')).toEqual(5)
  })

  test('returns the number of vowels used', () => {
    expect(vowels2('bcdfghjkl')).toEqual(0)
  })
})
