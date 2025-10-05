class Carro {
  constructor(modelo, marca, ano) {
    this.modelo = modelo;
    this.marca = marca;
    this.ano = ano;
  }

  //método de instância.
  marcaEAno() {
    return `Este carro é de ${this.ano} da marca ${this.marca}`;
  }
}

let carro1 = new Carro('Gol', 'Volkswagen', 2020);
let carro2 = new Carro('Civic', 'Honda', 2019);
console.log(carro1.marcaEAno());
console.log(carro2.marcaEAno());

// Definição da classe
class Usuario {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  obterNomeCompleto() {
    return 'Nome completo aqui';
  }

  podeVotar() {
    return true;
  }

  jaVotou() {
    return false;
  }
}

// Uso da classe
let usuario = new Usuario('Daniela', 'Queiroz');
console.log(usuario.obterNomeCompleto());
console.log(usuario.podeVotar());
console.log(usuario.jaVotou());

// Definição da classe
class Receita {
  constructor(nome, calorias) {
    this.nome = nome;
    this.calorias = calorias;
  }

  ehBaixaCaloria() {
    if (this.calorias <= 400) {
      return true;
    }
    return false;
  }

  ehAltaCaloria() {
    if (this.calorias >= 600) {
      return true;
    }
    return false;
  }
}

// Uso da classe
let macarrao = new Receita('Macarrão', 700);
console.log(macarrao.ehBaixaCaloria());
console.log(macarrao.ehAltaCaloria());

let salada = new Receita('Salada', 350);
console.log(salada.ehBaixaCaloria());
console.log(salada.ehAltaCaloria());
