import { reverse1, reverse2, reverse3 } from './'

test('Reverse function exists', () => {
  expect(reverse1).toBeDefined()
  expect(reverse2).toBeDefined()
  expect(reverse3).toBeDefined()
})

test('Reverse reverses a string', () => {
  expect(reverse1('abcd')).toEqual('dcba')
  expect(reverse2('abcd')).toEqual('dcba')
  expect(reverse3('abcd')).toEqual('dcba')
})

test('Reverse reverses a string', () => {
  expect(reverse1('  abcd')).toEqual('dcba  ')
  expect(reverse2('  abcd')).toEqual('dcba  ')
  expect(reverse3('  abcd')).toEqual('dcba  ')
})
