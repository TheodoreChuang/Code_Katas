const validatePIN = require("./validatePin");

describe("validatePIN", () => {
  test.skip("should return False for pins with length other than 4 or 6", () => {
    expect(validatePIN("1")).toBe(false);
    expect(validatePIN("12")).toBe(false);
    expect(validatePIN("123")).toBe(false);
    expect(validatePIN("12345")).toBe(false);
    expect(validatePIN("1234567")).toBe(false);
    expect(validatePIN("-1234")).toBe(false);
    expect(validatePIN("1.234")).toBe(false);
    expect(validatePIN("-1.234")).toBe(false);
    expect(validatePIN("0000000")).toBe(false);
  });

  test.skip("should return False for pins which contain characters other than digits", () => {
    expect(validatePIN("a234")).toBe(false);
    expect(validatePIN(".234")).toBe(false);
  });

  test.skip("should return True for valid pins", () => {
    expect(validatePIN("1234")).toBe(true);
    expect(validatePIN("0000")).toBe(true);
    expect(validatePIN("1111")).toBe(true);
    expect(validatePIN("123456")).toBe(true);
    expect(validatePIN("098765")).toBe(true);
    expect(validatePIN("000000")).toBe(true);
    expect(validatePIN("123456")).toBe(true);
    expect(validatePIN("090909")).toBe(true);
  });
});
