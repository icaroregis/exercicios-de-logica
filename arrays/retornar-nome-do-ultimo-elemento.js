function obterNomeCompletoDoUltimoUsuario(usuarios) {
  return `${usuarios[usuarios.length - 1].nome} ${usuarios[usuarios.length - 1].sobrenome}`;
}

let usuarios = [
  {
    nome: 'Samuel',
    sobrenome: 'Bastos',
    idade: 21,
  },
  {
    nome: 'Carla',
    sobrenome: 'Nogueira',
    idade: 38,
  },
];

console.log(obterNomeCompletoDoUltimoUsuario(usuarios));
