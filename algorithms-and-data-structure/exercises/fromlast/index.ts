import { LinkedList, Node } from '../linkedlist'
// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

/**
 * Given a linked list, return the element n spaces
 * from the last node in the list. Assume that n will always
 * be less than the length of the list.
 */
function fromLast(list: LinkedList, n: number) {
  let slow = list.getFirst()
  let fast = list.getFirst()

  for (let i = 0; i < n; i++) {
    fast = fast?.next
  }

  if (!fast) {
    return undefined
  }

  while (fast?.next) {
    slow = slow?.next
    fast = fast.next
  }

  return slow
}

export { fromLast }
