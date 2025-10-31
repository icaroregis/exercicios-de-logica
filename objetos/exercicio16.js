const galactic = new Map();
galactic.set('Galactic Warrior', 'Search Mars for traces of life');
const keyObject = { mission: 'Gothic Warrior', description: 'Scouring Neptune in search of rare minerals' };
galactic.set(keyObject, 'Gothic Warrior');

console.log(galactic.get('Galactic Warrior'));
console.log(galactic.has(keyObject));

galactic.delete('Galactic Warrior');
