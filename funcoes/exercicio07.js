function calculateCalories(sugarGrams, flourGrams) {
  const result = sugarGrams * 4 + flourGrams * 4;
  return result;
}

console.log(calculateCalories(50, 100));
