const titleCase = require("./titleCase");

describe("function titleCase: Convert a string into title case, given an optional list of exceptions (minor words)", () => {
  test.skip("Basic test", () => {
    expect(titleCase("")).toBe("");
  });
  test.skip("Basic test", () => {
    expect(titleCase("a clash of KINGS", "a an the of")).toBe(
      "A Clash of Kings"
    );
  });
  test.skip("Basic test", () => {
    expect(titleCase("THE WIND IN THE WILLOWS", "The In")).toBe(
      "The Wind in the Willows"
    );
  });
  test.skip("Basic test", () => {
    expect(titleCase("the quick brown fox")).toBe("The Quick Brown Fox");
  });
  test.skip("Basic test", () => {
    expect(titleCase("First a of in", "an often into")).toBe("First A Of In");
  });
});
