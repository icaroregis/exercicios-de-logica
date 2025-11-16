// Agora, Viajante Espacial, é hora de assumir o controle total! Crie um sistema Map para gerenciar o estoque de frutas de um supermercado. Adicione pares de chave-valor para o estoque, atualize as quantidades após a compra de um cliente e recupere o estoque atualizado de um item.
let fruitInventory = new Map();

fruitInventory.set('oranges', 150);
fruitInventory.set('lemons', 80);
fruitInventory.set('oranges', fruitInventory.get('oranges') - 20);
console.log(fruitInventory.get('oranges'));
