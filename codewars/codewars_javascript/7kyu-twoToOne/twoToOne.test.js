const longest = require("./twoToOne");

describe("longest", function() {
  test("Basic tests", () => {
    expect(longest("aretheyhere", "yestheyarehere")).toBe("aehrsty");
  });
  test("Basic tests", () => {
    expect(longest("loopingisfunbutdangerous", "lessdangerousthancoding")).toBe(
      "abcdefghilnoprstu"
    );
  });
  test("Basic tests", () => {
    expect(longest("inmanylanguages", "theresapairoffunctions")).toBe(
      "acefghilmnoprstuy"
    );
  });
});
