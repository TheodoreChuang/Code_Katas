// Amazon AU Codesprint Round 1 via Codility (30 mins)
// Overall 40% (Correctness: 80%, Performance: 0%)

/** 
 * Light bulbs Challenge
 * A number of lights bulbs that are arranged in a line and are turned on one at a time.
 * Electricity flows from position 1 to the last bulb in line. So at any given position,
 * that bulb is only lit if it is flipped one and all the previous bulbs are also lit.
 * Any time all the flipped switches have their bulbs lit, it counts as a "moment".
 * Given an arranged and order, return the number of moments.
 * 
 * Example test:   [2, 1, 3, 5, 4] => 3
 * Example test:   [2, 3, 4, 1, 5] => 2
 * Example test:   [1, 3, 4, 2, 5] => 3
 */

function isMoment(index, list) {
  return list.slice(0, index).every((bulb) => bulb === true)
}

function solution(A) {
  let moments = 0
  const list = new Array(A.length).fill(false)

  A.forEach((i) => {
    list[i - 1] = true

    const isThisAMoment = isMoment(i, list)
    if (isThisAMoment) {
      moments++
    }
  })
  return moments
}
