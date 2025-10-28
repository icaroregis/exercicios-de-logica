const weather = 'sunny';
const temperature = 30;

if (weather === 'sunny' && temperature > 25 && temperature < 35) {
  console.log("It's a great day for the beach!");
} else if (temperature > 35) {
  console.log('play pool');
} else {
  console.log("Let's stay indoors and read a book.");
}
