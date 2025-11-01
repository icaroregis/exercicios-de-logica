// List of spaceship fuel levels in percentages
const spaceshipFuelLevels = [90, 85, 75, 50, 45, 20];

// A 'for' loop to iterate over the entire array
for (let i = 0; i < spaceshipFuelLevels.length; i++) {
  if (spaceshipFuelLevels[i] > 25) {
    console.log(`Spaceship #<${i + 1}>: Fuel level sufficient for launch.`);
  } else {
    console.log(`Spaceship #<${i + 1}>: Fuel level insufficient for launch.`);
  }
}
