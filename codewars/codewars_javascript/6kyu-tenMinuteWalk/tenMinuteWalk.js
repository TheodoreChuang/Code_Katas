// The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

function isValidWalk(path) {
  moves = { n: 0, s: 0, e: 0, w: 0 };

  path.forEach(direction => {
    moves[direction]++;
  });

  return path.length === 10 && moves.n === moves.s && moves.e === moves.w;
}

module.exports = isValidWalk;
