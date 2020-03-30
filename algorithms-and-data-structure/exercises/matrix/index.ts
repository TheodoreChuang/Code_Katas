// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

type Matrix = null[][] | number[][]

type Direction = 'right' | 'down' | 'left' | 'up'

function createEmptyArray(n: number): null[] {
  return Array(n).fill(null)
}

function createEmptyMatrix(n: number): Matrix {
  const emptyMatrix = Array(n).fill([])

  for (let row = 0; row < n; row++) {
    emptyMatrix[row] = createEmptyArray(n)
  }

  return emptyMatrix
}

/**
 * Returns a NxN spiral matrix.
 */
function matrix(n: number): Matrix {
  const matrix = createEmptyMatrix(n)
  let topRow = 0
  let bottomRow = n - 1
  let leftColumn = 0
  let rightColumn = n - 1
  let direction: Direction = 'right'
  let counter = 1

  while (counter <= n * n) {
    switch (direction) {
      case 'right':
        for (let i = leftColumn; i <= rightColumn; i++) {
          matrix[topRow][i] = counter
          counter++

          if (i === rightColumn) {
            topRow++
            direction = 'down'
          }
        }
        break
      case 'down':
        for (let i = topRow; i <= bottomRow; i++) {
          matrix[i][rightColumn] = counter
          counter++

          if (i === bottomRow) {
            rightColumn--
            direction = 'left'
          }
        }
        break
      case 'left':
        for (let i = rightColumn; i >= leftColumn; i--) {
          matrix[bottomRow][i] = counter
          counter++

          if (i === leftColumn) {
            bottomRow--
            direction = 'up'
          }
        }
        break
      case 'up':
        for (let i = bottomRow; i >= topRow; i--) {
          matrix[i][leftColumn] = counter
          counter++

          if (i === topRow) {
            leftColumn++
            direction = 'right'
          }
        }
        break
      default:
        console.warn('Unexpected direction, something broke!')
        throw new Error('Unexpected direction, something broke!')
    }
  }

  if (counter - 1 !== n * n) {
    throw new Error('counter does not equal expected maximum number')
  }

  return matrix
}

export { matrix }
