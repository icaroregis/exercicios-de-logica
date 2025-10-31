Um mapa em JavaScript é um guia para os tesouros de pares chave-valor únicos. Ao contrário dos objetos JavaScript, que geralmente usam strings como chaves, um mapa Mappermite qualquer tipo de chave, traçando assim um caminho único para cada tesouro.

Aqui está um exemplo de como criar e preencher um mapa:

```js
const spacecrafts = new Map(); // Build a new Map
spacecrafts.set(1234, 'Numerical Planet'); // Using numerical key
spacecrafts.set(true, 'Boolean Planet'); // Using boolean key
spacecrafts.set('Star Destroyer', 'Death Star'); // Using common string key

console.log(spacecrafts);

console.log(spacecrafts.get(1234)); // Output: Numerical Planet
console.log(spacecrafts.has('Star Destroyer')); // Output: true
spacecrafts.delete('Star Destroyer'); // Remove 'Star Destroyer' from our Map
console.log(spacecrafts.has('Star Destroyer')); // Output: false
/*
Prints:
Map(3) {1234: "Numerical Planet", true: "Boolean Planet", "Star Destroyer": "Death Star"}
*/
```

O get método retorna um valor undefined para chaves ausentes. No entanto, você pode usar um operador condicional para fornecer um valor padrão nessas situações:

```js
let spacecraft = 'Voyager';
// If 'Voyager' exists on our Map, get its destination. Otherwise, print 'Unknown destination'
console.log(spacecrafts.has(spacecraft) ? spacecrafts.get(spacecraft) : 'Unknown destination'); // Output: Unknown destination
```

Vamos começar com os Conjuntos (Sets ). Em JavaScript, um Conjunto é um tipo único de objeto que armazena vários tipos de dados, sejam eles primitivos ou objetos. Um Conjunto não contém duplicatas. Pense em um Conjunto como uma bolsa cósmica que contém corpos celestes (elementos), garantindo que cada um permaneça único.

Aqui está um exemplo de como criar e usar um Conjunto em JavaScript:

```js
const cosmicBodies = new Set(); // Cria um novo Conjunto
cosmicBodies.add('Planet'); // Adiciona um corpo celeste
cosmicBodies.add('Star'); // Adiciona outro corpo celeste
cosmicBodies.add('Planet'); // Tenta adicionar um corpo celeste duplicado
cosmicBodies.add('Comet'); // Adiciona mais um corpo celeste
cosmicBodies.delete('Star'); // Remove um corpo celeste
cosmicBodies.has('Comet'); // Verifica se um corpo celeste está presente
console.log(cosmicBodies.size); // Exibe o número de corpos celestes únicos
console.log(cosmicBodies); // Exibe o Conjunto completo
/*
Prints:
Set(2) {"Planet", "Comet"}
*/
```

```js
let array = [1, 2, 2, 3, 3, 4];
let set = new Set([1, 2, 2, 3, 3, 4]);

console.log(array); // [1, 2, 2, 3, 3, 4]
console.log(set); // Set(4) {1, 2, 3, 4}
```
