function feast(beast, dish) {
  const removingCharactersFromAnimalNames = beast.trim();
  const removingCharactersFromDishNames = dish.trim();

  if (removingCharactersFromAnimalNames.length === 0 || removingCharactersFromDishNames.length === 0) {
    return false;
  }

  const initialLetterBeast = removingCharactersFromAnimalNames[0];
  const lastLetterBeast = removingCharactersFromAnimalNames[removingCharactersFromAnimalNames.length - 1];
  const initialLetterDish = removingCharactersFromDishNames[0];
  const lastLetterDish = removingCharactersFromDishNames[removingCharactersFromDishNames.length - 1];

  if (initialLetterBeast === initialLetterDish && lastLetterBeast === lastLetterDish) {
    return true;
  }
  
  return false;
}
