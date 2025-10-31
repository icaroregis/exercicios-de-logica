const cosmicMap = new Map();
const earthCoordinates = { x: 0, y: 0, z: 0 }; // Complex object key representing Earth's location

cosmicMap.set(earthCoordinates, 'Home planet'); // Adding a complex key-value pair to our Map
console.log(cosmicMap.get(earthCoordinates)); // Retrieving the description for Earth
