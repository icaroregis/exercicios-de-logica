const numbersList = [1, 2, 3, 4, 5];

// 1. Substituir o primeiro elemento por 0
const ex1 = [...numbersList];
ex1.splice(0, 1, 0); // [0, 2, 3, 4, 5]
console.log('Exemplo 1:', ex1);

// 2. Remover o primeiro elemento
const ex2 = [...numbersList];
ex2.splice(0, 1); // [2, 3, 4, 5]
console.log('Exemplo 2:', ex2);

// 3. Inserir elementos sem remover nenhum (inserir 10 e 11 na posição 2)
const ex3 = [...numbersList];
ex3.splice(2, 0, 10, 11); // [1, 2, 10, 11, 3, 4, 5]
console.log('Exemplo 3:', ex3);

// 4. Remover vários elementos do meio (remover 2 e 3)
const ex4 = [...numbersList];
ex4.splice(1, 2); // [1, 4, 5]
console.log('Exemplo 4:', ex4);

// 5. Remover do final (remover os dois últimos)
const ex5 = [...numbersList];
ex5.splice(-2, 2); // [1, 2, 3]
console.log('Exemplo 5:', ex5);

// 6. Inserir vários elementos em uma posição (inserir 99, 100 na posição 1)
const ex6 = [...numbersList];
ex6.splice(1, 0, 99, 100); // [1, 99, 100, 2, 3, 4, 5]
console.log('Exemplo 6:', ex6);

// 7. Remover todos os elementos a partir de um índice (remover do índice 3 em diante)
const ex7 = [...numbersList];
ex7.splice(3); // [1, 2, 3]
console.log('Exemplo 7:', ex7);

// 8. Esvaziar um array usando splice
const ex8 = [...numbersList];
ex8.splice(0, ex8.length); // []
console.log('Exemplo 8:', ex8);
