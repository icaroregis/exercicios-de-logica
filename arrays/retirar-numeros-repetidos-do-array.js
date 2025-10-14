function prepareGifts(gifts) {
  let result = [...new Set(gifts)].sort((a, b) => a - b);
  return result;
}

console.log(prepareGifts([1, 2, 2, 2, 3, 4, 5, 5, 5, 5, 6]));
