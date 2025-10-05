function obterSomaDeTodasAsNotas(notas) {
  return notas.reduce((acumulador, valorAtual) => acumulador + valorAtual.nota, 0);
}

let notas = [
  {
    nome: 'Sandra Assis',
    nota: 8,
  },
  {
    nome: 'Érica Blanck',
    nota: 3,
  },
];

console.log(obterSomaDeTodasAsNotas(notas));

function obterSomaDeNotasAninhadas(estudantes) {
  return estudantes.reduce((acumulador, valorAtual) => acumulador + valorAtual.aprendizagemDeProgramacao.nota, 0);
}

let estudantes = [
  {
    nome: 'Diana Kelling',
    idade: 24,
    aprendizagemDeProgramacao: {
      anoInicio: 2020,
      nota: 8,
    },
  },
  {
    nome: 'Marcelo Kioski',
    idade: 31,
    aprendizagemDeProgramacao: {
      anoInicio: 2021,
      nota: 9,
    },
  },
];

console.log(obterSomaDeNotasAninhadas(estudantes));
