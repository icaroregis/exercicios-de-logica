import readline from 'readline-sync';

function verificarVogal(vogal) {
  let vogaisValidas = ['a', 'e', 'i', 'o', 'u'];
  if (vogaisValidas.includes(vogal)) {
    return `${vogal} é uma vogal válida.`;
  } else {
    return `${vogal} não é uma vogal válida.`;
  }
}

const vogal = readline.question('Digite uma vogal: ').toLowerCase().trim();
console.log(verificarVogal(vogal));
