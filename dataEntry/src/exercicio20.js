import readline from 'readline-sync';

function grantABenefit(numberOfPeoples) {
  const peopleList = [];
  for (let people = 0; people < numberOfPeoples; people++) {
    const monthlyIncome = parseFloat(readline.question(`Qual a renda mensal da ${people + 1} pessoa: `));
    peopleList.push(monthlyIncome);
  }
  const result = peopleList.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / numberOfPeoples;

  if (result >= 1500) {
    console.log(
      `A renda per capita da sua família é: R$ ${result.toFixed(
        2,
      )}\nInfelizmente você não está opto(a) para receber o benefício!`,
    );
  } else {
    console.log(
      `A renda per capita da sua família é: R$ ${result.toFixed(2)}\nParabéns o benefício pode ser concedido!`,
    );
  }
}
const numberOfPeoples = Number(readline.question('Quantas pessoas no total residem em sua casa? '));
grantABenefit(numberOfPeoples);
