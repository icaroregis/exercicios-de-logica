// Um número é um quadrado perfeito, ou um número quadrado, se for o quadrado de um inteiro positivo.
// Por exemplo, 25
// é um número quadrado porque 5 * 5 = 25; 9 também é um quadrado ímpar.
// A sequência dos números quadrados é: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, ...
// Note que os números quadrados alternam entre pares e ímpares:
// 1 (ímpar), 4 (par), 9 (ímpar), 16 (par), 25 (ímpar), ...36 (par), ...

// Escreva um programa que calcule a soma dos números quadrados ímpares entre os primeiros 191 mil números quadrados.

// Dica: você pode usar um loop para iterar pelos primeiros 191 mil números inteiros, calcular o quadrado de cada número e verificar se é ímpar antes de adicioná-lo à soma total.

// Os primeiros 5 números quadrados são:
// 1, 4, 9, 16, 25, e a soma dos quadrados ímpares é
// 1 + 9 + 25 = 35.

// Entre os primeiros 191 mil números quadrados, qual é a soma de todos os quadrados ímpares?

let soma = 0;
for (let n = 1; n <= 191000; n = n + 2) {
  soma = soma + n * n;
}
console.log(soma);
