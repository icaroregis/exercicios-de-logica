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
    super(name); // call to parent constructor of `Parent`
    this.age = age; // age property
  }

  info() {
    console.log(`I am ${this.age} years old.`); // info method
  }
}

const child = new Child('Alice', 10);
child.greet(); // prints: Hello, my name is Alice
child.info(); // prints: I am 10 years old.
