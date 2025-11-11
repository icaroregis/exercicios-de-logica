// Olá! A jornada de hoje nos leva ao alicerce dos fundamentos da programação orientada a objetos em JavaScript: o encapsulamento . Esse conceito estabelece uma barreira protetora em torno dos dados de um objeto, mantendo-os intocados pelo ecossistema de código externo. Vamos dar uma olhada mais de perto:

// A importância do encapsulamento: fornecer código robusto, versátil e intuitivo.
// Dados privados : como o JavaScript protege determinados dados contra acesso externo.
// Getters e Setters : Essas são as ferramentas que controlam o acesso e a modificação de dados para a proteção e abstração dos mesmos.

// Por que encapsular?
// O encapsulamento desempenha um papel triplo: mantém a integridade, controla a modificação dos dados e fornece abstração de dados — interfaces acessíveis aos usuários. Pense em usar um celular — você interage com uma interface sem interferir em seus circuitos. Seguindo essa mesma lógica, o encapsulamento protege a implementação interna ao mesmo tempo que expõe interfaces seguras.

// Agora, vamos falar sobre Dados Privados : Em JavaScript, devido à falta de suporte nativo, simulamos private dados prefixando um sublinhado ( __) aos nomes das variáveis, indicando que o acesso direto não é recomendado. Vamos ilustrar isso com uma Car classe, introduzindo um private atributo _speed:

class Car {
  constructor() {
    this._speed = 0; // private speed attribute
  }
}

// Nesta classe, _speed considera-se private que não devemos acessá-la diretamente.

// Utilizando Getters e Setters
// Getters e setters são funções que controlam o acesso aos private dados. Em nossa Car classe, uma função getter recupera o _speed atributo. Em contraste, uma função setter o modifica da seguinte forma:

class Car {
  constructor() {
    this._speed = 0; // Initialize speed as 0
  }

  get speed() {
    // Get current speed
    return this._speed;
  }

  set speed(value) {
    // Update speed
    // Speed should stay in the range 0 to 150
    if (value < 0) {
      this._speed = 0;
    } else if (value > 150) {
      this._speed = 150;
    } else {
      this._speed = value;
    }
  }
}

// Esses métodos nos permitem recuperar ou definir a velocidade do carro com segurança.

// Unindo tudo
// Com esses conceitos em mente, podemos construir uma Car classe que demonstre o encapsulamento:

class Car {
  constructor(model) {
    this._model = model; // private model attribute
    this._speed = 0;
  }

  get model() {
    // Getter for model
    return this._model;
  }

  get speed() {
    // Getter for speed
    return this._speed;
  }

  set speed(value) {
    // Setter for speed
    // Speed should be between 0 and 150
    this._speed = value < 0 ? 0 : value > 150 ? 150 : value;
  }
}

// E aqui está como usaremos essa classe (observe que, ao usar métodos com raiz get(/ set), não usamos parênteses):

// Create a new Car instance
let myCar = new Car('Toyota');

// `myCar.model` and `myCar.speed` call corresponding getter methods under the hood
console.log(myCar.model); // Shows: "Toyota"
console.log(myCar.speed); // Shows: 0

// Attempt to set speed beyond its limit
// `myCar.speed = ...` calls the setter method under the hood
myCar.speed = 200;
console.log(myCar.speed); // Shows: 150, speed limit is 150

// Attempt to set negative speed
myCar.speed = -10;
console.log(myCar.speed); // Shows: 0, speed cannot be negative
