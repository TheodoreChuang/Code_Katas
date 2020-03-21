// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function level(totalLevels: number, currentLevel: number) {
  return (
    ' '.repeat(totalLevels - currentLevel) + '#'.repeat(currentLevel * 2 - 1) + ' '.repeat(totalLevels - currentLevel)
  )
}

/**
 * Write a function that accepts a positive number N.
 * The function should console log a pyramid shape
 * with N levels using the # character.  Make sure the
 * pyramid has spaces on both the left *and* right hand sides
 */
function pyramid(levels: number) {
  for (let i = 1; i <= levels; i++) {
    console.log(level(levels, i))
  }
}

function pyramid2(rows: number) {
  const columnWidth = rows * 2 - 1
  const midPoint = Math.floor(columnWidth / 2)

  for (let row = 0; row < rows; row++) {
    let rowString = ''
    for (let column = 0; column < columnWidth; column++) {
      if (midPoint - row <= column && midPoint + row >= column) {
        rowString += '#'
      } else {
        rowString += ' '
      }
    }
    console.log(rowString)
  }
}

function pyramid3(rows: number, row = 0, rowString = ''): void {
  const columnWidth = rows * 2 - 1
  const midPoint = Math.floor(columnWidth / 2)

  if (row === rows) {
    return
  }

  if (rowString.length === columnWidth) {
    console.log(rowString)
    return pyramid3(rows, row + 1)
  }

  let add = midPoint - row <= rowString.length && midPoint + row >= rowString.length ? '#' : ' '

  return pyramid3(rows, row, rowString + add)
}

export { pyramid, pyramid2, pyramid3 }
