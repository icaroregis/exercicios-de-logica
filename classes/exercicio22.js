class Vehicle {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  move() {
    console.log(`${this.name} is moving at ${this.speed} mph.`);
  }
}

class Bicycle extends Vehicle {
  constructor(name, speed) {
    super(name, speed);
  }
  // sobrescrevendo metodo da classe pai
  move() {
    console.log(`${this.name} is pedaling forward at ${this.speed} mph.`);
  }
}

const myBicycle = new Bicycle('Mountain Bike', 10);
myBicycle.move(); // This should output: Mountain Bike is pedaling forward at 10 mph.
