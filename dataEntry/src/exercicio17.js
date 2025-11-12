import readline from 'readline-sync';

function showMessageLocation() {
  const locations = [];
  for (let location = 0; location < 6; location++) {
    const state = readline.question(`Digite o ${location + 1} estado: `);
    const city = readline.question(`Digite a ${location + 1} cidade: `);
    locations.push({ state, city });
  }
  locations.forEach((location) => {
    console.log(`A cidade ${location.city} fica no estado ${location.state}`);
  });
}

showMessageLocation();
