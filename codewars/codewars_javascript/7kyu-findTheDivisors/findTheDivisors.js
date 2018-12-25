function divisors(integer) {
  const limit = Math.sqrt(integer);
  const divisors = [];

  for (let i = 2; i <= limit; i++) {
    if (integer % i === 0) {
      divisors.push(i);
      divisors.push(integer / i);
    }
  }

  if (divisors.length === 0) {
    return `${integer} is prime`;
  }

  return divisors.sort((a, b) => a - b);
}

module.exports = divisors;
