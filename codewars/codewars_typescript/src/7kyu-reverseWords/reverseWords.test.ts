import { reverseWords, reverseString } from './reverseWords'

describe('reverseWords()', () => {
  it('Should reverse each word in a string, retaining any spacing.', () => {
    expect(reverseWords('a b c d')).toBe('a b c d')
    expect(reverseWords('apple')).toBe('elppa')
    expect(reverseWords('double  spaced  words')).toBe('elbuod  decaps  sdrow')
    expect(reverseWords('The quick brown fox jumps over the lazy dog.')).toBe(
      'ehT kciuq nworb xof spmuj revo eht yzal .god',
    )
  })
})

describe('reverseString()', () => {
  it('Should reverse a string', () => {
    expect(reverseString('Hello')).toBe('olleH')
  })
})
