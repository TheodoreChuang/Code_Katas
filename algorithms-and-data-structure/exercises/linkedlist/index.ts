// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  data: any
  next: any | null

  constructor(data: any, next: any | null = null) {
    this.data = data
    this.next = next
  }
}

/**
 * Linked List (index zero)
 */
class LinkedList {
  head: Node | null = null

  size() {
    let counter = 0
    let currentNode = this.head

    while (currentNode) {
      currentNode = currentNode.next
      counter++
    }

    return counter
  }

  getFirst(): Node | null {
    return this.head
  }

  getLast(): Node | null {
    let currentNode = this.head

    while (currentNode && currentNode.next !== null) {
      currentNode = currentNode.next
    }

    return currentNode
  }

  getAt(index: number): Node | null {
    let indexCounter = 0
    let currentNode = this.head

    while (currentNode && indexCounter < index) {
      currentNode = currentNode.next
      indexCounter++
    }

    return currentNode
  }

  insertFirst(data: any) {
    this.head = new Node(data, this.head)
  }

  insertLast(data: any) {
    const node = new Node(data)
    const last = this.getLast()

    if (!last) {
      this.head = node
      return
    }

    last.next = node
  }

  insertAt(data: any, index: number) {
    if (!this.head) {
      this.head = new Node(data)
      return
    }

    if (index === 0) {
      this.head = new Node(data, this.head)
      return
    }

    const previousNode = this.getAt(index - 1) || this.getLast()
    const newNode = new Node(data, previousNode && previousNode.next)
    if (previousNode) {
      previousNode.next = newNode
    }
  }

  removeFirst() {
    this.head = this.head?.next ? this.head.next : null
  }

  removeLast() {
    let previousNode = null
    let currentNode = this.head

    if (!this.head) {
      return
    }

    if (!this.head.next) {
      this.head = null
      return
    }

    while (currentNode?.next) {
      previousNode = currentNode
      currentNode = currentNode.next
    }

    if (previousNode) {
      previousNode.next = null
    }
  }

  removeAt(index: number) {
    if (!this.head) {
      return
    }

    if (index === 0) {
      this.head = this.head.next
      return
    }

    const previous = this.getAt(index - 1)
    if (!previous || !previous.next) {
      return
    }

    previous.next = previous.next.next
  }

  clear() {
    this.head = null
  }

  forEach(callbackFn: (node: Node) => void) {
    let currentNode = this.head

    while (currentNode) {
      callbackFn(currentNode)
      currentNode = currentNode.next
    }
  }

  *[Symbol.iterator]() {
    let node = this.head
    while (node) {
      yield node
      node = node.next
    }
  }
}

export { Node, LinkedList }
