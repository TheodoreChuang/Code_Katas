const romanMap: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

export function romanToDenary(roman: string): number {
  return roman.split('').reduce((acc, cur, i, arr) => {
    return romanMap[arr[i + 1]] > romanMap[cur] ? acc - romanMap[cur] : acc + romanMap[cur]
  }, 0)
}
