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
