import readline from 'readline-sync';

function showPeoplesLocation() {
  let peoples = [];
  let count = 0;
  while (peoples.length < 6) {
    let state = readline.question(`Digite o estado da ${count + 1} pessoa? `);
    let city = readline.question(`Digite a cidade da ${count + 1} pessoa? `);
    peoples.push({ state, city });
    count++;
  }

  console.log(`\nResumo das Localizações\n`);
  peoples.map((location) => {
    console.log(`Cidade: ${location.city}\nEstado: ${location.state}\n`);
  });
}

showPeoplesLocation();
