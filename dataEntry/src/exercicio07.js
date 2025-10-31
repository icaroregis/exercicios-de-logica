import readline from 'readline-sync';

function calcularNovoSalario(salarioAtual, percentualAumento) {
  const novoSalario = salarioAtual + (salarioAtual * percentualAumento) / 100;
  return `Salário atual: R$ ${salarioAtual.toFixed(
    2,
  )}. Com um aumento de ${percentualAumento}%, o novo salário será R$ ${novoSalario.toFixed(2)}.`;
}

const salarioAtual = parseFloat(readline.question('Digite o salário atual: '));
const percentualAumento = parseFloat(readline.question('Digite o percentual de aumento: '));

console.log(calcularNovoSalario(salarioAtual, percentualAumento));
