// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function stringToOnlyLowerChar(string: String) {
  return string.replace(/[^\w]/g, '').toLowerCase()
}

function stringToCharMap(string: String) {
  const charMap: { [key: string]: number } = {}

  for (const char of string.split('')) {
    charMap[char] = charMap[char] + 1 || 1
  }

  return charMap
}

/**
 * Check to see if two provided strings are anagrams of each other
 * One string is an anagram of another if it uses the same character in the same quantity.
 * Only consider characters, not space or punctuation.  Consider capital letters to be the same as lower case
 */
function anagrams1(stringA: String, stringB: String) {
  const charMapA = stringToCharMap(stringToOnlyLowerChar(stringA))
  const charMapB = stringToCharMap(stringToOnlyLowerChar(stringB))

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false
  }

  for (const char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false
    }
  }

  return true
}

/**
 * Check to see if two provided strings are anagrams of each other
 * One string is an anagram of another if it uses the same character in the same quantity.
 * Only consider characters, not space or punctuation.  Consider capital letters to be the same as lower case
 */
function anagrams2(stringA: String, stringB: String) {
  const charsA = stringToOnlyLowerChar(stringA)
    .split('')
    .sort()
    .join('')
  const charsB = stringToOnlyLowerChar(stringB)
    .split('')
    .sort()
    .join('')

  return charsA === charsB
}

export { anagrams1, anagrams2 }
