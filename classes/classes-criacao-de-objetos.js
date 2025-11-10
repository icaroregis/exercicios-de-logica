// * Imagine uma classe JavaScript como uma planta de construção. Seguindo essa planta, podemos criar objetos com estruturas específicas, cada um preenchido com valores diferentes.

class Fruit {}

// * Aqui Fruitestá o nosso modelo ou classe. Esse modelo nos permite gerar uma variedade de objetos de frutas com atributos especializados, de forma semelhante à construção de um edifício.

// * Criar uma instância de uma classe, essencialmente dar vida a um objeto a partir desse modelo, usa a new palavra-chave:

let apple = new Fruit();

// * Neste exemplo, apple trata-se de uma instância ou objeto específico da nossa Fruit classe, semelhante a um edifício construído a partir de uma planta compartilhada.

// ! Incorporando uma função (método) simples dentro de uma classe
// ! Para atribuir comportamentos à nossa classe, incorporamos métodos — que são funções pertencentes a uma classe. Vamos adicionar um printColor método simples à nossa Fruit classe:

class Fruit {
  printColor() {
    console.log('Red'); // This will print out 'Red' when called
  }

  printMessage(name) {
    console.log(`Do you want a fruit, ${name}?`);
  }
}

// ! O printColor método aqui é uma função simples que imprime Red no console. Observe que não incluímos a function palavra-chave — isso ocorre porque a sintaxe de classe do JavaScript funciona dessa maneira.

// ? Agora, vamos gerar uma instância da nossa classe e invocar, ou call, o printColor método que descrevemos anteriormente:

class Orange {
  printColor() {
    console.log('Red'); // This will print out 'Red' when called
  }

  printMessage(name) {
    console.log(`Do you want a fruit, ${name}?`);
  }
}

let orange = new Orange();
orange.printColor(); // Outputs: Red
orange.printMessage('John'); // Outputs: Do you want a fruit, John?

// ? Aproveitamos o printColor método em nossa apple instância, o que resultou na Red impressão da seguinte mensagem no console.
