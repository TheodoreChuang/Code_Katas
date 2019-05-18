// 4kyu - Adding Big Numbers - https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript
// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
// * The input numbers are big.
// * The input is a string of only digits
// * The numbers are positives

function addBigNumber(num1String, num2String) {
  let num1StringArray = num1String.split("");
  let num2StringArray = num2String.split("");
  let sumArray = [];
  let remainder = 0;

  while (
    num1StringArray.length > 0 ||
    num2StringArray.length > 0 ||
    remainder
  ) {
    let num1 = parseInt(num1StringArray.pop()) || 0;
    let num2 = parseInt(num2StringArray.pop()) || 0;

    let sumDigit = num1 + num2 + remainder;

    sumArray.unshift(sumDigit % 10);
    sumDigit < 10 ? (remainder = 0) : (remainder = 1);
  }

  return sumArray.join("");
}

module.exports = addBigNumber;
