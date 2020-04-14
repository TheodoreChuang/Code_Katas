import { BSTNode } from '../bst'

/**
 * Given a node, validate the binary search tree,
 * ensuring that every node's left hand child is
 * less than the parent node's value, and that
 * every node's right hand child is greater than
 * the parent
 */
// time: O(n)
// space: O(depth)
function isValidBst(node: BSTNode, min: null | number = null, max: null | number = null): boolean {
  if (!node) {
    return true
  }

  if (min && node.data < min) {
    return false
  }

  if (max && node.data > max) {
    return false
  }

  return isValidBst(node.left, min, node.data) && isValidBst(node.right, node.data, max)
}

export { isValidBst }
