let constellation = [
  ['*', ' ', '*'],
  [' ', '*', ' '],
  ['*', ' ', ' '],
];

for (let x = 0; x < constellation.length; x++) {
  let stars = '';
  for (let y = 0; y < constellation[x].length; y++) {
    stars += constellation[x][y] + ' ';
  }
  console.log(stars);
}
