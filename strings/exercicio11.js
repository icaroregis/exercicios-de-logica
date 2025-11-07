let starMessage = 'Twinkle, twinkle, little star, how I wonder what star you are!';

const lastOccurrence = starMessage.lastIndexOf('star');
const replaceOccurrences = starMessage.replaceAll('star', 'planet');
console.log(`${lastOccurrence} ${replaceOccurrences}`);
