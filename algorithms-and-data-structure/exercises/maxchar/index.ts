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
  let maxChar = ''

  str.split('').forEach(char => (charMap[char] ? charMap[char]++ : (charMap[char] = 1)))

  Object.keys(charMap).forEach(char => {
    if (charMap[char] > charMap[maxChar]) {
      maxChar = charMap[char]
    }
  })
  return maxChar
}

export { maxChar }
