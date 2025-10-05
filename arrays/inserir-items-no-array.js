// Complete a função adicionarBanana() de forma que ela adicione a string "Banana" à matriz de itens e retorne a nova matriz. Observe os exemplos de uso para visualizar o parâmetro e o resultado esperado.

function adicionarBanana(itens) {
  itens.push('Banana');
  return itens;
}

console.log(adicionarBanana(['Maçã', 'Laranja', 'Mamão']));
