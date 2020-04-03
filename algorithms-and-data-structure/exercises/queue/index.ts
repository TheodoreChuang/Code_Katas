// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

/**
 * Queue Class (FIFO)
 */
class Queue {
  private queue: any[]

  constructor() {
    this.queue = []
  }

  /**
   * Adds a value to the queue
   */
  add(value: any) {
    this.queue.push(value)
  }

  /**
   * Returns the oldest item
   */
  remove() {
    return this.queue.shift()
  }

  /**
   * Returns next item *without* removing it.
   */
  peek() {
    return this.queue[0]
  }
}

export { Queue }
