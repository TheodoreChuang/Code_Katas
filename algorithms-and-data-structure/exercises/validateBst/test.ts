import { BSTNode } from '../bst'
import { isValidBst } from '.'

describe('isValidBst()', () => {
  test('Valid BST returns true', () => {
    const n = new BSTNode(10)
    n.insert(5)
    n.insert(15)
    n.insert(0)
    n.insert(20)

    expect(isValidBst(n)).toEqual(true)
  })

  test('Invalid BST returns false', () => {
    const n = new BSTNode(10)
    n.insert(5)
    n.insert(15)
    n.insert(0)
    n.insert(20)
    n.left.left.right = new BSTNode(999)

    expect(isValidBst(n)).toEqual(false)
  })
})
