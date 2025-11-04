let fuelLevel = 100;

try {
  if (fuelLevel < 20) {
    throw new Error('Fuel level is too low!');
  }
  console.log('You can start your journey.');
} catch (error) {
  console.log('Error: ' + error.message);
} finally {
  console.log('Fuel check complete.');
}
