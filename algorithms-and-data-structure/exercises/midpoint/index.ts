import { LinkedList, Node } from '../linkedlist'
// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

/**
 * Return the 'middle' node of a linked list.
 * If the list has an even number of elements, return
 * the node at the end of the first half of the list.
 */
export function midpoint(linkedList: LinkedList): Node | null {
  let singleSpeedPointer = linkedList.getFirst()
  let doubleSpeedPointer = linkedList.getFirst()

  while (doubleSpeedPointer?.next && doubleSpeedPointer?.next.next) {
    singleSpeedPointer = singleSpeedPointer?.next
    doubleSpeedPointer = doubleSpeedPointer.next.next
  }

  return singleSpeedPointer
}
