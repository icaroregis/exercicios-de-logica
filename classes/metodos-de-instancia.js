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
