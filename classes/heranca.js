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

// Para implementar a herança, introduzimos uma palavra-chave: 'extends'. Essa poderosa palavra-chave permite que uma nova classe herde propriedades e métodos de uma classe existente. Digamos que uma classe 'filha' 'extends' da classe 'pai'.

// Vamos ver como um `Array` car pode estender um `Array` vehicle. Ambos são entidades com potencial para movimento, mas um `Array` car oferece recursos específicos adicionais — como rodas.

// Vehicle class
class Vehicle {
  constructor(name, speed) {
    this.name = name; // name property
    this.speed = speed; // speed property
  }
  move() {
    console.log(`${this.name} moves at ${this.speed} mph.`); // move method
  }
}

// 'Car' class extending 'Vehicle'
class Car extends Vehicle {
  constructor(name, speed, wheels) {
    super(name, speed); // chama o construtor da classe pai (Vehicle) assim a classe pai pode inicializar suas variáveis da instância.
    this.wheels = wheels; // nova propriedade wheels
  }
  specs() {
    console.log(`I am a ${this.name} and I have ${this.wheels} wheels.`); // specs method
  }
}

const myCar = new Car('Toyota', 120, 4);
myCar.move(); // prints: Toyota moves at 120 mph
myCar.specs(); // prints: I am a Toyota and I have 4 wheels.

// Aprendendo sobre a palavra-chave 'super'
// A super palavra-chave chama o construtor da classe pai e fornece acesso às suas propriedades e métodos. Vamos considerar um exemplo real de uma maçã que herda de uma fruta.

class Fruit {
  constructor(name) {
    this.name = name; // name property
    console.log(`Calling Fruit constructor with name=${name}`);
  }

  printName() {
    console.log(`Fruit name: ${this.name}`);
  }
}

class Apple extends Fruit {
  constructor(name, color) {
    super(name); // call to parent class constructor
    this.color = color; // color property
    console.log(`Calling Apple constructor with name=${name}, color=${color}`);
  }

  printColor() {
    console.log(`Color of ${this.name} is ${this.color}`);
  }
}

let apple = new Apple('Apple', 'Red');
// Prints:
// Calling Fruit constructor with name=Apple
// Calling Apple constructor name=Apple, color=Red

apple.printName(); // Prints: Fruit name: Apple
apple.printColor(); // Prints: Color of Apple is Red

// ! IMPORTANTE
// ! Aqui, na Apple classe, super o construtor da Fruit classe é chamado para herdar a name propriedade. Se a classe filha Apple não tiver nenhum construtor, o JavaScript chamará automaticamente o construtor da classe pai ao criar uma instância da Apple classe.

// Durante a herança, pode haver casos em que uma child classe precise de um comportamento diferente para um método em relação ao que a parent classe fornece. É aí que entra a redefinição de métodos, também conhecida como sobrescrita de métodos.

// A sobrescrita de métodos permite que uma child classe forneça uma implementação diferente de um método já definido por ela parent. Ao usar o mesmo nome de método e os mesmos parâmetros da child classe, o parent método será sobrescrito.

// Eis um exemplo prático:

class Parent {
  greet() {
    console.log('Hello from Parent');
  }
}

class Child extends Parent {
  // Sobrescrevendo o método da classe pai
  greet() {
    console.log('Hello from Child');
  }
}

const newChild = new Child();
newChild.greet(); // prints: Hello from Child

// No código acima, a Child classe sobrescreve o greet()método de Parent. Quando chamamos o greet()método em uma instância de Child, a mensagem da Child classe é impressa, e não a da Parent classe .

// É uma característica de flexibilidade da Programação Orientada a Objetos (POO) que nos permite tornar nossas classes mais específicas e adequadas ao seu uso pretendido. Sempre manuseie com cuidado — respeite o uso pretendido dos métodos herdados e certifique-se de que o método atualizado atenda às necessidades da sua classe!
