function corrigirPrimeiroNumero(numeros) {
  numeros.splice(0, 1, 2);
  return numeros;
}

function corrigirSegundoNumero(numeros) {
  numeros.splice(1, 1, 5);
  return numeros;
}

console.log(corrigirPrimeiroNumero([1, 4, 6, 8]));
console.log(corrigirPrimeiroNumero([1, 10, 13, 19]));
