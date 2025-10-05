function obterNomesCompletos(usuarios) {
  return usuarios.map((usuario) => {
    return `${usuario.nome} ${usuario.sobrenome}`;
  });
}

let usuarios = [
  {
    nome: 'Bárbara',
    sobrenome: 'Silva',
    idade: 21,
  },
  {
    nome: 'Carlos',
    sobrenome: 'Bonaparte',
    idade: 38,
  },
];

console.log(obterNomesCompletos(usuarios));
