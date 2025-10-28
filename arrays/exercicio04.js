const spaceMissionChecklist = [
  ['Spacesuit', 'Helmet', 'Boots'],
  ['Oxygen Tanks', 'Food Supplies', 'Water'],
  ['Nav Computer', 'Thrusters', 'Comms'],
];

// Vamos tentar adicionar um novo item, ‘Mapas espaciais’, no início das Ferramentas de navegação (3ª lista interna)
spaceMissionChecklist[2].splice(0, 0, 'Mapas espaciais');
console.log(spaceMissionChecklist);

/*
Should output:
[
  [ 'Spacesuit', 'Helmet', 'Boots' ],
  [ 'Oxygen Tanks', 'Food Supplies', 'Water' ],
  [ 'Space Maps', 'Nav Computer', 'Thrusters', 'Comms' ]
]
*/
