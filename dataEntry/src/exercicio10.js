import readlineSync from 'readline-sync';

function calcularDesconto(produtoSazonal, estoque, valorProduto) {
  if ((produtoSazonal && estoque) || valorProduto >= 80) {
    return console.log('Produto com desconto aplicado!');
  }

  return console.log('Produto sem desconto.');
}

let produtoSazonal = readlineSync.question('É um produto sazonal? (sim/não): ');
let estoque = readlineSync.question('O produto está em estoque? (sim/não): ');
let valorProduto = parseFloat(readlineSync.question('Digite o valor do produto: '));

calcularDesconto(produtoSazonal === 'sim', estoque === 'sim', valorProduto);
