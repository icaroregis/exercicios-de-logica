// Agora, imagine um cenário diferente em que você tem dois conjuntos de strings e sua tarefa é encontrar todas as palavras do primeiro conjunto que possuem um anagrama no segundo conjunto.

// Como identificar um anagrama?
// Duas palavras são anagramas se, ao ordenar as letras de ambas, o resultado for igual.

// Exemplo:

// "amor" → ['a', 'm', 'o', 'r'] → ordenado: ['a', 'm', 'o', 'r']
// "roma" → ['r', 'o', 'm', 'a'] → ordenado: ['a', 'm', 'o', 'r']

const array1 = ['amor', 'roma', 'carro', 'pato', 'topa', 'casa'];
const array2 = ['mora', 'porta', 'saco', 'rato', 'pato', 'arco'];

function sortCharacters(input) {
  return [...input].sort().join('');
}

let sortedWordsInArray2 = new Set();
array2.forEach((word) => sortedWordsInArray2.add(sortCharacters(word))); // Set(6) { 'amor', 'aoprt', 'acos', 'aort', 'aopt', 'acor' }

// Encontra as palavras de array1 que têm anagramas em array2
let result = [];
for (let word of array1) {
  let sortedWord = sortCharacters(word);
  // Iterações:
  // word = 'amor'  => sortedWord = 'amor'
  // word = 'roma'  => sortedWord = 'amor'
  // word = 'carro' => sortedWord = 'acorr'
  // word = 'pato'  => sortedWord = 'aopt'
  // word = 'topa'  => sortedWord = 'aopt'
  // word = 'casa'  => sortedWord = 'aacs'
  if (sortedWordsInArray2.has(sortedWord)) {
    result.push(word);
  }
}

console.log('Palavras do array1 que possuem anagramas em array2:', result);
