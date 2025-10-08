class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }

  calculaCategoria() {
    switch (true) {
      case this.idade >= 9 && this.idade <= 11:
        return 'Infantil';
      case this.idade >= 12 && this.idade <= 13:
        return 'Juvenil';
      case this.idade >= 14 && this.idade <= 15:
        return 'Intermediário';
      case this.idade >= 16 && this.idade <= 30:
        return 'Adulto';
      default:
        return 'Sem categoria';
    }
  }

  calculaIMC() {
    return this.peso / (this.altura * this.altura);
  }

  calculaMediaValida() {
    const notasCopiadas = [...this.notas];
    const maiorNota = Math.max(...notasCopiadas);
    const menorNota = Math.min(...notasCopiadas);
    notasCopiadas.splice(notasCopiadas.indexOf(maiorNota), 1);
    notasCopiadas.splice(notasCopiadas.indexOf(menorNota), 1);
    let media = notasCopiadas.reduce((acc, nota) => acc + nota, 0) / notasCopiadas.length;
    return media.toString().replace('.', ',');
  }

  obtemNomeAtleta() {
    return this.nome;
  }

  obtemIdadeAtleta() {
    return this.idade;
  }

  obtemPesoAtleta() {
    return this.peso;
  }

  obtemCategoria() {
    return this.calculaCategoria();
  }

  obtemIMC() {
    return this.calculaIMC();
  }

  obtemMediaValida() {
    return this.calculaMediaValida();
  }

  obtemAlturaAtleta() {
    return this.altura;
  }

  obtemNotasAtleta() {
    return this.notas.join(',');
  }
}

const atleta = new Atleta('Cesar Abascal', 30, 80, 1.7, [10, 9.34, 8.42, 10, 7.88]);
let stringFormatted = `
Nome: ${atleta.obtemNomeAtleta()}
Idade: ${atleta.obtemIdadeAtleta()}
Peso: ${atleta.obtemPesoAtleta()}
Altura: ${atleta.obtemAlturaAtleta()}
Notas: ${atleta.obtemNotasAtleta()}
Categoria: ${atleta.obtemCategoria()}
IMC: ${atleta.obtemIMC()}
Média válida: ${atleta.obtemMediaValida()}`;
console.log(stringFormatted);
