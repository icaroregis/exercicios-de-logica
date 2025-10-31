let spaceship = {
  name: 'Explorer',
  type: 'Shuttle',
  missionCount: 3,
};

spaceship['missionCount'] = spaceship['missionCount'] + 1;
console.log(spaceship['missionCount']);
