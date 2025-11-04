let astronaut = 'Zoe';
let destination = 'starship';
let message = astronaut + ' to ' + destination + ': ';
let statusUpdate = message + 'Ready for liftoff.';
console.log(statusUpdate.charAt(astronaut) + statusUpdate.substring(1).toLowerCase());
// Should print: Zoe to starship: ready for liftoff.
