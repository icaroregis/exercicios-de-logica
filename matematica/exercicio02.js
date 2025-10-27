// Vamos agora ajustar o sistema de pagamento da nossa Loja de Doces. Altere o código existente para avaliar se o dinheiro total que você tem é suficiente para comprar pelo menos três doces em vez de apenas um. Atualize a operação de comparação para refletir essa nova condição.

const totalMoney = 10;
const candyPrice = 2;
const canBuyCandy = Math.floor(totalMoney / candyPrice) >= 3;

console.log('Can we buy a candy?', canBuyCandy);
