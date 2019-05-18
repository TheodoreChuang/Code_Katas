const addBigNumber = require("./addBigNumber");

describe("function that adds two large positive numbers", () => {
  test("test 1", () => {
    expect(addBigNumber("1", "1")).toEqual("2");
  });
  test("test 2", () => {
    expect(addBigNumber("123", "456")).toEqual("579");
  });
  test("test 3", () => {
    expect(addBigNumber("888", "222")).toEqual("1110");
  });
  test("test 4", () => {
    expect(addBigNumber("1372", "69")).toEqual("1441");
  });
  test("test 5", () => {
    expect(addBigNumber("12", "456")).toEqual("468");
  });
  test("test 6", () => {
    expect(addBigNumber("101", "100")).toEqual("201");
  });
  test("test 7", () => {
    expect(
      addBigNumber(
        "63829983432984289347293874",
        "90938498237058927340892374089"
      )
    ).toEqual("91002328220491911630239667963");
  });
});
