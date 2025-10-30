import readline from 'readline-sync';

const vogal = readline.question('Digite uma vogal: ').toLowerCase().trim();

function verificarVogal(vogal) {
  let vogaisValidas = ['a', 'e', 'i', 'o', 'u'];
  if (vogaisValidas.includes(vogal)) {
    return `${vogal} é uma vogal válida.`;
  } else {
    return `${vogal} não é uma vogal válida.`;
  }
}

console.log(verificarVogal(vogal));
