function logStarsInfo(...starNames) {
  const restStars = starNames;
  for (let star = 0; star < starNames.length; star++) {
    console.log(`Star ${star + 1}: ${restStars[star]} is part of our galaxy.`);
  }
}

logStarsInfo('Sun', 'Alpha Centauri', 'Sirius');
