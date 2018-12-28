function removeSmallest(numbers) {
  let splicedNumbers = [...numbers];
  let minimum = splicedNumbers[0] ? Math.min(...splicedNumbers) : [];

  splicedNumbers.splice(splicedNumbers.indexOf(minimum), 1);
  return splicedNumbers;
}

module.exports = removeSmallest;
