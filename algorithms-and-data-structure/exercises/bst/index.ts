// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

/** Node Class for a binary search tree */
export class BSTNode {
  data: number
  left: any = null
  right: any = null

  constructor(data: number) {
    this.data = data
  }

  insert(newData: number) {
    if (newData < this.data) {
      if (this.left) {
        this.left.insert(newData)
      } else {
        this.left = new BSTNode(newData)
      }
    }
    if (newData > this.data) {
      if (this.right) {
        this.right.insert(newData)
      } else {
        this.right = new BSTNode(newData)
      }
    }
  }

  contains(searchData: number): BSTNode | null | undefined {
    if (searchData === this.data) return this

    if (searchData < this.data) {
      if (this.left) {
        return this.left.contains(searchData)
      } else {
        return null
      }
    }
    if (searchData > this.data) {
      if (this.right) {
        return this.right.contains(searchData)
      } else {
        return null
      }
    }
  }
}
