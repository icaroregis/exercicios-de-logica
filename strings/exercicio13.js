let alienMessage = 'Venus Mercury Earth Mars Jupiter Saturn Uranus Neptune';
let planets = alienMessage.split(' ').reverse();
let orderedPlanets = planets.join(', ');
console.log(orderedPlanets);
