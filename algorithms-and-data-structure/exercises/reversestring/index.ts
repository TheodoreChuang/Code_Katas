// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse1(str: String) {
  return str
    .split('')
    .reverse()
    .join('')
}

function reverse2(str: String) {
  let reversed = ''

  for (let char of str.split('')) {
    reversed = char + reversed
  }
  return reversed
}

function reverse3(str: String) {
  return str.split('').reduce((reversed, char): string => {
    return char + reversed
  })
}

export { reverse1, reverse2, reverse3 }
