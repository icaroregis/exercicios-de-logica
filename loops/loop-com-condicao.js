function somaNotasIguaisOuAcimaDe6(notas) {
  let total = 0;
  notas.forEach((nota) => {
    if (nota >= 6) {
      total += nota;
    }
  });
  return total;
}

console.log(somaNotasIguaisOuAcimaDe6([10, 5, 18, 3, 14, 19, 9]));
console.log(somaNotasIguaisOuAcimaDe6([18, 4, 9, 20, 8]));

function somaDeTemperaturasNaoCongelantes(temperaturas) {
  let total = 0;
  temperaturas.forEach((temperatura) => {
    if (temperatura > 0) {
      total += temperatura;
    }
  });
  return total;
}

console.log(somaDeTemperaturasNaoCongelantes([-13, 5, -8, -3, 0, 3, 5]));
console.log(somaDeTemperaturasNaoCongelantes([12, -4, 9, -20, 8]));
