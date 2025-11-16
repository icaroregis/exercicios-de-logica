function sumOfDigits(num) {
  if (num < 10) {
    return num;
  } else {
    return (num % 10) + sumOfDigits(Math.floor(num / 10)); // Recursive case
  }
}
console.log(sumOfDigits(12345)); // Will print 15 (1+2+3+4+5)

// 1 loop
// 5 → 12345 % 10 = 5
// Math.floor(num / 10) → Math.floor(12345 / 10) = 1234 (remove o último dígito)
// Então, a chamada fica: return 5 + sumOfDigits(1234);

// 2 loop
// 4 → 1234 % 10 = 4
// Math.floor(num / 10) → Math.floor(1234 / 10) = 123 (remove o último dígito)
// Então, a chamada fica: return 4 + sumOfDigits(123);

// 3 loop
// 3 → 123 % 10 = 3
// Math.floor(num / 10) → Math.floor(123 / 10) = 12 (remove o último dígito)
// Então, a chamada fica: return 3 + sumOfDigits(123);

// 4 loop
// 2 → 12 % 10 = 2
// Math.floor(num / 10) → Math.floor(12 / 10) = 1,2 = 1 (remove o último dígito)
// Então, a chamada fica: return 2 + sumOfDigits(1);

// 5 loop
// return 1

// ! começa 1, 2, 3, 4, 5
// ! chega na condição de parada então pé resolvida
// ! resolve 5, 4, 3, 2, 1

// 💡 **Curiosidade:** Pense na pilha de execução como uma impressora: se você enviar cinco arquivos para imprimir, eles ficam armazenados em uma pilha. Só quando a impressora executa o processo, eles vão sendo impressos um a um — e, no caso da recursividade, o processo começa do último arquivo enviado.

// depois recomeça pegando do último registro no caso 1 e somando com os outros registros

// 1 loop = 1 +
// 2 loop = 1 + 2
// 3 loop = 1 + 2 + 3
// 4 loop = 1 + 2 + 3 + 4
// 5 loop = 1 + 2 + 3 + 4 + 5 = 15 total

// A recursividade sempre segue o conceito de LIFO (Last In, First Out — o último a entrar é o primeiro a sair), porque cada chamada recursiva é empilhada na call stack, e só começa a ser resolvida quando chega na condição de parada.
