// TODO: Create a Set named 'spaceObjects' and initialize it with some celestial bodies
// TODO: Add a few items to your 'spaceObjects' Set
// TODO: Delete a few items from your 'spaceObjects' Set
// TODO: Log the size of the updated 'spaceObjects' Set to the console
// TODO: Log your unique 'spaceObjects' Set to the console

const spaceObjects = new Set(['Mars', 'Venus', 'Plato', 'Neptune']);

spaceObjects.add('Mercury');
spaceObjects.add('Sun');

spaceObjects.delete('Plato');
spaceObjects.delete('Neptune');

console.log(spaceObjects.size);
console.log(spaceObjects); // Set(4) { 'Mars', 'Venus', 'Mercury', 'Sun' }
