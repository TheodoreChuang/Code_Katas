import { Queue } from './'

describe('Queue()', () => {
  test('Queue is a class', () => {
    expect(typeof Queue.prototype.constructor).toEqual('function')
  })

  test('Order of elements is maintained', () => {
    const q = new Queue()
    q.add(1)
    q.add(2)
    q.add(3)
    expect(q.remove()).toEqual(1)
    expect(q.remove()).toEqual(2)
    expect(q.remove()).toEqual(3)
    expect(q.remove()).toEqual(undefined)
  })

  describe('add()', () => {
    test('can add elements to a queue', () => {
      const q = new Queue()
      expect(() => {
        q.add(1)
      }).not.toThrow()
    })
  })

  describe('remove()', () => {
    test('can remove elements from a queue', () => {
      const q = new Queue()
      expect(() => {
        q.add(1)
        q.remove()
      }).not.toThrow()
    })
  })

  describe('peek()', () => {
    test('peek() returns the next item without removing it', () => {
      const q = new Queue()
      q.add(1)

      expect(q.peek()).toBe(1)
      expect(q.remove()).toBe(1)
      expect(q.remove()).toBe(undefined)
    })
  })
})
