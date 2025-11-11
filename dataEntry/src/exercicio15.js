import readline from 'readline-sync';

function generateTokens(numberOfTokens) {
  let tokens = [];
  for (let i = 0; i < numberOfTokens; i++) {
    const name = readline.question(`Digite o nome da ${i + 1}ª pessoa: `);
    const height = parseFloat(readline.question(`Digite a altura da ${i + 1}ª pessoa (em metros): `));
    const weight = parseInt(readline.question(`Digite o peso da ${i + 1}ª pessoa (em kg): `), 10);
    tokens.push({ name, height, weight });
  }
  tokens.map((person, index) => {
    const imc = person.weight / (person.height * person.height);
    console.log(
      `\nFicha da ${index + 1}ª pessoa:\nNome: ${person.name}\nAltura: ${person.height.toFixed(2)} m\nPeso: ${
        person.weight
      } kg\nIMC: ${imc.toFixed(2)}\n`,
    );
  });
}
const tokens = parseInt(readline.question('Digite o número de fichas a serem gerados: '));
generateTokens(tokens);
