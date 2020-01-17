/**
 * Reverse each word in a string, retaining any spacing
 */

export function reverseWords(str: string): string {
  const words = str.split(' ')
  return words.map(word => reverseString(word)).join(' ')
}

export function reverseString(str: string) {
  return str
    .split('')
    .reverse()
    .join('')
}
