const removeDuplicates = require('./removeDuplicates')

describe.skip('removeDuplicates() in sorted array', () => {
  test('test case', () => {
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5)
  })
})
