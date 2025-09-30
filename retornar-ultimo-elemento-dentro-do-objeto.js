// Não modifique as linhas abaixo
let estudante = {
  nome: 'Samara Dias',
  idade: 24,
  notas: [3, 5, 5, 4, 8],
};

function obterUltimaNota(estudante) {
  return estudante.notas[estudante.notas.length - 1];
}

console.log(obterUltimaNota(estudante));
