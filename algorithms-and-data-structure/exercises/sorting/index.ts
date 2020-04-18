// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

/**
 * Bubble Sort (n^2)
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
 */
function selectionSort(arr: number[]) {}

/**
 * Merge Sort (n*log(n))
 */
function mergeSort(arr: number[]) {}

function merge(left: number[], right: number[]) {}

export { bubbleSort, selectionSort, mergeSort, merge }
