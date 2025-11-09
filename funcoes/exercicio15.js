function logAstronomicalEvents(...events) {
  const restEvents = events;
  for (let event of restEvents) {
    console.log(`A cosmic event is happening: ${event}!`);
  }
}

logAstronomicalEvents('Meteor Shower', 'Solar Eclipse', 'Supermoon');
