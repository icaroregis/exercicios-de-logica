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
