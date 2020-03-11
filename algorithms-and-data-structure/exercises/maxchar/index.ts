// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

interface AnyObject {
  [key: string]: any
}

function maxChar(str: String): string {
  let charMap: AnyObject = {}
  let currentMaxCount = 0
  let maxChar = ''

  str.split('').forEach(char => (charMap[char] ? charMap[char]++ : (charMap[char] = 1)))

  for (let char in charMap) {
    if (charMap[char] > currentMaxCount) {
      currentMaxCount = charMap[char]
      maxChar = char
    }
  }
  return maxChar
}

export { maxChar }
