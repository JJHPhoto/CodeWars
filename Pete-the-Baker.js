// Solution

function cakes(recipe, available) {
  let makeCakes;
  for (var ingredient in recipe) {
    if (available[ingredient]) {
      const possibleCakes = Math.floor(
        available[ingredient] / recipe[ingredient] || 0
      );
      if (!makeCakes || possibleCakes < makeCakes) {
        makeCakes = possibleCakes;
      }
    } else {
      return 0;
    }
  }
  return makeCakes;
}

//My Pseudocode
// need to compare available to recipe numbers. - for loop
// I feel like arrays would work better than objects. Or does the name (ig flour) provide a key? Does it matter what order the available ingredients are in?
