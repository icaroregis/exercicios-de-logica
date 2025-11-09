function collectStars(explorer, ...starNames) {
  console.log(`You have discovered ${starNames.length} stars!`);
  for (let name = 0; name < starNames.length; name++) {
    console.log(`Star discovered by ${explorer}: ${starNames[name]}`);
  }
}

collectStars('Cosmo', 'Proxima Centauri', 'Sirius', 'Alpha Centauri A');
