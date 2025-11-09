function collectStars(...planets) {
  console.log(`Total Planets: ${planets.length}`);
  for (let name = 0; name < planets.length; name++) {
    console.log(`Planet discovered: ${planets[name]}`);
  }
}

collectStars('Cosmo', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune');
