function obterSomaDeTodasAsNotas(notas) {
  return notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}

function obterMediaDeTodasAsNotas(notas) {
  let media = obterSomaDeTodasAsNotas(notas) / notas.length;
  return media;
}

console.log(obterSomaDeTodasAsNotas([10, 5, 8]));
console.log(obterMediaDeTodasAsNotas([10, 5, 8]));
