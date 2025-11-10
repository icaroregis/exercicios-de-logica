class Fruit {
  fruitType(type = 'orange') {
    console.log(type);
  }
}

const showFruit = new Fruit();
showFruit.fruitType();
