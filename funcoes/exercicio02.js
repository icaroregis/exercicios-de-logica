// preciso aplicar no banco todos os dias a quantidade 1 real de terça a domingo de forma crescente.

// segunda 1 real
// terça 2 reais
// quarta 3 reais

// porém se chegar na segunda feira ao invés de investir 1 real será 2

// segunda 2 reais
// terça 3 reais
// quarta 4 reais

// Tenho que fazer um função que receba o argumento que represente o números de dias se passar de 7 dias aplicar 2 ao nives de um dólar e depois somar os elementos do array pra saber o total investido dependendo da quantidade de dias passados como argumento.

// Resto da divisão em programação(%)
// Maçãs: 🍎🍎
// Grupos de 7: (precisa de 7 para fazer um grupo)

// Você consegue fazer 0 grupos
// Sobram 2 maçãs

let numberOfDays = 365;

function totalMoney(numberOfDays) {
  let numberOfDaysOfTheWeek = 7;
  let acumulador = [];

  for (let day = 0; day < numberOfDays; day++) {
    const week = Math.floor(day / numberOfDaysOfTheWeek);
    const dayOfWeek = day % numberOfDaysOfTheWeek;
    const valorInicial = week + 1;
    const investimentoDoDia = valorInicial + dayOfWeek;

    acumulador.push(investimentoDoDia);
  }

  const total = acumulador.reduce((a, b) => a + b, 0);
  return total;
}

console.log(totalMoney(numberOfDays));
