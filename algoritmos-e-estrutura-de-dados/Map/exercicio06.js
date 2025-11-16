// Escuta aqui, Viajante Espacial! Temos um objeto que armazena cada produto único vendido em uma loja e sua quantidade. Cada chave de produto é uma string única e sua quantidade é representada por um valor inteiro. Agora, sua missão é calcular a quantidade total de todos os produtos em estoque nesta loja e retornar o resultado como um número inteiro.

// Sei que você consegue e que sabe navegar pelo cosmos do código. Lembre-se, o objeto que você receberá como entrada não conterá casos incomuns; será um universo comum, com apenas produtos e suas quantidades. Coloque seu capacete espacial, voe alto e divirta-se!

function getTotalQuantity(inventory) {
  let total = 0;
  for (let value of inventory.values()) {
    total = total + value;
  }
  return total;
}

let inventory = new Map();
inventory.set('Apples', 50);
inventory.set('Bananas', 100);
inventory.set('Oranges', 75);

console.log(getTotalQuantity(inventory)); // It will log 225
