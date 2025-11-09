function logAstronomicalEvents(...events) {
  // * Aqui events é um array que contém todos os argumentos passados para a função
  for (let event of events) {
    console.log(`A cosmic event is happening: ${event}!`);
  }
}

logAstronomicalEvents('Meteor Shower', 'Solar Eclipse', 'Supermoon');
