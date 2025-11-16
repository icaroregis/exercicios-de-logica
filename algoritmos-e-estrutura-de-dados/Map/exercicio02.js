// Muito bem, chegou a hora de colocar suas habilidades à prova mais uma vez. O desafio de hoje envolve o gerenciamento de estoque em nosso supermercado. Parece que não vamos mais estocar leite. Sua tarefa é atualizar o código inicial utilizando o método apropriado para eliminar o leite do nosso mapa de estoque.

// Garanta que seu código lide com essa atualização de forma adequada, mantendo nossa lista de estoque precisa e atualizada. Este exercício é uma aplicação prática de gerenciamento de estoques e aprimoramento de código para cenários reais.

// Prepare-se e mãos à obra! Lembre-se de testar seu código minuciosamente para garantir que ele funcione como esperado. Boa sorte!

let inventory = new Map();

inventory.set('milk', 1.99);
inventory.set('bread', 2.49);
inventory.set('bread', 1.8);
inventory.delete('milk');

console.log(inventory.has('bread')); // Outputs: true
