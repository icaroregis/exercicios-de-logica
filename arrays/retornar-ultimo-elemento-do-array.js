// Escreva um código que aprimore todos os arrays de forma que você possa chamar o  array.last() método em qualquer array e ele retornará o último elemento. Se não houver elementos no array, ele deverá retornar  -1.

// Você pode assumir que a matriz é a saída de  JSON.parse.

// Exemplo 1:

// Entrada: nums = [null, {}, 3]
//  Saída: 3
//  Explicação: Chamar nums.last() deve retornar o último elemento: 3.
// Exemplo 2:

// Entrada: nums = []
//  Saída: -1
//  Explicação: Como não há elementos, retorna -1.

// ! Ao fazer Array.prototype.last = function() { ... }, você está adicionando o método last() para todos os arrays no JavaScript.
Array.prototype.last = function () {
  if (this.length === 0) return -1;
  return this[this.length - 1];
};

// Exemplo 1
const nums1 = [null, {}, 3];
console.log(nums1.last()); // Saída: 3

// Exemplo 2
const nums2 = [];
console.log(nums2.last()); // Saída: -1
