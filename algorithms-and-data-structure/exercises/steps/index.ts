// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function step(n: number, i: number) {
  return '#'.repeat(i) + ' '.repeat(n - i)
}

/**
 * Write a function that accepts a positive number N.
 * The function should console log a step shape
 * with N levels using the # character.  Make sure the
 * step has spaces on the right hand side!
 */
function steps(n: number) {
  for (let i = 1; i <= n; i++) {
    console.log(step(n, i))
  }
}

function steps2(n: number) {
  for (let row = 1; row <= n; row++) {
    let step = ''
    for (let column = 1; column <= n; column++) {
      column <= row ? (step += '#') : (step += ' ')
    }
    console.log(step)
  }
}

function steps3(n: number, row = 0, stair = ''): string | void {
  if (n === row) {
    return
  }

  if (n === stair.length) {
    console.log(stair)
    return steps3(n, row + 1)
  }

  const add = stair.length <= row ? '#' : ' '

  return steps3(n, row, stair + add)
}

export { steps, steps2, steps3 }
