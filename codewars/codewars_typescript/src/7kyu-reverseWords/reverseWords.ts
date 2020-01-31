/**
 * Reverse each word in a string, retaining any spacing
 */

export function reverseString(str: string): string {
  return str
    .split('')
    .reverse()
    .join('')
}

export function reverseWords(str: string): string {
  const words = str.split(' ')
  return words.map(word => reverseString(word)).join(' ')
}
