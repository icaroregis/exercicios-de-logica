let cosmos = [
  ['Mercury', 'Venus', 'Earth'],
  ['Mars', 'Jupiter', 'Saturn'],
  ['Uranus', 'Neptune', 'Pluto'],
];

for (let i = cosmos.length - 1; i >= 0; i--) {
  for (let j = cosmos[i].length - 1; j >= 0; j--) {
    console.log(cosmos[i][j]);
  }
}
