function checkOxygenLevel(level) {
  if (level < 90) {
    throw new Error('Danger! Oxygen level is too low!');
  }
  console.log('Oxygen level is stable.');
}

try {
  checkOxygenLevel(85);
} catch (err) {
  console.log(err.message);
}
