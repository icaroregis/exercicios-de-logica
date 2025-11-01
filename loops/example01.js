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
