// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// TODO memo wrapper

/**
 * The fibonacci series is an ordering of numbers where
 * each number is the sum of the preceeding two.
 * For example, fib(10) => 34 ([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
 */
// O(n)
function fibIter(n: number) {
  const series = [0, 1]

  for (let i = 2; i <= n; i++) {
    series.push(series[i - 1] + series[i - 2])
  }

  return series[n]
}

/**
 * The fibonacci series is an ordering of numbers where
 * each number is the sum of the preceeding two.
 * For example, fib(10) => 34 ([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
 */
// O(2^n)
function fibRec(n: number): number {
  if (n < 2) return n

  return fibRec(n - 1) + fibRec(n - 2)
}

// function memoize(fn: (...args: any[]) => any) {
//   const cache = new Map()

//   return (...args: any[]) => {
//     if (cache.get(args)) {
//       return cache.get(args)
//     }
//     // FIXME: 'this' implicitly has type 'any' because it does not have a type annotation.ts(2683)
//     const result = fn.apply(this, args)
//     cache.set(args, result)

//     return result
//   }
// }

// const fibMemo = memoize(fibRec)

// https://github.com/guocaoyi/typescript-algorithms/blob/master/src/algorithms/math/fibonacci.ts
const fibRecMemo = (n: number, m: any = { 0: 0, 1: 1 }): number =>
  n in m ? m[n] : [(m[n] = fibRecMemo(n - 1, m) + fibRecMemo(n - 2, m)), m[n]][1]

const fibMemo = fibRecMemo

// var t0 = performance.now();
// fibRecMemo(35)
// var t1 = performance.now();
// console.log("Call took " + (t1 - t0) + " milliseconds.");

export { fibIter, fibRec, fibMemo }
