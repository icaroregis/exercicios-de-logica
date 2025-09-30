// Não modifique as linhas abaixo
let curso1 = {
  nome: 'Aprenda a programar',
  estaCompleto: true,
};

let curso2 = {
  nome: 'Aprenda JavaScript',
  estaCompleto: false,
};

function adicionarQuantidadeDeAulas(curso, total) {
  return { ...curso, quantidadeDeAulas: total };
}

function adicionarQuantidadeDeAulas2(curso, total) {
  return (curso.quantidadeDeAulas = total);
}

console.log(adicionarQuantidadeDeAulas(curso1, 20));
console.log(adicionarQuantidadeDeAulas(curso2, 15));
console.log(adicionarQuantidadeDeAulas2(curso1, 20));
console.log(adicionarQuantidadeDeAulas2(curso2, 15));
