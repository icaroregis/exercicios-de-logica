// Muito bem, Explorador Espacial, vamos adicionar mais uma conquista ao seu currículo de programação! Imagine dois arquivos de registro de espaçonaves, cada um contendo uma matriz de palavras. Sua missão? Encontrar as palavras do segundo arquivo de registro que possuem um anagrama no primeiro arquivo. Em seguida, some o comprimento dessas palavras correspondentes. Você deve retornar esse comprimento total como um número. Lembre-se, anagramas são palavras que possuem as mesmas letras, mas em ordem inversa. Se uma palavra não tiver um anagrama na outra matriz, descarte-a. Não se preocupe, independentemente de as matrizes conterem uma palavra ou mil, seu código estará pronto! Agora, prepare-se para decifrar alguns números de anagramas cósmicos!

function sortCharacters(input) {
  return [...input].sort().join('');
}

function findAnagrams(array1, array2) {
  const sortWordsInArray1 = new Set();
  array1.forEach((item) => sortWordsInArray1.add(sortCharacters(item)));

  let anagramList = [];
  for (const item of array2) {
    const sortWordsInArray2 = sortCharacters(item);
    if (sortWordsInArray1.has(sortWordsInArray2)) {
      anagramList.push(item);
    }
  }
  let totalStringSize = 0;
  anagramList.forEach((item) => {
    totalStringSize = totalStringSize + item.length;
  });
  return totalStringSize;
}

let array1 = ['cat', 'dog', 'tac', 'god', 'act'];
let array2 = ['tca', 'ogd', 'atc', 'taco'];
let result = findAnagrams(array1, array2);
console.log(result); // output: 9
