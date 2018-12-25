const longest = require("./twoToOne");

describe("longest", function() {
  test.skip("Basic tests", () => {
    expect(longest("aretheyhere", "yestheyarehere")).toBe("aehrsty");
  });
  test.skip("Basic tests", () => {
    expect(longest("loopingisfunbutdangerous", "lessdangerousthancoding")).toBe(
      "abcdefghilnoprstu"
    );
  });
  test.skip("Basic tests", () => {
    expect(longest("inmanylanguages", "theresapairoffunctions")).toBe(
      "acefghilmnoprstuy"
    );
  });
});
