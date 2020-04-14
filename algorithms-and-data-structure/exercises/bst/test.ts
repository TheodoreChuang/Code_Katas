import { BSTNode } from '.'

describe('BSTNode', () => {
  test('BSTNode is a constructor', () => {
    expect(typeof BSTNode.prototype.constructor).toEqual('function')
  })

  test('BSTNode can insert correctly', () => {
    const node = new BSTNode(10)
    node.insert(5)
    node.insert(15)
    node.insert(17)

    expect(node.left.data).toEqual(5)
    expect(node.right.data).toEqual(15)
    expect(node.right.right.data).toEqual(17)
  })

  test('Contains returns node with the same data', () => {
    const node = new BSTNode(10)
    node.insert(5)
    node.insert(15)
    node.insert(20)
    node.insert(0)
    node.insert(-5)
    node.insert(3)

    const three = node.left.left.right
    expect(node.contains(3)).toEqual(three)
  })

  test('Contains returns null if value not found', () => {
    const node = new BSTNode(10)
    node.insert(5)
    node.insert(15)
    node.insert(20)
    node.insert(0)
    node.insert(-5)
    node.insert(3)

    expect(node.contains(9999)).toEqual(null)
  })
})
