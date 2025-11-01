const satellites = {
  Earth: ['Moon'],
  Mars: ['Phobos', 'Deimos'],
  Jupiter: ['Io', 'Europa', 'Ganymede', 'Callisto'],
};

for (let planet in satellites) {
  for (let i = 0; i < satellites[planet].length; i++) {
    console.log(`The satellite ${satellites[planet][i]} orbits the planet ${planet}.`);
  }
}
