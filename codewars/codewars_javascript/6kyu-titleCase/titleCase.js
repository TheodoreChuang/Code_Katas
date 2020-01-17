// string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The

function titleCase(title, minorWords) {
  return title
    .split(" ")
    .map((word, i) => {
      if (minorWords && i !== 0) {
        if (minorWords.match(new RegExp(`(^|\\W)${word}($|\\W)`, "i"))) {
          return word.toLowerCase();
        }
      }
      return capitalCase(word);
    })
    .join(" ");
}

function capitalCase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

module.exports = titleCase;