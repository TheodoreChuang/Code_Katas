const pigIt = require("./simplePigLatin");

describe("Pig Latin: Move the first letter of each word to the end of it, then add 'ay' to the end of the word. Leave punctuation marks untouched.", () => {
  test.skip("Pig latin is cool", () => {
    expect(pigIt("Pig latin is cool")).toBe("igPay atinlay siay oolcay");
  });
  test.skip("This is my string", () => {
    expect(pigIt("This is my string")).toBe("hisTay siay ymay tringsay");
  });
  test.skip("This is my string !", () => {
    expect(pigIt("This is my string !")).toBe("hisTay siay ymay tringsay !");
  });
});
