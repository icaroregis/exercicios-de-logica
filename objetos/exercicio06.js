// TODO: Define a spaceship object with at least three details about it - name, mission, crew (list of people)
const spaceship = {
  name: 'Warrior',
  mission: 'Mission Warrior',
  crew: ['Icaro', 'Christian', 'Thayna', 'Cecilia'],
};

// TODO: Using dot notation, output one property of the spaceship to the console
console.log(spaceship['crew']);

// TODO: Add a new crew member to the spaceship's crew list
spaceship['crew'].push('Rafael');
console.log(spaceship);
