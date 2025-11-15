// Entendendo o que são conjuntos
// Em JavaScript, os conjuntos são como coleções de gemas únicas. Considere um banco de dados de usuários com `users` Alice, Bob`usernames` e ` David usernames`. Veja como implementaríamos isso:

let users = new Set(); // Create a Set
users.add('Alice'); // Add Alice
users.add('Bob'); // Add Bob
users.add('David'); // Add David
users.add('Alice'); // Attempt to add Alice again

console.log(users); // Set(3) { 'Bob', 'Alice', 'David' } => retorna um objeto
console.log(users.size); // 3

// "Alice" é adicionada apenas uma vez. Os conjuntos garantem que cada pérola seja única, tornando eficiente verificar rapidamente se um usuário já existe. Podemos examinar o tamanho do conjunto usando .size o método. Observe que o conjunto não está ordenado e não podemos garantir que os elementos serão exibidos na ordem em que foram adicionados.

// Análise detalhada da implementação de conjuntos
// Os conjuntos funcionam de forma semelhante aos objetos JavaScript, mas são projetados para serem únicos. Eles usam hashing , uma maneira de converter um elemento em um código único, o que facilita o armazenamento e a recuperação rápidos. Ao verificar se um item está em um conjunto, o JavaScript calcula seu código hash para localizá-lo, como um mapa que leva a um tesouro.

// Exemplo prático: verificação rápida de existência usando Set (hashing por baixo dos panos)
const emails = new Set();
emails.add('alice@email.com');
emails.add('bob@email.com');
emails.add('carol@email.com');

// Verificando se um email já está cadastrado (rápido graças ao hashing)
if (emails.has('bob@email.com')) {
  console.log('Email já cadastrado!');
} else {
  console.log('Novo email, pode cadastrar.');
}

// Adicionando um email duplicado não altera o conjunto
emails.add('alice@email.com');
console.log(emails); // Set(3) { 'alice@email.com', 'bob@email.com', 'carol@email.com' }

// Análise de Complexidade de Conjuntos
// A eficiência é um pilar fundamental na programação, e os conjuntos (Sets) se destacam nesse quesito. Eles proporcionam operações de tempo constante, o que significa que o tempo necessário para adicionar, excluir ou verificar um item em um conjunto permanece o mesmo, independentemente do tamanho do conjunto.

// Exemplo prático: tempo constante para adicionar, remover e verificar itens em um Set

const numeros = new Set();

// Adicionando 1 milhão de números ao Set
for (let i = 0; i < 1_000_000; i++) {
  numeros.add(i);
}

// Verificando se um número está presente (operação rápida, independente do tamanho)
console.log(numeros.has(999_999)); // true

// Removendo um número (também rápido)
numeros.delete(123456);

// Adicionando um novo número (também rápido)
numeros.add(1_000_001);

// Todas essas operações (add, has, delete) são feitas em tempo constante O(1), mesmo com milhões de itens!

// Benefícios práticos do uso de conjuntos
// Os conjuntos têm inúmeras aplicações práticas no gerenciamento de bancos de dados, análise de dados e muito mais. Por exemplo, considere o rastreamento de visitantes únicos de um site:

let visitors = new Set(); // Create a Set

visitors.add('user123'); // A visitor
visitors.add('user345'); // Another visitor

// Check if a user has visited before
if (visitors.has('user123')) {
  console.log('This user has visited before!'); // "This user has visited before!"
}

// Com o Sets, verificar visitas anteriores torna-se notavelmente eficiente.
