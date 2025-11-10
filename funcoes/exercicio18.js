function checkOxygenLevel(oxygenLevel) {
  if (oxygenLevel < 90) {
    throw new Error('Warning: Low oxygen level!');
  }
  console.log('Oxygen level is adequate for the mission.');
}

try {
  checkOxygenLevel(89);
} catch (warn) {
  console.log(warn.message);
}
