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

function createEmptyMatrix(n: number): Matrix {
  const emptyMatrix = Array(n).fill([])

  for (let row = 0; row < n; row++) {
    emptyMatrix[row] = Array(n).fill(null)
  }

  return emptyMatrix
}

/**
 * Returns a NxN spiral matrix.
 */
function matrix(n: number): Matrix {
  const matrix = createEmptyMatrix(n)
  const maxNum = n * n

  let topRow = 0
  let bottomRow = n - 1
  let leftColumn = 0
  let rightColumn = n - 1
  let counter = 1

  while (counter <= maxNum) {
    /* top row */
    for (let i = leftColumn; i <= rightColumn; i++) {
      matrix[topRow][i] = counter
      counter++
    }
    topRow++

    /* right column */
    for (let i = topRow; i <= bottomRow; i++) {
      matrix[i][rightColumn] = counter
      counter++
    }
    rightColumn--

    /* bottom row */
    for (let i = rightColumn; i >= leftColumn; i--) {
      matrix[bottomRow][i] = counter
      counter++
    }
    bottomRow--

    /* left column */
    for (let i = bottomRow; i >= topRow; i--) {
      matrix[i][leftColumn] = counter
      counter++
    }
    leftColumn++
  }

  return matrix
}

export { matrix }
