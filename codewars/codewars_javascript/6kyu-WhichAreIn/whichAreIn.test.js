const inArray = require("./whichAreIn");

describe("Sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2", () => {
  const a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

  test.skip("test 1", () => {
    const a1 = ["xyz", "live", "strong"];
    expect(inArray(a1, a2)).toEqual(["live", "strong"]);
  });

  test.skip("test 2", () => {
    a1 = ["live", "strong", "arp"];
    expect(inArray(a1, a2)).toEqual(["arp", "live", "strong"]);
  });

  test.skip("test 3", () => {
    const a1 = ["tarp", "mice", "bull"];
    expect(inArray(a1, a2)).toEqual([]);
  });
});
