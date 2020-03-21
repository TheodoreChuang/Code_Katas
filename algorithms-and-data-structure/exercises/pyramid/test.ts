import { pyramid, pyramid2, pyramid3 } from './index'

describe('pyramid()', () => {
  let consoleSpy = jest.spyOn(console, 'log')

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log')
  })

  afterEach(() => {
    consoleSpy.mockRestore()
  })

  test('pyramid is a function', () => {
    expect(typeof pyramid).toEqual('function')
  })

  test('prints a pryamid for n = 1', () => {
    pyramid(1)
    expect(consoleSpy.mock.calls[0][0]).toEqual('#')
    expect(consoleSpy.mock.calls.length).toEqual(1)
  })

  test('prints a pryamid for n = 2', () => {
    pyramid(2)
    expect(consoleSpy.mock.calls[0][0]).toEqual(' # ')
    expect(consoleSpy.mock.calls[1][0]).toEqual('###')
    expect(consoleSpy.mock.calls.length).toEqual(2)
  })

  test('prints a pryamid for n = 3', () => {
    pyramid(3)
    expect(consoleSpy.mock.calls[0][0]).toEqual('  #  ')
    expect(consoleSpy.mock.calls[1][0]).toEqual(' ### ')
    expect(consoleSpy.mock.calls[2][0]).toEqual('#####')
    expect(consoleSpy.mock.calls.length).toEqual(3)
  })

  test('prints a pryamid for n = 4', () => {
    pyramid(4)
    expect(consoleSpy.mock.calls[0][0]).toEqual('   #   ')
    expect(consoleSpy.mock.calls[1][0]).toEqual('  ###  ')
    expect(consoleSpy.mock.calls[2][0]).toEqual(' ##### ')
    expect(consoleSpy.mock.calls[3][0]).toEqual('#######')
    expect(consoleSpy.mock.calls.length).toEqual(4)
  })
})

describe('pyramid2()', () => {
  let consoleSpy = jest.spyOn(console, 'log')

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log')
  })

  afterEach(() => {
    consoleSpy.mockRestore()
  })

  test('pyramid2 is a function', () => {
    expect(typeof pyramid2).toEqual('function')
  })

  test('prints a pryamid for n = 1', () => {
    pyramid2(1)
    expect(consoleSpy.mock.calls[0][0]).toEqual('#')
    expect(consoleSpy.mock.calls.length).toEqual(1)
  })

  test('prints a pryamid for n = 2', () => {
    pyramid2(2)
    expect(consoleSpy.mock.calls[0][0]).toEqual(' # ')
    expect(consoleSpy.mock.calls[1][0]).toEqual('###')
    expect(consoleSpy.mock.calls.length).toEqual(2)
  })

  test('prints a pryamid for n = 3', () => {
    pyramid2(3)
    expect(consoleSpy.mock.calls[0][0]).toEqual('  #  ')
    expect(consoleSpy.mock.calls[1][0]).toEqual(' ### ')
    expect(consoleSpy.mock.calls[2][0]).toEqual('#####')
    expect(consoleSpy.mock.calls.length).toEqual(3)
  })

  test('prints a pryamid for n = 4', () => {
    pyramid2(4)
    expect(consoleSpy.mock.calls[0][0]).toEqual('   #   ')
    expect(consoleSpy.mock.calls[1][0]).toEqual('  ###  ')
    expect(consoleSpy.mock.calls[2][0]).toEqual(' ##### ')
    expect(consoleSpy.mock.calls[3][0]).toEqual('#######')
    expect(consoleSpy.mock.calls.length).toEqual(4)
  })
})

describe('pyramid3()', () => {
  let consoleSpy = jest.spyOn(console, 'log')

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log')
  })

  afterEach(() => {
    consoleSpy.mockRestore()
  })

  test('pyramid3 is a function', () => {
    expect(typeof pyramid3).toEqual('function')
  })

  test('prints a pryamid for n = 1', () => {
    pyramid3(1)
    expect(consoleSpy.mock.calls[0][0]).toEqual('#')
    expect(consoleSpy.mock.calls.length).toEqual(1)
  })

  test('prints a pryamid for n = 2', () => {
    pyramid3(2)
    expect(consoleSpy.mock.calls[0][0]).toEqual(' # ')
    expect(consoleSpy.mock.calls[1][0]).toEqual('###')
    expect(consoleSpy.mock.calls.length).toEqual(2)
  })

  test('prints a pryamid for n = 3', () => {
    pyramid3(3)
    expect(consoleSpy.mock.calls[0][0]).toEqual('  #  ')
    expect(consoleSpy.mock.calls[1][0]).toEqual(' ### ')
    expect(consoleSpy.mock.calls[2][0]).toEqual('#####')
    expect(consoleSpy.mock.calls.length).toEqual(3)
  })

  test('prints a pryamid for n = 4', () => {
    pyramid3(4)
    expect(consoleSpy.mock.calls[0][0]).toEqual('   #   ')
    expect(consoleSpy.mock.calls[1][0]).toEqual('  ###  ')
    expect(consoleSpy.mock.calls[2][0]).toEqual(' ##### ')
    expect(consoleSpy.mock.calls[3][0]).toEqual('#######')
    expect(consoleSpy.mock.calls.length).toEqual(4)
  })
})
