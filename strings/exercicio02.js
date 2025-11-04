let spaceshipName = 'Starship';
let destination = 'Mars';
let boardingMessage = spaceshipName + ' boarding for ' + destination + ' starts now!';
let missionStatus = boardingMessage.substring(9, 17) + ' ' + 'is ready for liftoff!';

console.log(boardingMessage.toLocaleUpperCase()); // Should print: STARSHIP boarding for MARS starts now!
console.log(missionStatus.toLocaleLowerCase()); // Should print: boarding is ready for liftoff!
console.log(spaceshipName.indexOf('ship')); // Should print: 4
