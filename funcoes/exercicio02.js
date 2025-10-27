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

// exemplos
// A lógica é universal:
// Quando o dividendo é MENOR que o divisor:
// 2 % 7 = 2  // 7 não cabe em 2, sobra 2
// 3 % 7 = 3  // 7 não cabe em 3, sobra 3
// 5 % 7 = 5  // 7 não cabe em 5, sobra 5
// 8 % 7 = 1  // 7 cabe 1 vez em 8, sobra 1
// 15 % 7 = 1 // 7 cabe 2 vezes em 15, sobra 1
// 100 % 7 = 2 // 7 cabe 14 vezes em 100, sobra 2
// 7 % 7 = 0  // 7 cabe exatamente 1 vez, não sobra nada
// 14 % 7 = 0 // 7 cabe exatamente 2 vezes, não sobra nada

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
