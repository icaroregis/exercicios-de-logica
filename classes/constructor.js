// O que é um constructor?
// Um constructor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
// Ele é chamado automaticamente quando uma nova instância da classe é criada usando a palavra-chave 'new'.

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome; // Atributo nome
    this.idade = idade; // Atributo idade
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

// Definindo a classe
class Usuario {
  constructor(nome, sobrenome) {
    console.log('Criando uma nova instância da classe Usuario');
    console.log(nome);
    console.log(sobrenome);
  }
}

// Usando a classe
let usuario1 = new Usuario('Samuel', 'Dias');
console.log('------');
let usuario2 = new Usuario('Carla', 'Bastos');
console.log('=======');

// Definição da classe Receita com construtor e variáveis de instância
class Receita {
  constructor() {
    this.tempoDeCozimento = 30;
    this.alergias = ['nozes'];
  }
}

// Uso da classe
let receita = new Receita();
console.log(receita);
