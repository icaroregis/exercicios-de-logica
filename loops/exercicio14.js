// Number of planets to report
const planetFuelLevels = [100, 75, 30, 90, 20];

// 'for' loop to check each planet's fuel station
for (let i = 0; i < planetFuelLevels.length; i++) {
  // 'if-else' statement to check if fuel is sufficient (above 50 is sufficient)
  if (planetFuelLevels[i] > 50) {
    console.log('Planet', i + 1, ': Fuel level is sufficient.');
  } else {
    console.log('Planet', i + 1, ': Fuel level is insufficient.');
  }
}
