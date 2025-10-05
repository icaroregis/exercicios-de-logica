// 📚 GUIA COMPLETO SOBRE CLASSES EM JAVASCRIPT
// ============================================

console.log('🚀 APRENDENDO SOBRE CLASSES EM JAVASCRIPT\n');

// 1. DEFINIÇÃO BÁSICA DE CLASSE
// =============================

// diferença entre classes e instâncias:
// Classes são moldes(formas) para criar objetos (instâncias).

class Pessoa {
  // Construtor - método especial que é chamado quando criamos uma instância
  constructor(nome, idade) {
    this.nome = nome; // 'this' se refere ao objeto que será criado
    this.idade = idade;
  }

  // Método da classe
  apresentar() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
}

// Criando instâncias (objetos) da classe
const pessoa1 = new Pessoa('João', 25);
const pessoa2 = new Pessoa('Maria', 30);

console.log('1. Classe Básica:');
console.log(pessoa1.apresentar()); // "Olá, meu nome é João e tenho 25 anos."
console.log(pessoa2.apresentar()); // "Olá, meu nome é Maria e tenho 30 anos."
console.log();

// 2. CLASSES COM PROPRIEDADES E MÉTODOS
// =====================================

class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.ligado = false; // propriedade padrão
  }

  // Método para ligar o carro
  ligar() {
    this.ligado = true;
    return `${this.marca} ${this.modelo} ligado!`;
  }

  // Método para desligar o carro
  desligar() {
    this.ligado = false;
    return `${this.marca} ${this.modelo} desligado!`;
  }

  // Método para obter informações
  info() {
    return `${this.marca} ${this.modelo} (${this.ano}) - ${this.ligado ? 'Ligado' : 'Desligado'}`;
  }
}

const meuCarro = new Carro('Toyota', 'Corolla', 2020);
console.log('2. Classe Carro:');
console.log(meuCarro.info()); // Toyota Corolla (2020) - Desligado
console.log(meuCarro.ligar()); // Toyota Corolla ligado!
console.log(meuCarro.info()); // Toyota Corolla (2020) - Ligado
console.log();

// 3. HERANÇA (EXTENDS)
// ====================

class Animal {
  constructor(nome, especie) {
    this.nome = nome;
    this.especie = especie;
  }

  fazerSom() {
    return 'Som genérico de animal';
  }

  info() {
    return `${this.nome} é um(a) ${this.especie}`;
  }
}

// Cachorro herda de Animal
class Cachorro extends Animal {
  constructor(nome, raca) {
    super(nome, 'cachorro'); // chama o construtor da classe pai
    this.raca = raca;
  }

  // Sobrescrevendo método da classe pai
  fazerSom() {
    return 'Au au!';
  }

  // Novo método específico da classe Cachorro
  brincar() {
    return `${this.nome} está brincando!`;
  }
}

const meuCachorro = new Cachorro('Rex', 'Labrador');
console.log('3. Herança:');
console.log(meuCachorro.info()); // Rex é um(a) cachorro
console.log(meuCachorro.fazerSom()); // Au au!
console.log(meuCachorro.brincar()); // Rex está brincando!
console.log();

// 4. CLASSES ESTÁTICAS
// ====================

class Utilitarios {
  // Método estático - pode ser chamado sem instanciar a classe
  static somar(a, b) {
    return a + b;
  }

  static ehPar(numero) {
    return numero % 2 === 0;
  }
}

console.log('4. Métodos Estáticos:');
console.log(Utilitarios.somar(5, 3)); // 8
console.log(Utilitarios.ehPar(4)); // true
console.log(Utilitarios.ehPar(7)); // false
console.log();

// 5. GETTERS E SETTERS
// ====================

class ContaBancaria {
  constructor(saldoInicial) {
    this._saldo = saldoInicial; // convenção: _ indica propriedade privada
  }

  // Getter - permite acessar como propriedade
  get saldo() {
    return `R$ ${this._saldo.toFixed(2)}`;
  }

  // Setter - permite modificar com validação
  set saldo(valor) {
    if (valor < 0) {
      throw new Error('Saldo não pode ser negativo!');
    }
    this._saldo = valor;
  }

  depositar(valor) {
    this._saldo += valor;
  }
}

const conta = new ContaBancaria(1000);
console.log('5. Getters e Setters:');
console.log(conta.saldo); // R$ 1000.00
conta.depositar(500);
console.log(conta.saldo); // R$ 1500.00
conta.saldo = 2000; // usando setter
console.log(conta.saldo); // R$ 2000.00
console.log();

// 6. POR QUE USAR CLASSES HOJE EM DIA?
// ====================================

console.log('6. Quando usar classes vs funções/componentes:');
console.log('✅ Classes são úteis para:');
console.log('   - Modelos de dados complexos');
console.log('   - Lógica de negócio reutilizável');
console.log('   - Quando você precisa de herança');
console.log('   - APIs e bibliotecas');
console.log();
console.log('✅ No React moderno, preferimos:');
console.log('   - Componentes funcionais com hooks');
console.log('   - useState, useEffect, useContext');
console.log('   - Funções puras para lógica');
console.log();

// 7. EXEMPLO PRÁTICO: CLASSE PARA GERENCIAR TAREFAS
// ==================================================

class GerenciadorTarefas {
  constructor() {
    this.tarefas = [];
  }

  adicionarTarefa(titulo, descricao = '') {
    const tarefa = {
      id: Date.now(),
      titulo,
      descricao,
      concluida: false,
      dataCriacao: new Date(),
    };
    this.tarefas.push(tarefa);
    return tarefa;
  }

  marcarConcluida(id) {
    const tarefa = this.tarefas.find((t) => t.id === id);
    if (tarefa) {
      tarefa.concluida = true;
      return true;
    }
    return false;
  }

  listarTarefas() {
    return this.tarefas.map((t) => `${t.concluida ? '✅' : '⏳'} ${t.titulo} - ${t.descricao || 'Sem descrição'}`);
  }

  get totalTarefas() {
    return this.tarefas.length;
  }

  get tarefasConcluidas() {
    return this.tarefas.filter((t) => t.concluida).length;
  }
}

const gerenciador = new GerenciadorTarefas();
gerenciador.adicionarTarefa('Estudar JavaScript', 'Aprender sobre classes');
gerenciador.adicionarTarefa('Fazer exercícios', 'Praticar programação');
gerenciador.marcarConcluida(gerenciador.tarefas[0].id);

console.log('7. Exemplo prático - Gerenciador de Tarefas:');
console.log(`Total de tarefas: ${gerenciador.totalTarefas}`);
console.log(`Tarefas concluídas: ${gerenciador.tarefasConcluidas}`);
console.log('Lista de tarefas:');
gerenciador.listarTarefas().forEach((tarefa) => console.log(`  ${tarefa}`));

console.log('\n🎉 Fim do guia! Agora você sabe trabalhar com classes em JavaScript!');
