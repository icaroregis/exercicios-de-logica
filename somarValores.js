// Escreva um programa que encontre a soma de todos os números de 1 a num (inclusive). O número será sempre um inteiro positivo maior que 0. Sua função só precisa retornar o resultado. O que está entre parênteses no exemplo abaixo é como você chega a esse resultado e não faz parte dele. Veja os testes de exemplo.

// Por exemplo (Entrada -> Saída):
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

function somarValores(num) {
  const array = [];
  for (let i = 0; i <= num; i++) {
    array.push(i);
  }
  return array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}
