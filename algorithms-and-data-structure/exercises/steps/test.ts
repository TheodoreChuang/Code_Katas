import { steps, steps2, steps3 } from './'

describe('steps()', () => {
  let consoleSpy = jest.spyOn(console, 'log')

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log')
  })

  afterEach(() => {
    consoleSpy.mockRestore()
  })

  test('steps is a function', () => {
    expect(typeof steps).toEqual('function')
  })

  test('steps called with n = 1', () => {
    steps(1)
    expect(consoleSpy.mock.calls[0][0]).toEqual('#')
    expect(consoleSpy.mock.calls.length).toEqual(1)
  })

  test('steps called with n = 2', () => {
    steps(2)
    expect(consoleSpy.mock.calls[0][0]).toEqual('# ')
    expect(consoleSpy.mock.calls[1][0]).toEqual('##')
    expect(consoleSpy.mock.calls.length).toEqual(2)
  })

  test('steps called with n = 3', () => {
    steps(3)
    expect(consoleSpy.mock.calls[0][0]).toEqual('#  ')
    expect(consoleSpy.mock.calls[1][0]).toEqual('## ')
    expect(consoleSpy.mock.calls[2][0]).toEqual('###')
    expect(consoleSpy.mock.calls.length).toEqual(3)
  })
})

describe('steps2()', () => {
  let consoleSpy = jest.spyOn(console, 'log')

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log')
  })

  afterEach(() => {
    consoleSpy.mockRestore()
  })

  test('steps is a function', () => {
    expect(typeof steps2).toEqual('function')
  })

  test('steps called with n = 1', () => {
    steps2(1)
    expect(consoleSpy.mock.calls[0][0]).toEqual('#')
    expect(consoleSpy.mock.calls.length).toEqual(1)
  })

  test('steps called with n = 2', () => {
    steps2(2)
    expect(consoleSpy.mock.calls[0][0]).toEqual('# ')
    expect(consoleSpy.mock.calls[1][0]).toEqual('##')
    expect(consoleSpy.mock.calls.length).toEqual(2)
  })

  test('steps called with n = 3', () => {
    steps2(3)
    expect(consoleSpy.mock.calls[0][0]).toEqual('#  ')
    expect(consoleSpy.mock.calls[1][0]).toEqual('## ')
    expect(consoleSpy.mock.calls[2][0]).toEqual('###')
    expect(consoleSpy.mock.calls.length).toEqual(3)
  })
})

describe('steps3()', () => {
  let consoleSpy = jest.spyOn(console, 'log')

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log')
  })

  afterEach(() => {
    consoleSpy.mockRestore()
  })

  test('steps is a function', () => {
    expect(typeof steps3).toEqual('function')
  })

  test('steps called with n = 1', () => {
    steps3(1)
    expect(consoleSpy.mock.calls[0][0]).toEqual('#')
    expect(consoleSpy.mock.calls.length).toEqual(1)
  })

  test('steps called with n = 2', () => {
    steps3(2)
    expect(consoleSpy.mock.calls[0][0]).toEqual('# ')
    expect(consoleSpy.mock.calls[1][0]).toEqual('##')
    expect(consoleSpy.mock.calls.length).toEqual(2)
  })

  test('steps called with n = 3', () => {
    steps3(3)
    expect(consoleSpy.mock.calls[0][0]).toEqual('#  ')
    expect(consoleSpy.mock.calls[1][0]).toEqual('## ')
    expect(consoleSpy.mock.calls[2][0]).toEqual('###')
    expect(consoleSpy.mock.calls.length).toEqual(3)
  })
})
