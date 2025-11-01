// Cosmos structure using nested loops
for (let planet = 1; planet <= 3; planet++) {
  // Loop over planets
  let orbitReport = 'Planet ' + planet + ': ';
  for (let moon = 1; moon <= planet; moon++) {
    // Loop over moons
    orbitReport += 'Moon ' + moon + ' ';
  }
  console.log(orbitReport); // Log the orbit report for the planet
}
