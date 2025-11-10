function oxygenLevel(level = 90) {
  if (level < 90) {
    throw new Error('The oxygen level is too low!');
  }
  console.log('Oxygen level is within the permissible limit.');
}

try {
  oxygenLevel();
} catch (err) {
  console.log(err.message);
}
