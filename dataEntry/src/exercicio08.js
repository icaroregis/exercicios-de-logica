import readline from 'readline-sync';

function ehParOuImpar(numero) {
  if (numero % 2 === 0) {
    return `${numero} é um número par.`;
  } else {
    return `${numero} é um número ímpar.`;
  }
}

console.log('Entre com um número inteiro');
const numero = parseInt(readline.question('Número: '));
console.log(ehParOuImpar(numero));
