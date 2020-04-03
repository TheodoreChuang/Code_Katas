import { Stack } from '../stack'
// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

/**
 * Queue (FIFO)
 * internal implement utilizes two stacks
 */
class QueueFromStack {
  private masterStack = new Stack()
  private tempStack = new Stack()

  add(item: any) {
    this.masterStack.push(item)
  }

  remove() {
    while (this.masterStack.peek()) {
      this.tempStack.push(this.masterStack.pop())
    }
    const item = this.tempStack.pop()

    while (this.tempStack.peek()) {
      this.masterStack.push(this.tempStack.pop())
    }

    return item
  }

  peek() {
    while (this.masterStack.peek()) {
      this.tempStack.push(this.masterStack.pop())
    }
    const item = this.tempStack.peek()
    
    while (this.masterStack.peek()) {
      this.tempStack.push(this.masterStack.pop())
    }
    
    return item
  }
}

export { QueueFromStack }
