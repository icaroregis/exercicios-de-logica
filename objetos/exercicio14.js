let galaxyMap = new Map();

galaxyMap.set('Apollo', 'Moon');
let curiosity = { rover: 'Curiosity' };
galaxyMap.set(curiosity, 'Mars');
galaxyMap.set('Voyager 1', 'Interstellar Space');

console.log(galaxyMap.get(curiosity)); // Should output: Mars
