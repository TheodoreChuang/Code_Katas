const rgb = require("./rgbToHex");

describe("Convert RGB to Hex", () => {
  test.skip("1. RGB to Hex", () => {
    expect(rgb(255, 255, 255)).toBe("FFFFFF");
  });
  test.skip("2. RGB to Hex", () => {
    expect(rgb(255, 255, 300)).toBe("FFFFFF");
  });
  test.skip("3. RGB to Hex", () => {
    expect(rgb(0, 0, 0)).toBe("000000");
  });
  test.skip("4. RGB to Hex", () => {
    expect(rgb(148, 0, 211)).toBe("9400D3");
  });
  test.skip("5. RGB to Hex", () => {
    expect(rgb(192, -100, 211)).toBe("C000D3");
  });
});
