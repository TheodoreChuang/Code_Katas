import { fizzBuzz } from './index'

describe('fizzBuzz()', () => {
  let consoleSpy = jest.spyOn(console, 'log')

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log')
  })

  afterEach(() => {
    consoleSpy.mockRestore()
  })

  test('fizzBuzz function is defined', () => {
    expect(fizzBuzz).toBeDefined()
  })

  test('Calling fizzbuzz with `5` prints out 5 statements', () => {
    fizzBuzz(5)

    expect(consoleSpy.mock.calls.length).toEqual(5)
  })

  test('Calling fizzbuzz with 15 prints out the correct values', () => {
    fizzBuzz(15)

    expect(consoleSpy.mock.calls[0][0]).toEqual(1)
    expect(consoleSpy.mock.calls[1][0]).toEqual(2)
    expect(consoleSpy.mock.calls[2][0]).toEqual('fizz')
    expect(consoleSpy.mock.calls[3][0]).toEqual(4)
    expect(consoleSpy.mock.calls[4][0]).toEqual('buzz')
    expect(consoleSpy.mock.calls[5][0]).toEqual('fizz')
    expect(consoleSpy.mock.calls[6][0]).toEqual(7)
    expect(consoleSpy.mock.calls[7][0]).toEqual(8)
    expect(consoleSpy.mock.calls[8][0]).toEqual('fizz')
    expect(consoleSpy.mock.calls[9][0]).toEqual('buzz')
    expect(consoleSpy.mock.calls[10][0]).toEqual(11)
    expect(consoleSpy.mock.calls[11][0]).toEqual('fizz')
    expect(consoleSpy.mock.calls[12][0]).toEqual(13)
    expect(consoleSpy.mock.calls[13][0]).toEqual(14)
    expect(consoleSpy.mock.calls[14][0]).toEqual('fizzbuzz')
  })
})
