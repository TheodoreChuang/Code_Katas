import { LinkedList, Node } from '../linkedlist'
// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

/**
 * Given a linked list, return true if the list is circular, false if it is not.
 */
function circular(linkedList: LinkedList) {
  let singlePointer = linkedList.getFirst()
  let doublePointer = linkedList.getFirst()

  while (doublePointer?.next?.next) {
    singlePointer = singlePointer?.next
    doublePointer = doublePointer?.next?.next

    if (singlePointer === doublePointer) {
      return true
    }
  }

  return false
}

export { circular }
