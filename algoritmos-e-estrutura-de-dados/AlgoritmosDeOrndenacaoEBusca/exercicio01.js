// Como você pode determinar o número de dígitos no código da sua sobremesa favorita, " 1302"? O código fornecido usa recursão para contar os dígitos de um número, assim como se contariam as camadas de um bolo. Clique em Executar para descobrir quantas camadas ele tem!

function countDigits(number) {
  if (number < 10) {
    return 1; // Base case: a single digit
  } else {
    return 1 + countDigits(Math.floor(number / 10)); // Recursive case
  }
}

console.log(countDigits(1302)); // Should output 4

// Primeira chamada:
// countDigits(1302)
// 1302 < 10? Não.
// Então: 1 + countDigits(Math.floor(1302 / 10))
// → 1 + countDigits(130)

// Segunda chamada:
// countDigits(130)
// 130 < 10? Não.
// Então: 1 + countDigits(Math.floor(130 / 10))
// → 1 + countDigits(13)

// Terceira chamada:
// countDigits(13)
// 13 < 10? Não.
// Então: 1 + countDigits(Math.floor(13 / 10))
// → 1 + countDigits(1)

// Quarta chamada:
// countDigits(1)
// 1 < 10? Sim!
// Retorna 1.

// ! começa 1, 1, 1, 1 a sma nunca acontece pois a função sempre é chamada novamente.
// ! chega na condição de parada então pé resolvida
// ! resolve 1 + 1 + 1 + 1 = 4

// Agora, voltando as chamadas (desempilhando):
// countDigits(1) retorna 1
// countDigits(13) retorna 1 + 1 = 2
// countDigits(130) retorna 1 + 2 = 3
// countDigits(1302) retorna 1 + 3 = 4
// Por isso o resultado é 4:
// O número 1302 tem 4 dígitos: 1, 3, 0, 2.

// Veja o que acontece em cada etapa:

// Quando chamamos countDigits(1302), ele faz:
// 1 + countDigits(130)
// countDigits(130) faz:
// 1 + countDigits(13)
// countDigits(13) faz:
// 1 + countDigits(1)
// countDigits(1) retorna 1 (caso base)
// Agora, voltando:

// countDigits(13) retorna 1 + 1 = 2
// countDigits(130) retorna 1 + 2 = 3
// countDigits(1302) retorna 1 + 3 = 4
// Ou seja, cada chamada representa um dígito do número.
// A cada vez que dividimos por 10, removemos um dígito e somamos 1 à contagem.

// Resumo:

// Não é uma soma de 1, 2 e 3.
// É uma contagem: cada chamada soma 1, representando um dígito do número.
// O resultado final é a quantidade de dígitos.
