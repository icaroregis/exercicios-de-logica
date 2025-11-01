// Loop 1: Counting stars, but stop at the shooting star.
for (let star = 1; star <= 10; star++) {
  if (star === 5) {
    console.log('Shooting star at position:', star);
    break; // Shooting star found, stop the loop.
  }
  console.log('Exploring star:', star);
}

console.log();

// Loop 2: Visiting planets, but skip the 5th one.
for (let planet = 1; planet <= 10; planet++) {
  if (planet === 5) {
    continue; // Skip this planet.
  }
  console.log('Visiting planet at position:', planet);
}
