// Objetivo: Criar um programa que recebe dois números e o tipo de operação desejada (soma, subtração, multiplicação e divisão) e executa o cálculo correto.

// Entrada (Variável num1 - Número): Solicite e armazene o primeiro número.
// Entrada (Variável num2 - Número): Solicite e armazene o segundo número.
// Entrada (Variável operacao - String): Solicite ao usuário qual operação ele deseja. Use as palavras-chave: +, -, x, /.

import readline from 'readline-sync';

const numberOne = parseFloat(readline.question('Digite o primeiro número: '));
const numberTwo = parseFloat(readline.question('Digite o segundo número: '));
const operation = readline.question('Digite a operação desejada (+, -, x, /): ');

function calculate(numberOne, numberTwo, operation) {
  let result;

  switch (operation) {
    case '+':
      result = numberOne + numberTwo;
      break;
    case '-':
      result = numberOne - numberTwo;
      break;
    case 'x':
      result = numberOne * numberTwo;
      break;
    case '/':
      if (numberTwo !== 0) {
        result = numberOne / numberTwo;
      } else {
        return 'Erro: Divisão por zero não é permitida.';
      }
      break;
    default:
      return 'Erro: Operação inválida. Use +, -, x ou /.';
  }

  return `O resultado de ${numberOne} ${operation} ${numberTwo} é: ${result}`;
}

console.log(calculate(numberOne, numberTwo, operation));
