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
