// Escute, Pioneiro Galáctico! Temos uma grande missão pela frente. Imagine que você é um astronauta especialista em palavras que precisa catalogar palavras em línguas alienígenas. Criaríamos uma ferramenta um Mapeador de Palavras Map! Ele mapeia palavras únicas em qualquer frase à sua frequência de aparição. Assim como você documentaria que "blorp" aparece 3 vezes para saber que é uma palavra comum. Aqui está uma descrição simples: Crie uma função que receba uma frase como entrada (uma sequência de palavras em inglês separadas por espaços, podendo estar vazia) e retorne um Mapeador de Palavras Map. Cada chave representa uma palavra única (sem distinção entre maiúsculas e minúsculas) e seu valor indica quantas vezes ela aparece. Impressionante, não é?

function createWordIndex(sentence) {
  let normalizedText = sentence.toLowerCase().replace(/[^\w\s]/g, '');
  let words = normalizedText.split(/\s+/);
  let index = new Map();
  if (sentence === '') {
    return new Map();
  }
  for (const word of words) {
    const countWord = (index.get(word) || 0) + 1;
    index.set(word, countWord);
  }
  return index;
}

let sentence1 = 'Hello Hello world world world';
let index1 = createWordIndex(sentence1);
console.log(index1); //Should print: { hello: 2, world: 3 }

let sentence2 = '';
let index2 = createWordIndex(sentence2);
console.log(index2); //Should print {} as the sentence is empty.

let sentence3 = 'Quick Quick brown fox jumps over the lazy dog';
let index3 = createWordIndex(sentence3);
console.log(index3); //Should print: { quick: 2, brown: 1, fox: 1, jumps: 1, over: 1, the: 1, lazy: 1, dog: 1 }
