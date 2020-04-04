/**
Demo Test (30 mins, Codility)
Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].

// Assessment: solution is functional but did poorly in performance
*/

/**
 * Smallest Missing Positive Integer
 */
function solution(A) {
  let smallestInt = 1

  const sortedPositiveArray = A.filter((x) => x > 0)
  const uniqueSet = new Set(sortedPositiveArray)
  const uniqueArray = [...uniqueSet].sort()

  if (uniqueArray.length === 0) {
    return smallestInt
  }

  for (let i = 1; i <= 100000; i++) {
    if (i !== uniqueArray[0]) {
      smallestInt = i
      break
    }

    if (i === uniqueArray[0]) {
      uniqueArray.shift()
    }
  }
  return smallestInt
}
