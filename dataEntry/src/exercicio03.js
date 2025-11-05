import readline from 'readline-sync';

function calculateImc(weight, height) {
  const imc = weight / (height * height);
  return `Seu IMC é: ${imc.toFixed(2)}`;
}

const weight = parseFloat(readline.question('Digite seu peso em kg: '));
const height = parseFloat(readline.question('Digite sua altura em metros: '));

console.log(calculateImc(weight, height));
