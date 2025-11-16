// Ótimo progresso, Viajante Espacial! Agora, você consegue gerenciar o estoque do supermercado?

// Sua tarefa é:

// Adicione um item com sua respectiva quantidade ao inventário.
// Verificar a quantidade de um item existente.
// Imprima a contagem total de itens distintos no inventário.
// Remover um item do inventário.
// Imprima novamente a contagem total de itens distintos no inventário.
// Pode implementar tudo o que estiver faltando!

let inventory = new Map();

// Inicializa o inventário
inventory.set('milk', 50); // Adiciona 'milk' com quantidade 50
inventory.set('bread', 100); // Adiciona 'bread' com quantidade 100
console.log(inventory.get('milk')); // Imprime a quantidade de 'milk'
console.log(inventory.size); // Imprime o número de itens distintos
inventory.delete('bread'); // Remove 'bread' do inventário
console.log(inventory.size); // Imprime o número de itens distintos após a remoção
