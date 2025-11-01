// TODO: Create an array to represent the fuel levels of each spaceship (as percentages)

// TODO: Write a 'for' loop to go through each fuel level
// TODO: Inside the loop, use an 'if' statement to check if the fuel level is below 50%
// If it is, log a message to the console to warn that the fuel levels are too low for takeoff

// TODO: Now, write a while-loop to do the same as using the for-loop

const fuelLevel = [100, 45, 75, 5, 90, 55];

for (let i = 0; i < fuelLevel.length; i++) {
  if (fuelLevel[i] < 50) {
    console.log('fuel level below the permitted level');
  } else {
    console.log('fuel level within normal limits');
  }
}

let accumulator = 0;
while (accumulator < fuelLevel.length) {
  if (fuelLevel[accumulator] < 50) {
    console.log('fuel level below the permitted level');
  } else {
    console.log('fuel level within normal limits');
  }
  accumulator++;
}
