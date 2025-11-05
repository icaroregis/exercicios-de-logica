// Contexto: Um sistema de geometria precisa receber as medidas de três segmentos de reta e determinar duas coisas: se eles podem formar um triângulo válido (usando a Regra de Existência) e, em caso afirmativo, qual é o tipo de triângulo formado (Equilátero, Isósceles ou Escaleno).

// Classificação
// Condição Lógica
// Resultado (Saída)
// Não Triângulo
// A soma de quaisquer dois lados é menor ou igual ao terceiro lado.
// "Não é um triângulo válido."

// Classificação
// Condição Lógica
// Equilátero
// Os três lados são iguais.
// Isósceles
// Apenas dois lados são iguais.
// Escaleno
// Todos os três lados são diferentes.

import readline from 'readline-sync';

function classificarTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
    return 'Lados devem ser maiores que zero.';
  } else if (ladoA + ladoB <= ladoC || ladoA + ladoC <= ladoB || ladoB + ladoC <= ladoA) {
    return 'Não é um triângulo válido.';
  } else if (ladoA === ladoB && ladoB === ladoC) {
    return 'Triângulo Equilátero.';
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    return 'Triângulo Isósceles.';
  } else {
    return 'Triângulo Escaleno.';
  }
}

let ladoA = parseFloat(readline.question('Digite o comprimento do lado A: '));
let ladoB = parseFloat(readline.question('Digite o comprimento do lado B: '));
let ladoC = parseFloat(readline.question('Digite o comprimento do lado C: '));

console.log(classificarTriangulo(ladoA, ladoB, ladoC));
