// Objetivo: Crie um algoritmo para ajudar uma empresa a calcular o décimo quarto salário dos funcionários.

// O programa deve solicitar:

// o lucro obtido em cada um dos 12 meses do ano;
// a quantidade de funcionários;
// o salário de cada funcionário; aqui não precisa pois não se faz nada com o salário
// e a meta de lucro anual da empresa.

// Ao final, o algoritmo deve verificar se a meta foi atingida e, caso positivo, calcular o valor do décimo quarto salário para cada funcionário.

// Caso contrário, informar que a meta não foi alcançada e o benefício não será pago.

import readline from 'readline-sync';

const months = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
];

function calculateFourteenthSalary() {
  let profitDatabase = [];
  for (let profit = 0; profit < 12; profit++) {
    const profitEarned = parseFloat(readline.question(`Qual o lucro obtido do mês de ${months[profit]}? `));
    profitDatabase.push(profitEarned);
  }
  const numberOfEmployees = parseFloat(readline.question('Qual a quantidade de funcionários? '));
  const profitTarget = parseFloat(readline.question('Qual a meta anual da empresa? '));
  const totalAnnualProfit = profitDatabase.reduce((acc, value) => acc + value, 0);
  const fourteenthSalary = (totalAnnualProfit - profitTarget) / numberOfEmployees;
  if (totalAnnualProfit > profitTarget) {
    console.log(`O décimo quarto salário para cada funcionário será: ${fourteenthSalary.toFixed(2)}`);
    return;
  }
  console.log(
    `A meta não foi alcançada e o benefício não será pago.\nMeta Anual: ${profitTarget}\nLucro ano: ${totalAnnualProfit}`,
  );
}
calculateFourteenthSalary();
