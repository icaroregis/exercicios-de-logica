function checkOxygenLevel(level) {
  if (level < 90) {
    throw 'Danger! Oxygen level is too low!';
  }
  console.log('Oxygen level is stable.');
}

try {
  checkOxygenLevel(85);
} catch (error) {
  throw error;
}
