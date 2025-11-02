let orbitDistance = 1;

while (orbitDistance <= 5) {
  if (orbitDistance === 3) {
    orbitDistance++;
    continue;
  }
  console.log('Orbiting at distance:', orbitDistance);
  if (orbitDistance > 5) break;
  orbitDistance++;
}
