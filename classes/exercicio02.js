class Fruit {
  sayHello(fruitName = 'Papaya') {
    console.log(`Hello! I am a piece of fruit: ${fruitName}`);
  }
}

let myFruit = new Fruit();
myFruit.sayHello();
