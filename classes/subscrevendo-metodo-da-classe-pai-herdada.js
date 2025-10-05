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

class Escritor extends Usuario {
  obterNomeCompleto() {
    return `${this.nome} ${this.sobrenome} "[escritor]"`;
  }

  podeVotar() {
    if (this.idade >= 16) {
      return true;
    }
    return false;
  }

  publicarArtigo() {
    return console.log('Artigo publicado');
  }
}

// Testando a classe
let escritora = new Escritor('Helena', 'Silva', 22);
console.log(escritora.obterNomeCompleto());
escritora.publicarArtigo();
