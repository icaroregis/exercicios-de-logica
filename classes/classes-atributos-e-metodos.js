// * Pense nos atributos como propriedades. Para uma Dog classe, os atributos podem incluir características como o nome, a idade e o sobrenome name: "Fido", breed: "Poodle", color: "White". Esses atributos descrevem as características de um cachorro como o Fido.

// * Adicionamos atributos ao construtor da classe. Abaixo, estamos definindo o `name` name, breed o `name` e o `hasName` color para a Dog classe:

class Dog {
  name = 'Fido';
  breed = 'Poodle';
  color = 'White';
}

const fido = new Dog();
console.log(fido.name); // Prints: Fido
console.log(fido.breed); // Prints: Poodle
console.log(fido.color); // Prints: White

// ! Entendendo os métodos em classes JavaScript
// ! Métodos são ações que instâncias de uma classe podem executar. Para a Dog classe, os comportamentos podem incluir `init` bark(), eat()`update` e ` sleep()output`. Métodos são funções definidas dentro da classe.

class newDog {
  name = 'Fido';
  breed = 'Poodle';
  color = 'White';

  bark() {
    console.log(`Woof Woof!`);
  }

  eat(food) {
    // "this" corresponds to the reference to the current Dog class instance
    console.log(`${this.name} is eating ${food}.`);
  }

  sleep() {
    console.log(`Zzz...`);
  }
}

const spyke = new newDog();

console.log(spyke.name); // Prints: Fido
console.log(spyke.breed); // Prints: Poodle
console.log(spyke.color); // Prints: White

spyke.bark(); // Prints: Woof Woof!
spyke.eat('bone'); // Prints: Fido is eating bone.
spyke.sleep(); // Prints: Zzz...
