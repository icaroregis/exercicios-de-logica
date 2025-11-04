let spaceshipName = 'Starship'.toLocaleUpperCase();
let destination = 'Mars'.toLocaleUpperCase();
let boardingMessage = spaceshipName + ' boarding for ' + destination + ' starts now!';
let missionStatus = boardingMessage.substring(9, 17) + ' ' + 'is ready for liftoff!';

console.log(boardingMessage); // Should print: STARSHIP boarding for MARS starts now!
console.log(missionStatus.toLocaleLowerCase()); // Should print: boarding is ready for liftoff!
