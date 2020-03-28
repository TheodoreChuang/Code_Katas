// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

/**
 * Returns the number of vowels used in a string.
 */
function vowels(str: string): number {
  return str.match(/[aeiou]/gi)?.length || 0
}

function vowels2(str: string): number {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

  return str.split('').reduce((count, char) => {
    if (vowels.includes(char)) {
      count++
    }
    return count
  }, 0)
}

export { vowels, vowels2 }
