let abortMission = false;

for (let planet = 1; planet <= 8; planet++) {
  for (let orbit = 1; orbit <= 3; orbit++) {
    if (orbit === 2) {
      continue;
    }
    if (planet === 4 && orbit === 3) {
      console.log('Dangerous asteroid belt found! Abort mission on planet', planet);
      abortMission = true;
      break;
    }
    console.log('Exploring orbit', orbit, 'around planet', planet);
  }

  if (abortMission) {
    break;
  }
}
