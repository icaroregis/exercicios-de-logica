let starsDiscovered = ['Proxima Centauri', 'Sirius', 'Alpha Centauri'];

try {
  console.log('The name of the fourth star in uppercase: ' + starsDiscovered[3].toUpperCase());
} catch (error) {
  console.log('Oops! There was an error: ' + error.message);
}
