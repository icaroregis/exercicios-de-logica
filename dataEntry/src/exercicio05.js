import readline from 'readline-sync';

const primeiraNota = parseFloat(readline.question('Digite a primeira nota: '));
const segundaNota = parseFloat(readline.question('Digite a segunda nota: '));
const terceiraNota = parseFloat(readline.question('Digite a terceira nota: '));
const quartaNota = parseFloat(readline.question('Digite a quarta nota: '));

function calcularMedia(nota1, nota2, nota3, nota4) {
  const media = (nota1 + nota2 + nota3 + nota4) / 4;

  if (media >= 6) {
    console.log(`Sua média é: ${media.toFixed(2)}`);
    console.log('Parabéns! Você foi aprovado.');
  } else {
    console.log('Você foi reprovado.');
  }
}

console.log(calcularMedia(primeiraNota, segundaNota, terceiraNota, quartaNota));
