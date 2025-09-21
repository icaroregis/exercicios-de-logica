function obterMensagemDaUltimaTemperatura(temperaturas) {
  return `A última temperatura está na posição ${temperaturas[temperaturas.length - 1]}`;
}

// Não modifique as linhas abaixo
console.log(obterMensagemDaUltimaTemperatura([-5, 12, 15])); // "A última temperatura está na posição 2"
console.log(obterMensagemDaUltimaTemperatura([13, 10])); // "A última temperatura está na posição 1"
