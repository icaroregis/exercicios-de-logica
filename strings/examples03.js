// Devemos compreender dois termos fundamentais: dividir e unir strings — estes são geralmente os passos iniciais na análise de texto em JavaScript.

// Dividir uma sequência de caracteres fragmenta uma frase longa em partes menores, de forma semelhante a dividir uma frase em palavras. Já unir sequências de caracteres é como entrelaçar palavras em uma frase, combinando várias sequências em uma unidade coesa.

// Primeiro, vamos analisar o split()método. Este método divide uma string em um array de substrings ou "contas". A sintaxe é bem clara:

let separator = '...';
let stringArray = originalString.split(separator);

// O " separator is" é opcional. Se omitido, toda a sequência se transforma em uma única "conta" gigantesca. Vejamos:

let greeting = 'Hello World! What a wonderful day out there!';
let words = greeting.split(' '); // Splitting the phrase by whitespaces
console.log(words);
// Outputs: ['Hello', 'World!', 'What', 'a', 'wonderful', 'day', 'out', 'there!']

// Providing No separator returns a list of a single element
console.log(greeting.split());
// Outputs: ["Hello, World! What a wonderful day out there!"]

// E o que acontece se usarmos uma string vazia como separador? Ela dividirá a frase em caracteres individuais!

let shortGreeting = 'Hello, World!';
let characterArray = shortGreeting.split('');
console.log(characterArray);
// Outputs: ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!']

// Como você deve imaginar, é como desmontar o colar em contas individuais!

// ! O join() método é a antítese de split(). Ele une os elementos de um array em uma única string. A sintaxe é a seguinte:

let newSeparator = '...';
let combinedString = stringArray.join(newSeparator);

// ! Se nenhum valor separator for fornecido, os elementos serão unidos por uma vírgula ( ,). Vamos revisitar nosso words array:

let newWords = ['Hello', 'World!', 'What', 'a', 'wonderful', 'day', 'out', 'there!'];
let originalString = newWords.join(' ');
console.log(originalString);
// Outputs: Hello World! What a wonderful day out there!

console.log(words.join());
// Outputs: Hello,World!,What,a,wonderful,day,out,there!

// ! Separadores alternativos produzem resultados variáveis:
let list = words.join(', ');
console.log(list);
// Outputs: Hello, World!, What, a, wonderful, day, out, there!

// * split() e join() podem colaborar para manipular dados de texto. Por exemplo, que tal inverter a ordem das palavras?

let sentence = 'We are exploring the universe of JavaScript strings.';
let newWordsTwo = sentence.split(' ');
console.log(newWordsTwo);
// Outputs: ["We", "are", "exploring", "the", "universe", "of", "JavaScript", "strings."]

let reversedWords = newWordsTwo.reverse(); // Reverses a list of words
console.log(reversedWords);
// Outputs: ["strings.", "JavaScript", "of", "universe", "the", "exploring", "are", "We"]

let reversedSentence = reversedWords.join(' ');
console.log(reversedSentence);
// Outputs: "strings. JavaScript of universe the exploring are We"
