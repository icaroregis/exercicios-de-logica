let atletas = [
  {
    nome: 'Cesar Abascal',
    notas: [10, 9.34, 8.42, 10, 7.88],
  },
  {
    nome: 'Fernando Puntel',
    notas: [8, 10, 10, 7, 9.33],
  },
  {
    nome: 'Daiane Jelinsky',
    notas: [7, 10, 9.5, 9.5, 8],
  },
  {
    nome: 'Bruno Castro',
    notas: [10, 10, 10, 9, 9.5],
  },
];

function pontuacaoDosAtletas(atletas) {
  atletas.map((atleta) => {
    let notas = [...atleta.notas];
    let maiorNota = Math.max(...atleta.notas);
    let menorNota = Math.min(...atleta.notas);
    notas.splice(notas.indexOf(maiorNota), 1);
    notas.splice(notas.indexOf(menorNota), 1);
    let media =
      notas.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual;
      }, 0) / notas.length;

    let notasOriginais = [...atleta.notas];
    let maiores = notasOriginais.filter((n) => n === maiorNota);
    let menores = notasOriginais.filter((n) => n === menorNota);
    let restantes = notasOriginais.filter((n) => n !== maiorNota && n !== menorNota).sort((a, b) => a - b);
    let listDeNotas = [...maiores, ...menores, ...restantes];

    return console.log(
      `
      Atleta: ${atleta.nome}, 
      Notas Obtidas: ${listDeNotas},
      Média Válida: ${media.toFixed(2)}
      `,
    );
  });
}

console.log(pontuacaoDosAtletas(atletas));
