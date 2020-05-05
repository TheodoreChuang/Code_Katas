const rotate = require('./rotateArray')

describe.skip('rotate()', () => {
  test('test case', () => {
    expect(rotate([1, 2, 3, 4, 5, 6, 7], 3)).toStrictEqual([5, 6, 7, 1, 2, 3, 4])
  })
})
