import readline from 'readline-sync';

const lanches = [
  { codigo: 100, nome: 'Cachorro Quente', preco: 4.0 },
  { codigo: 101, nome: 'Bauru simples', preco: 4.5 },
  { codigo: 102, nome: 'Bauru com ovo', preco: 5.0 },
  { codigo: 103, nome: 'Hambúrguer', preco: 5.0 },
  { codigo: 104, nome: 'Cheeseburguer', preco: 5.5 },
  { codigo: 105, nome: 'Refrigerante', preco: 3.0 },
];

function exibirCardapio(codigo, quantidade) {
  const filtrarLanche = lanches.filter((lanche) => codigo === lanche.codigo);
  const precoFinal = filtrarLanche[0].preco * quantidade;
  return `O preço final do seu pedido de ${quantidade} ${filtrarLanche[0].nome}(s) é R$ ${precoFinal.toFixed(2)}.`;
}

console.log('Cardápio:');
lanches.forEach((lanche) => {
  console.log(`Código: ${lanche.codigo} | Lanche: ${lanche.nome} | Preço: R$ ${lanche.preco.toFixed(2)}`);
});
const codigo = parseInt(readline.question('Digite o código do lanche desejado: '));
const quantidade = parseInt(readline.question('Digite a quantidade desejada: '));

console.log(exibirCardapio(codigo, quantidade));
