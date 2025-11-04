// ? Fatiando strings com 'substring'
// ? O fatiamento envolve extrair uma substring (uma parte ou segmento da string). O substring(from, to)método em JavaScript facilita essa tarefa - ele retorna a substring construída a partir dos caracteres nas posições from, from + 1, ..., to - 1, ou seja, você começa no caractere na posição from, e termina em to, excluindo-o.

// ? Uma versão desse método substring(from), por sua vez, simplesmente pega a substring do caractere fornecido até o final.

// ? Vejamos como funciona:

let message = 'Hello, World!';
let slice = message.substring(1, 5); // A substring starting at character 1 to 5 (exclusive)
console.log(slice); // Prints: "ello"

// A substring starting at character 2, till the end of the string
console.log(message.substring(2)); // Prints: "llo, World!"

// A substring starting at character 7 to 13 (exclusive)
console.log(message.substring(7, 13)); // Prints: "World!"

// ! O charAt método recupera um caractere de uma posição específica dentro de uma string. Semelhante às listas, a posição (índice) é contada a partir de 0. Veja como usá-lo:

let greeting = 'Hello';
console.log(greeting.charAt(0)); // Prints: H
console.log(greeting.charAt(1)); // Prints: e
console.log(greeting.charAt(4)); // Prints: o

// ! Os métodos `includes` e `indexOf` são ferramentas comumente usadas para explorar strings. `includes` busca um texto específico dentro de uma string, enquanto `indexOf` retorna sua posição ou -1 se o texto fornecido não ocorrer.

let phrase = 'The quick brown fox';
console.log(phrase.includes('fox')); // Prints: true, because "fox" is in phrase
console.log(phrase.indexOf('fox')); // Prints: 16, the starting position of 'fox' in phrase

console.log(phrase.includes('red')); // false
console.log(phrase.indexOf('red')); // -1, because there is no occurrence of "red"

// Exploring Strings with 'includes' and 'indexOf'
// The includes and indexOf methods are commonly used tools for exploring strings. includes searches for a particular text within a string, while indexOf returns its position, or -1 if there is no occurrence of the provided text:

let phrase02 = 'The quick brown fox';
console.log(phrase02.includes('fox')); // Prints: true, because "fox" is in phrase02
console.log(phrase02.indexOf('fox')); // Prints: 16, the starting position of 'fox' in phrase02

console.log(phrase02.includes('red')); // false
console.log(phrase02.indexOf('red')); // -1, because there is no occurrence of "red"
