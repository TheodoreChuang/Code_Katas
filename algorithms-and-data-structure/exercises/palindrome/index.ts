// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome1(str: String) {
  return (
    str ===
    str
      .split('')
      .reverse()
      .join('')
  )
}

function palindrome2(str: String) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1]
  })
}

export { palindrome1, palindrome2 }