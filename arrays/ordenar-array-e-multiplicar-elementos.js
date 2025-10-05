function orderNumbersAndMultiply(arr = []) {
  const orderValues = arr.sort((a, b) => a - b);
  let accumulator = 1;
  for (let i = 0; i <= arr.length - 1; i++) {
    accumulator *= orderValues[i];
  }
  return accumulator;
}

console.log(orderNumbersAndMultiply([5, 3, 2, 4, 1]));
