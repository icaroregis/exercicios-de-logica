import readline from 'readline-sync';

function calcularMedia(nota1, nota2, nota3, nota4) {
  const media = (nota1 + nota2 + nota3 + nota4) / 4;

  if (media >= 6) {
    return `Sua média é: ${media.toFixed(2)}. Parabéns! Você foi aprovado.`;
  } else {
    return `Você foi reprovado. ${media.toFixed(2)} é menor que 6.`;
  }
}

const primeiraNota = parseFloat(readline.question('Digite a primeira nota: '));
const segundaNota = parseFloat(readline.question('Digite a segunda nota: '));
const terceiraNota = parseFloat(readline.question('Digite a terceira nota: '));
const quartaNota = parseFloat(readline.question('Digite a quarta nota: '));
console.log(calcularMedia(primeiraNota, segundaNota, terceiraNota, quartaNota));
