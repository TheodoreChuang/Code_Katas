// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

/**
 * Bubble Sort (n^2)
 * sorts by gradually pushing the highest value to the end
 */
function bubbleSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = lesser
      }
    }
  }

  return arr
}

/**
 * Selection Sort (n^2)
 * sorts by gradually inserting the lowest value to the beginning
 */
function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j
      }
    }

    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin]
      arr[indexOfMin] = arr[i]
      arr[i] = lesser
    }
  }

  return arr
}

/** Merge two sorted arrays into a single sorted array */
function merge(left: number[], right: number[]) {
  const merged: number[] = []

  while (left.length && right.length) {
    if (left[0] > right[0]) {
      merged.push(right.shift() as number)
    } else {
      merged.push(left.shift() as number)
    }
  }

  return [...merged, ...left, ...right]
}

/**
 * Merge Sort (n*log(n))
 * Divide then conquer. First divide the array into the smallest possible unit,
 * an array with one element. Then merge while sorting all the arrays back into
 * a single sorted array.
 */
function mergeSort(arr: number[]): number[] {
  if (arr.length === 1) return arr

  const center = Math.floor(arr.length / 2)
  const left = arr.slice(0, center)
  const right = arr.slice(center)

  return merge(mergeSort(left), mergeSort(right))
}

export { bubbleSort, selectionSort, mergeSort, merge }
