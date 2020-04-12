// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

/** Node of a Tree data structure */
class Node {
  data: any
  children: Node[]

  constructor(data: any) {
    this.data = data
    this.children = []
  }

  /** Creates a child node from this node */
  add(data: any) {
    this.children.push(new Node(data))
  }

  /** Removes children nodes from this node on matching data values */
  remove(data: any) {
    this.children = this.children.filter((node) => node.data !== data)
  }
}

/** Tree Data Structure */
class Tree {
  root: any = null

  /** Breadth-First Traversal */
  traverseBF(fn: (node: Node) => void) {
    const queue = [this.root]

    while (queue.length) {
      const currentNode = queue.shift()
      queue.push(...currentNode.children)
      fn(currentNode)
    }
  }

  /** Depth-First Traversal */
  traverseDF(fn: (node: Node) => void) {
    let queue = [this.root]

    while (queue.length) {
      const currentNode = queue.shift()
      queue.unshift(...currentNode.children)
      fn(currentNode)
    }
  }
}

export { Tree, Node }
