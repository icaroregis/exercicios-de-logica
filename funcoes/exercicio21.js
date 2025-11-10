function checkOxygenLevel(oxygenLevel) {
  if (oxygenLevel < 19.5 || oxygenLevel > 23.5) {
    throw new Error('Danger! Oxygen level out of safe range!');
  }
}

try {
  checkOxygenLevel(24);
} catch (err) {
  console.log(err.message);
}
