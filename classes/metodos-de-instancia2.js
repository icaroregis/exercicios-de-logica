class Usuario {
  constructor(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  obterNomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }

  obterIniciais() {
    return `${this.nome[0]}${this.sobrenome[0]}`;
  }

  podeVotar() {
    if (this.idade >= 16) {
      return true;
    }
    return false;
  }
}

let sara = new Usuario('Sara', 'Gomes', 17);
let cesar = new Usuario('César', 'Assis', 13);
console.log(sara);
console.log(cesar);
console.log(sara.obterIniciais());
console.log(sara.podeVotar());
