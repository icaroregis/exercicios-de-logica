let spacecraft = 'Discovery';
let mission = 'Jupiter orbit';
let launchDate = 'August 29, 2040';

let launchMessage = `${spacecraft} is set to embark on a mission to ${mission} on ${launchDate}.`;

let messagePreview = launchMessage.substring(0, 25).concat('...');

console.log(launchMessage.toUpperCase());
console.log('Preview: ' + messagePreview);
