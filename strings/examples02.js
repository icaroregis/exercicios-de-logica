// * A indexOf() função marca a primeira ocorrência de uma palavra fornecida dentro de uma string fornecida. Lembre-se, como em um quebra-cabeça, as posições da string começam em 0. É a função de busca dentro do nosso universo de strings. Quando não há ocorrência da palavra fornecida, indexOf retorna -1.

let spaceMessage = 'Hello, Planet Earth!';
console.log(spaceMessage.indexOf('Planet')); // Output: 7
console.log(spaceMessage.indexOf('Planet Mars')); // Output: -1

// * O código acima procura a palavra "Planet" dentro da spaceMessage string e retorna sua primeira posição — a sétima posição. Quando procuramos por "Planet Mars", que não existe, ele retorna -1.

// ? Para encontrar a última ocorrência de uma palavra, temos lastIndexOf(). A busca começa no final da string, o que é prático quando uma palavra aparece mais de uma vez. Quando não há nenhuma ocorrência da palavra fornecida, o método retorna -1, similarmente a indexOf.

spaceMessage = "Hello, Planet Earth! Planet, you're awesome!";
console.log(spaceMessage.lastIndexOf('Planet')); // Output: 21
console.log(spaceMessage.lastIndexOf('Planet Mars')); // Output: -1

// ? Neste exemplo, "Planet"aparece duas vezes na spaceMessage string, mas lastIndexOf() indica a posição da última ocorrência — 21. "Planet Mars" não ocorre em spaceMessage nenhum momento, então o resultado é -1.

// ! Nossa próxima estrela guia, includes(), verifica a existência de uma palavra em uma string. Ela retorna true se a palavra está presente na string e false caso contrário, retorna.

spaceMessage = 'Hello, Planet Earth!';
console.log(spaceMessage.includes('Planet')); // Output: true
console.log(spaceMessage.includes('Planet Mars')); // Output: false

// ! A saída true confirma que "Planet" de fato existe em spaceMessage. A saída false confirma "Planet Mars" que não existe em spaceMessage.

// Em seguida, utilizaremos replace() o método `. Este método altera parte de uma string, de forma semelhante à mudança de nomes de personagens em livros de histórias. O primeiro parâmetro é o valor existente e o segundo é a sua substituição. Observe que o método ` replace()replace` substitui apenas as primeiras ocorrências do valor existente.

spaceMessage = 'Hello, Planet Earth! Planet Earth is a wonderful place to live.';
console.log(spaceMessage.replace('Earth', 'Mars')); // Output: "Hello, Planet Mars! Planet Earth is a wonderful place to live."

// Observe que substituímos apenas a primeira ocorrência de ` "Earth"in` spaceMessage. Para substituir todas as ocorrências, devemos usar o replaceAll método:

spaceMessage = 'Hello, Planet Earth! Planet Earth is a wonderful place to live.';
console.log(spaceMessage.replaceAll('Earth', 'Mars')); // Output: "Hello, Planet Mars! Planet Mars is a wonderful place to live."
