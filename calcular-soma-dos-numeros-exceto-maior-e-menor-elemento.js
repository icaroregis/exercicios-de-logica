// O que é o splice?
// O método splice é usado para remover, adicionar ou substituir elementos em um array, alterando o array original.
// sintaxe básica:
// array.splice(inicio, quantidade, item1, item2, ...)

// array.reduce(function(acumulador, elementoAtual, índice, array) {
// lógica
// }, valorInicial);

// acumulador: o valor acumulado até o momento (começa com o valorInicial, se você passar um).
// elementoAtual: o elemento atual do array sendo processado.
// índice (opcional): o índice do elemento atual.
// array (opcional): o array original.
// valorInicial (opcional, mas recomendado para somas): valor inicial do acumulador.

// Exemplo para somar todos os elementos do array
// const numeros = [1, 2, 3, 4, 5];
// const soma = numeros.reduce(function(acumulador, elementoAtual) {
//   return acumulador + elementoAtual;
// }, 0); // 0 é o valor inicial do acumulador

// console.log(soma); // 15

// Explicação passo a passo:
// Na primeira execução:

// acumulador = 0 (valorInicial)
// elementoAtual = 1
// retorna 0 + 1 = 1
// Na segunda execução:

// acumulador = 1
// elementoAtual = 2
// retorna 1 + 2 = 3
// E assim por diante, até o final do array.

// split
// É um método de string.
// Serve para dividir uma string em partes, gerando um array, usando um separador definido.
// Exemplo:
// js
// let texto = "a,b,c";
// let partes = texto.split(","); // partes = ["a", "b", "c"]
// Não funciona em arrays, só em strings.
// Se você tentar array.split(",") vai dar erro!

// splice
// É um método de array (não existe para strings!).
// Serve para remover, adicionar ou substituir elementos em arrays, modificando o array original.
// Sintaxe:
// js
// array.splice(inicio, quantidade, item1, item2, ...)
// inicio: índice de onde começa a mexer
// quantidade: quantos elementos vai remover
// item1, item2...: elementos para adicionar (opcional)

function calcularSomaExcluindoExtremos(numeros) {
  const highestNumber = Math.max(...numeros);
  const lowestNumber = Math.min(...numeros);

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === highestNumber) {
      numeros.splice(i, 1);
      break;
    }
  }

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === lowestNumber) {
      numeros.splice(i, 1);
      break;
    }
  }

  const soma = numeros.reduce((acc, curr) => acc + curr, 0);
  console.log(soma);
  return soma;
}

calcularSomaExcluindoExtremos([6, 2, 1, 8, 10]);

// ! segunda forma de resolver o problema
function calcularSomaExcluindoExtremos2(numeros) {
  if (Array.isArray(numeros) === false) return 'O parâmetro deve ser um array';
  if (numeros.length <= 2) return 0;

  const highestNumber = Math.max(...numeros);
  const lowestNumber = Math.min(...numeros);

  const filteredNumbers = numeros.filter((num) => num !== highestNumber && num !== lowestNumber);

  const soma = filteredNumbers.reduce((acc, curr) => acc + curr, 0);
  console.log(soma);
  return soma;
}

// ! terceira forma de resolver o problema
function calcularSomaExcluindoExtremos3(numeros) {
  if (Array.isArray(numeros) === false) return 'O parâmetro deve ser um array';
  if (numeros.length <= 2) return 0;

  const highestNumber = Math.max(...numeros);
  const lowestNumber = Math.min(...numeros);

  numeros.splice(numeros.indexOf(highestNumber), 1);
  numeros.splice(numeros.indexOf(lowestNumber), 1);

  const soma = numeros.reduce((acc, curr) => acc + curr, 0);
  console.log(soma);
  return soma;
}
