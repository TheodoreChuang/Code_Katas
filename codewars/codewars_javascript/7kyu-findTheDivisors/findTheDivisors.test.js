const divisors = require("./findTheDivisors");

describe("Return a sorted array of an integer's divisors", () => {
  test.skip("Divisors", () => {
    expect(divisors(15)).toEqual([3, 5]);
  });
  test.skip("Divisors", () => {
    expect(divisors(12)).toEqual([2, 3, 4, 6]);
  });
  test.skip("Divisors", () => {
    expect(divisors(13)).toEqual("13 is prime");
  });
});
