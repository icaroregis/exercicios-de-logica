function calcularDiferenca(primeiroRetangulo, segundoRetangulo) {
  let calculaAreaPrimeiroRetangulo = primeiroRetangulo[0] * primeiroRetangulo[1];
  let calculaAreaSegundoRetangulo = segundoRetangulo[0] * segundoRetangulo[1];
  return calculaAreaPrimeiroRetangulo - calculaAreaSegundoRetangulo;
}

console.log(calcularDiferenca([10, 20], [5, 5])); // 175
