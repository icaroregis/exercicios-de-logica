function somarArrayDeNumeros(arr = []) {
  if (arr.length === 0) return 0;
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
