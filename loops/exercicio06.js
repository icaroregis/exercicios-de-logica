const orbitalSpeeds = {
  Mercury: 47.87,
  Venus: 35.02,
  Earth: 29.78,
  Mars: 24.077,
};
// For of + Object.keys assim é possível iterar sobre as chaves do objeto
for (let planet of Object.keys(orbitalSpeeds)) {
  console.log(`${planet} orbits the Sun at ${orbitalSpeeds[planet]} kilometers per second.`);
}
