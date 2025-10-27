const budget = 10;
const candyPrice = 2;
const lollipopPrice = 1.5;

let candies = Math.floor(budget / candyPrice);
let remainingMoney = budget - candies * candyPrice;

console.log('Candies:', candies, ', Remaining money:', remainingMoney);
