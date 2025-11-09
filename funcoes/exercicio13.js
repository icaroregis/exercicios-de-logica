function calculateFuelForStars(...stars) {
  let totalFuel = 0;
  for (let fuel of stars) {
    totalFuel += fuel;
  }
  return totalFuel;
}

console.log(calculateFuelForStars(120, 80, 90, 150)); // Outputs the total fuel required
