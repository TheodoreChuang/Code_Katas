function pigIt(str) {
  return str
    .split(" ")
    .map(word => pigWord(word))
    .join(" ");
}

function pigWord(word) {
  if (word.match(/[,.?!;'"@&*]/)) return word;
  return word.slice(1) + word.charAt(0) + "ay";
}

// function pigIt(str) {
//   return str.replace(/\w+/g, w => {
//     return w.slice(1) + w[0] + "ay";
//   });
// }

module.exports = pigIt;
