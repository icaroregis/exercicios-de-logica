import readline from 'readline-sync';

const weight = parseFloat(readline.question('Digite seu peso em kg: '));
const height = parseFloat(readline.question('Digite sua altura em metros: '));

function calculateImc(weight, height) {
  const imc = weight / (height * height);
  return `Seu IMC é: ${imc.toFixed(2)}`;
}

console.log(calculateImc(weight, height));
