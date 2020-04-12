import { Node } from '../tree'
// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

/**
 * Given the root node of a tree, return
 * an array where each element is the width
 * of the tree at each level.
 * @param root root node of a tree
 */
function levelWidth(root: Node) {
  const levelWidths: number[] = [0]
  const queue = [root, 'nextLevel']

  while (queue.length > 1) {
    const currentItem = queue.shift()

    if (currentItem === 'nextLevel') {
      levelWidths.push(0)
      queue.push('nextLevel')
    }
    if (currentItem instanceof Node) {
      levelWidths[levelWidths.length - 1]++
      queue.push(...currentItem?.children)
    }
  }

  return levelWidths
}

export { levelWidth }
