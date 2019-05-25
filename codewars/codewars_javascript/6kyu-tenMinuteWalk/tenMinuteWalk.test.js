const isValidWalk = require("./tenMinuteWalk");

describe("Ten minute walk", () => {
  test.skip("test1", () => {
    expect(
      isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])
    ).toBeTruthy();
  });
  test.skip("test2", () => {
    expect(
      isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
    ).toBeFalsy();
  });
  test.skip("test3", () => {
    expect(isValidWalk(["w"])).toBeFalsy();
  });
  test.skip("test4", () => {
    expect(
      isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"])
    ).toBeFalsy();
  });
});
