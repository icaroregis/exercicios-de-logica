function incrementarPrimeiraTemperatura(temperaturas) {
  temperaturas.splice(0, 1, temperaturas[0] + 1);
  return temperaturas;
}
