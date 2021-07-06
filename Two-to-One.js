// Solution

function longest(s1, s2) {
  let combineStrings = s1 + s2;
  let letters = combineStrings.split("");
  let sortedLetters = letters.sort();

  let result = [];

  sortedLetters.forEach((letter) => {
    if (!result.includes(letter)) {
      result.push(letter);
    }
  });

  return result.join("");
}

//My Pseudocode
// Gonna want to split the string up
// add first letter to the string. have a for loop go over the rest of the string. add next letter if not already in string.
// move on and repeat.
// need to put in alphabetical order
