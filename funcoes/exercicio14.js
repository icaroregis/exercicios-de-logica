function logStarsInfo(...starNames) {
  // * Aqui starNames é um array que contém todos os argumentos passados para a função
  for (let star = 0; star < starNames.length; star++) {
    console.log(`Star ${star + 1}: ${starNames[star]} is part of our galaxy.`);
  }
}

logStarsInfo('Sun', 'Alpha Centauri', 'Sirius');
