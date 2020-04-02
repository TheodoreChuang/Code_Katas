import { fibIter, fibRec, fibMemo } from './'

describe('Fibonacci Series', () => {
  describe('Iterative Solution', () => {
    test('Fib function is defined', () => {
      expect(typeof fibIter).toEqual('function')
    })

    test('calculates correct fib value for 0', () => {
      expect(fibIter(0)).toEqual(0)
    })

    test('calculates correct fib value for 1', () => {
      expect(fibIter(1)).toEqual(1)
    })

    test('calculates correct fib value for 2', () => {
      expect(fibIter(2)).toEqual(1)
    })

    test('calculates correct fib value for 3', () => {
      expect(fibIter(3)).toEqual(2)
    })

    test('calculates correct fib value for 4', () => {
      expect(fibIter(4)).toEqual(3)
    })

    test('calculates correct fib value for 5', () => {
      expect(fibIter(5)).toEqual(5)
    })

    test('calculates correct fib value for 39', () => {
      expect(fibIter(39)).toEqual(63245986)
    })
  })

  describe('Recursive Solution', () => {
    test('Fib function is defined', () => {
      expect(typeof fibRec).toEqual('function')
    })

    test('calculates correct fib value for 0', () => {
      expect(fibRec(0)).toEqual(0)
    })

    test('calculates correct fib value for 1', () => {
      expect(fibRec(1)).toEqual(1)
    })

    test('calculates correct fib value for 2', () => {
      expect(fibRec(2)).toEqual(1)
    })

    test('calculates correct fib value for 3', () => {
      expect(fibRec(3)).toEqual(2)
    })

    test('calculates correct fib value for 4', () => {
      expect(fibRec(4)).toEqual(3)
    })

    test('calculates correct fib value for 5', () => {
      expect(fibRec(5)).toEqual(5)
    })

    test('calculates correct fib value for 39', () => {
      expect(fibRec(39)).toEqual(63245986)
    })
  })

  describe('Recursive + Memo Solution', () => {
    test('Fib function is defined', () => {
      expect(typeof fibMemo).toEqual('function')
    })

    test('calculates correct fib value for 0', () => {
      expect(fibMemo(0)).toEqual(0)
    })

    test('calculates correct fib value for 1', () => {
      expect(fibMemo(1)).toEqual(1)
    })

    test('calculates correct fib value for 2', () => {
      expect(fibMemo(2)).toEqual(1)
    })

    test('calculates correct fib value for 3', () => {
      expect(fibMemo(3)).toEqual(2)
    })

    test('calculates correct fib value for 4', () => {
      expect(fibMemo(4)).toEqual(3)
    })

    test('calculates correct fib value for 5', () => {
      expect(fibMemo(5)).toEqual(5)
    })

    test('calculates correct fib value for 39', () => {
      expect(fibMemo(39)).toEqual(63245986)
    })
  })
})
