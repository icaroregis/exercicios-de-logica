// Assim como as crianças herdam características de seus pais, childas classes em programação herdam comportamentos e propriedades de parent outras classes.

// Abaixo, um exemplo prático que demonstra uma child classe que herda de outra parent classe:

// Parent class
class Parent {
  constructor(name) {
    this.name = name; // name property
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`); // greet method
  }
}

// 'Child' class extending 'Parent'
class Child extends Parent {
  constructor(name, age) {
    super(name); // chama o construtor da classe pai (Parent)
    this.age = age; // age property
  }

  info() {
    console.log(`I am ${this.age} years old.`); // info method
  }
}

// Para que serve o super?

// O super chama o construtor da classe pai (Parent), permitindo que a classe filha (Child) herde e inicialize corretamente as propriedades definidas na classe pai.
// No exemplo, super(name) faz com que o código this.name = name do construtor da classe Parent seja executado, atribuindo o nome à instância.
// Resumindo:

// super é obrigatório no construtor da classe filha quando você está usando extends.
// Ele garante que as propriedades e comportamentos da classe pai sejam corretamente inicializados na classe filha.
// Se não usar super, você terá erro ao tentar acessar ou inicializar propriedades herdadas.

const child = new Child('Alice', 10);
child.greet(); // prints: Hello, my name is Alice
child.info(); // prints: I am 10 years old.
