// Sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2
function inArray(array1, array2) {
  return array1
    .filter(substring => {
      for (let string of array2) {
        if (string.includes(substring)) return true;
      }
    })
    .sort();
}

module.exports = inArray;
