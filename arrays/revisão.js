const planets = ['Mercury', 'Venus', 'Earth', 'Mars'];

// Replace "Venus" with "Cybertron"
planets[1] = 'Cybertron';
console.log(planets); // Prints: ["Mercury", "Cybertron", "Earth", "Mars"]

// No exemplo acima, substituímos "Venus", o segundo item da lista (no índice 1), por "Cybertron". É simples assim!

// E se quisermos modificar um valor em vez de substituí-lo completamente? Podemos recuperar o item, fazer as modificações e colocá-lo de volta na lista.

// Append the string " - the Red Planet" to "Mars"
planets[3] += ' - the Red Planet'; // using the += operator to append to the element
console.log(planets); // Prints: ["Mercury", "Cybertron", "Earth", "Mars - the Red Planet"]

// Para interagir dinamicamente com nossa lista, existem duas funções principais - push(element)e pop().

// push(element)adiciona o elementao final da lista.
// pop()remove o último elemento da lista e o retorna como resultado.
// Vamos mostrar com um exemplo: adicionaremos "Pluto"using .push()e depois removeremos using .pop():

const planetsTwo = ['Mercury', 'Venus', 'Earth', 'Mars'];
// Add 'Pluto' to the list
planetsTwo.push('Pluto');
console.log(planetsTwo); // Prints: ["Mercury", "Venus", "Earth", "Mars", "Pluto"]

// Remove 'Pluto' from the list
const pluto = planetsTwo.pop();
console.log(pluto); // Prints: "Pluto"
console.log(planetsTwo); // Prints: ["Mercury", "Venus", "Earth", "Mars"]

// Define a list of celestial objects in our solar system with some planets and the Sun
const celestialObjects = ['Sun', 'Mercury', 'Venus', 'Earth'];

// Display the number of celestial objects
console.log('We have ' + celestialObjects.length + ' celestial objects in our list.');

// Add a new celestial object 'Moon' that orbits the Earth
celestialObjects.push('Moon');

// Display the updated list of celestial objects
console.log('Our updated list of celestial objects:', celestialObjects);

// Operações de lista em JavaScript
// Listas (ou arrays) em JavaScript vêm com uma variedade de métodos poderosos para manipulação de listas. Aqui está uma lista dos mais usados:

// ! indexOf(element): Retorna o primeiro índice de ocorrência do elemento especificado.

// ! reverse()- Inverte a lista, ou seja, altera a ordem dos seus elementos para que sejam do final.

// ! splice(index, deleteCount, itemsToInsert): Altera o conteúdo de uma matriz removendo deleteCountelementos, começando em index, e adicionando novos itemsToInsertelementos em vez deles.
// ! Este método é bastante avançado. No entanto, ele pode ser usado para inserir o elemento em uma posição específica - veja o exemplo abaixo!

let fruits = ['apple', 'banana', 'cherry'];

// Inserting an element 'avocado' at position 1 using .splice()
fruits.splice(1, 0, 'avocado');
console.log(fruits); // Output: ['apple', 'avocado', 'banana', 'cherry']

// Inserting an element 'orange' at position 4 using .splice()
fruits.splice(4, 0, 'orange');
console.log(fruits); // Output: ['apple', 'avocado', 'banana', 'cherry', 'orange']

// Finding the index of an element using .indexOf()
let index = fruits.indexOf('banana');
console.log(index); // Output: 2

// Reverse the fruits list
fruits.reverse();
console.log(fruits); // Output: ['orange', 'cherry', 'banana', 'avocado', 'apple']
