for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log('i =', i, ', j =', j);
  }
}
/*
Prints:
i = 0 , j = 0
i = 0 , j = 1
i = 0 , j = 2
i = 1 , j = 0
i = 1 , j = 1
i = 1 , j = 2
i = 2 , j = 0
i = 2 , j = 1
i = 2 , j = 2
*/

let i = 0;
while (i < 3) {
  let j = 0;
  while (j < 3) {
    console.log('i =', i, ', j =', j);
    j++;
  }
  i++;
}
/*
Prints:
i = 0 , j = 0
i = 0 , j = 1
i = 0 , j = 2
i = 1 , j = 0
i = 1 , j = 1
i = 1 , j = 2
i = 2 , j = 0
i = 2 , j = 1
i = 2 , j = 2
*/

// Vamos analisar alguns exemplos de loops aninhados. Considere a tarefa de iterar sobre uma matriz bidimensional (2D), que é uma matriz de matrizes:

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < matrix.length; i++) {
  // Going through each row.
  let row = '';
  for (let j = 0; j < matrix[i].length; j++) {
    // Going through each element in the row.
    row += matrix[i][j] + ' '; // implicit conversion of matrix[i][j] to string
  }
  console.log(row);
}
/*
Prints:
1 2 3
4 5 6
7 8 9
*/

// Outro for exemplo de laço aninhado cria uma pirâmide numérica:
for (let i = 1; i <= 5; i++) {
  // First loop denotes each level of the pyramid.
  let row = '';
  for (let j = 1; j <= i; j++) {
    // Second loop adds numbers to each level.
    row += j + ' '; // j + ' ' does implicit type conversion to string
  }
  console.log(row); // Prints each level of the pyramid.
}

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// Controle total de um único laço 'for' — A instrução break
// Lembra do for loop? Sua iteração continua até que uma condição seja satisfeita. Vamos conhecer um novo amigo — break. Uma vez encontrado, o loop para, não importa o quê!

// Para entender melhor, vamos pensar em uma caça ao tesouro, onde cada caixa representa uma iteração do loop. Abrir uma caixa executa o loop, e encontrar o tesouro (break) interrompe a sequência de aberturas. Veja como isso funciona em JavaScript:

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    console.log('Treasure found at position', i); // Our treasure is at the position 5.
    break; // STOP! We got the treasure. No need to continue opening more boxes.
  }
  console.log('No treasure at position:', i);
}
/*
Prints:
No treasure at position: 0
No treasure at position: 1
No treasure at position: 2
No treasure at position: 3
No treasure at position: 4
Treasure found at position 5
*/

// Controlando um único laço 'for' — A instrução continue
// O continue comando ignora a iteração atual do loop e pula para a próxima. Imagine comer frutas de uma cesta e decidir pular uma maçã. É exatamente isso que o continue comando faz. Veja como:

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    // Position 5 is where the apple is.
    continue; // SKIP! No apple for me, thank you. Onto the next fruit!
  }
  console.log('Eating fruit at position:', i);
}
/*
Prints:
Eating fruit at position: 0
Eating fruit at position: 1
Eating fruit at position: 2
Eating fruit at position: 3
Eating fruit at position: 4
Eating fruit at position: 6
Eating fruit at position: 7
Eating fruit at position: 8
Eating fruit at position: 9
*/

let chapter = 1;

while (chapter <= 10) {
  if (chapter === 5) {
    // We've reached chapter 5.
    chapter++; // Increment before skipping.
    continue; // SKIP! Let's move on to chapter 6.
  }
  console.log('Reading chapter:', chapter);
  chapter++; // Increment after processing.
}
/*
Prints:
Reading chapter: 1
Reading chapter: 2
Reading chapter: 3
Reading chapter: 4
Reading chapter: 6
Reading chapter: 7
Reading chapter: 8
Reading chapter: 9
Reading chapter: 10
*/

let photo = 0;

while (photo < 100) {
  photo++;
  if (photo === 23) {
    // We've found our desired photo.
    console.log('Found the photo at position', photo);
    break; // STOP! We've got our photo. No need to scroll further.
  }
}

// Dominando Loops Aninhados — Interromper e Continuar
// Lembra das bonecas russas? Imagine caixas encaixadas umas dentro das outras com um bilhete escondido dentro. O break comando ajuda a encerrar o ciclo assim que o bilhete for encontrado:

for (let bonecaExterna = 0; bonecaExterna < 3; bonecaExterna++) {
  for (let bonecaInterna = 0; bonecaInterna < 3; bonecaInterna++) {
    if (bonecaExterna === 1 && bonecaInterna === 1) {
      // Encontramos a nota em uma boneca interna alojada por uma boneca externa.
      console.log('Encontramos a nota na boneca externa', bonecaExterna, 'e na boneca interna', bonecaInterna);
      break; // PARE! Encontramos a nota. Não há necessidade de descobrir mais bonecas.
      // A instrução break encerra a execução apenas do loop interno, o loop externo continua
    }
    console.log('Procurando na boneca externa', bonecaExterna, 'e na boneca interna', bonecaInterna);
  }
}
/*
Imprime:
Procurando na boneca externa 0 e na boneca interna 0
Procurando na boneca externa 0 e na boneca interna 1
Pesquisando na boneca externa 0 e na boneca interna 2
Pesquisando na boneca externa 1 e na boneca interna 0
Encontramos a nota na boneca externa 1 e na boneca interna 1
Pesquisando na boneca externa 2 e na boneca interna 0
Pesquisando na boneca externa 2 e na boneca interna 1
Pesquisando na boneca externa 2 e na boneca interna 2
*/

// Como você pode ver, quando encontramos a anotação para bonecaExterna = 1, o loop interno não continuou sua execução. No entanto, o loop para bonecaExterna = 2 foi executado normalmente, break saindo apenas do loop interno.
