let planet = 1;

while (planet <= 8) {
  if (planet === 6) {
    console.log('Planet', planet, 'has rings. Fascinating!');
    planet++;
    continue;
  }
  console.log('Exploring planet', planet, '. No rings found.');
  planet++;
}
