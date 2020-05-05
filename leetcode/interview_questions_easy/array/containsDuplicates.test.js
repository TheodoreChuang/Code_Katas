const containsDuplicate = require('./containsDuplicates')

describe.skip('containsDuplicate()', () => {
  test('test case - true', () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBeTruthy()
  })
  test('test case - false', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBeFalsy()
  })
})
