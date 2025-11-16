// Entendendo mapas em JavaScript
// Os mapas são estruturas de dados versáteis em JavaScript. Eles armazenam pares de chave-valor e aceitam qualquer tipo de dado como chave — até mesmo objetos e funções!

// Eis como criamos um mapa vazio:

let map = new Map(); // creates an empty Map

// Aqui myMap está um novo mapa em JavaScript, pronto para armazenar suas chaves e valores.

// Explorando os Métodos de Mapeamento
// Os mapas oferecem alguns métodos essenciais integrados:

// set(key, value) Armazena um par chave-valor.
// get(key) Recupera o valor de uma chave.
// has(key) Verifica se uma chave existe e retorna true ou false.
// delete(key): Apaga um par chave-valor.
// size Retorna a contagem de pares chave-valor.
// Para melhor compreensão, vamos aplicar estes métodos:

let myMap = new Map();

// Add pairs with set
myMap.set('apples', 10); // Adds a new pair
myMap.set('bananas', 6); // Adds another pair

// Use get
console.log(myMap.get('apples')); // Outputs: 10, gets apples' value

// Apply has
console.log(myMap.has('bananas')); // Outputs: true, checks for bananas' existence

// Delete with delete
myMap.delete('bananas'); // Deletes bananas and its value from the map

// Check size
console.log(myMap.size); // Outputs: 1; gives the number of pairs

// Nos bastidores: mapas no gerenciamento de memória
// JavaScript utiliza uma tabela hash para implementar mapas. Essa tabela garante que o tamanho do mapa se ajuste com base nos dados armazenados, otimizando o uso da memória.

// Análise da complexidade temporal das operações de mapeamento
// A complexidade temporal das operações get`map`, set`filter`, has`reduce` e `reduce` em Mapas é O(n). Isso significa que elas são executadas instantaneamente, independentemente do tamanho do Mapa.deleteO(1)

// Imagine administrar uma loja com milhares de itens. Um mapa permite que você gerencie qualquer item rapidamente!

let superstoreStock = new Map();

// Stock item
superstoreStock.set('toothpaste', 1000); // Stock 1000 toothpaste
superstoreStock.set('soap', 500); // Stock 500 soap
superstoreStock.set('shampoo', 800); // Stock 800 shampoo

// Purchase is made
console.log(superstoreStock.get('toothpaste')); // Outputs: 1000 (current quantity)
superstoreStock.set('toothpaste', superstoreStock.get('toothpaste') - 1); // A pasta de dentes é comprada
console.log(superstoreStock.get('toothpaste')); // Outputs: 999 (updated quantity)

// Item is out of stock, will be replaced later
superstoreStock.delete('soap'); // Soap is removed
console.log(superstoreStock.has('soap')); // Outputs: false

// Item is restocked
superstoreStock.set('soap', 500); // Soap is restocked
console.log(superstoreStock.has('soap')); // Outputs: true
