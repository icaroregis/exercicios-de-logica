class Usuario {
  constructor(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  obterNomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }

  podeVotar() {
    return this.idade >= 16;
  }
}

// Herdando todos os atributos e métodos da classe Usuario
// Aqui aproveitamos para criar um método exclusivo da classe Escritor
class Escritor extends Usuario {
  publicarArtigo() {
    return 'Artigo publicado';
  }
}
