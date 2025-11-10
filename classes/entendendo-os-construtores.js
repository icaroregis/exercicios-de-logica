// Entendendo os Construtores
// Bem-vindos a bordo da nave espacial da Programação Orientada a Objetos ! Hoje, vamos explorar os construtores dentro das classes JavaScript, que são fundamentais para criar e inicializar objetos. Imagine um construtor como uma receita, definindo os ingredientes necessários para cada objeto, assim como para cada biscoito.

// Os construtores são métodos exclusivos das classes JavaScript, chamados automaticamente ao criar um novo objeto. Assim como uma receita de bolo, os construtores fornecem os ingredientes para nossos objetos.

// Se não definirmos um construtor, o JavaScript fornece um padrão. É como uma receita em branco esperando pela sua criação personalizada!

// Os construtores são definidos usando a palavra-chave ` constructorconstructor` dentro de uma classe. Eles podem aceitar parâmetros que ajudam a inicializar os atributos do objeto. Isso é semelhante a uma receita que especifica quais ingredientes são necessários e a quantidade de cada um. Aqui está um exemplo de um construtor dentro de uma classe:

class Car {
  // This is our constructor with three parameters
  constructor(brand, model, color = 'white') {
    this.brand = brand; // assigning parameter 'brand' to the object property 'brand'
    this.model = model; // 'model' to 'model'
    this.color = color; // 'color' to 'color'
    console.log(`Instantiated a Car instance with brand=${brand}, model=${model}, color=${color}`);
  }
}

let myCar = new Car('Toyota', 'Corolla', 'red');
// Prints a message from constructor:
// Instantiated a Car instance with brand=Toyota, model=Corolla, color=red
