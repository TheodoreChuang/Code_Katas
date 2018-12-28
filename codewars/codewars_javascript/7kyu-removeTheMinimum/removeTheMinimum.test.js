const removeSmallest = require("./removeTheMinimum");

describe("removeSmallest", () => {
  test.skip("works for the examples", () => {
    expect(removeSmallest([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5]);
    expect(removeSmallest([5, 3, 2, 1, 4])).toEqual([5, 3, 2, 4]);
    expect(removeSmallest([2, 2, 1, 2, 1])).toEqual([2, 2, 2, 1]);
    expect(removeSmallest([])).toEqual([]);
    expect(removeSmallest([Math.floor(Math.random() * 100)])).toEqual([]);
  });

  test.skip("works for the examples", () => {
    expect(removeSmallest([Math.floor(Math.random() * 100)])).toEqual([]);
  });
});
