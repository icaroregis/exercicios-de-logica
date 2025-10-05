// Este projeto é igual ao anterior, mas com algumas funcionalidades adicionais.

// Complete as sete funções fornecidas de forma que elas façam o seguinte:

// adicionarNota(notas, nota): Adicionar uma nota à matriz de notas e retornar a matriz resultante.

// obterNumeroDeTestes(notas): Retornar o número total de testes realizados.

// obterPrimeiraNota(notas): Retornar a primeira nota (a primeira submetida, não a mais alta).

// obterUltimaNota(notas): Retornar a última nota (a última enviada, não a mais baixa).

// aProvaEhMuitoFacil(notas): Retornar true se a prova foi muito fácil (ou seja, se pelo menos um dos alunos obteve nota 20), ou false, caso contrário.

// aNotaExiste([9,6,15,13,20], 13): Retornar true se pelo menos um dos alunos obteve uma determinada nota.

// exportarCSV(): Retornar as notas em formato de uma string CSV (valores separados por vírgula)

// "1, 2, 3" ou "1,2,3".

function adicionarNota(notas, nota) {
  notas.push(nota);
  return notas;
}

function obterNumeroDeTestes(notas) {
  return notas.length;
}

function obterPrimeiraNota(notas) {
  return notas[0];
}

function obterUltimaNota(notas) {
  return notas[notas.length - 1];
}

function aProvaEhMuitoFacil(notas) {
  return notas.includes(20);
}

function aNotaExiste(notas, nota) {
  return notas.includes(nota);
}

function exportarCSV(notas) {
  return notas.join(',');
}
