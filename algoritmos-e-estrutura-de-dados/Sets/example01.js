const array01 = [1, 2, 3, 4, 5];
const array02 = [10];

function areDisjoint(array1, array2) {
  const set1 = new Set(array1);
  return !array2.some((element) => set1.has(element));
}

console.log(areDisjoint(array01, array02));
