// Você recebe uma vasta lista de palavras e precisa identificar a última palavra, aquela que se destaca sozinha — a última palavra que não se repete. Imagine vasculhar um banco de dados de identificadores únicos e encontrar um identificador no final da lista que seja diferente de todos os outros.

// Exemplo de array de palavras (com algumas repetidas e uma única no final)
const words = ['apple', 'banana', 'orange', 'apple', 'banana', 'grape', 'kiwi', 'grape', 'melon', 'melon', 'unique'];

let wordsSet = new Set();
let duplicatesSet = new Set();

// ! Um lista sem elementos repetidos(wordSet). Outra lista somente com os elementos que se repetem(duplicateSet) no array words
for (let word of words) {
  if (wordsSet.has(word)) {
    duplicatesSet.add(word);
  } else {
    wordsSet.add(word);
  }
}

// Forma 01
duplicatesSet.forEach((word) => wordsSet.delete(word));
const index = Array.from(wordsSet).length - 1;
const result = Array.from(wordsSet)[index];

// Forma 02
const uniqueWords = Array.from(wordsSet);
const lasUniqueWord = uniqueWords[uniqueWords.length - 1];

// Forma 03
let lastUniqueWord = '';
for (let i = words.length - 1; i >= 0; i--) {
  if (wordsSet.has(words[i])) {
    lastUniqueWord = words[i];
    break;
  }
}

// Mesmo resultado
console.log('🚀 ~ result:', result);
console.log('🚀 ~ lasUniqueWord:', lasUniqueWord);
console.log('🚀 ~ lastUniqueWord:', lastUniqueWord);
