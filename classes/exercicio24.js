class Vehicle {
  constructor(name) {
    this.name = name;
  }
  move() {
    console.log(`The ${this.name} is moving at a speed of 20 km/h.`);
  }
}

class Bicycle extends Vehicle {
  constructor(name, hasBell) {
    super(name);
    this.hasBell = hasBell;
  }
  ringBell() {
    this.hasBell ? console.log('Ring Ring!') : console.log('This bicycle has no bell.');
  }
}

const bike = new Bicycle('GTI Roma', true);
bike.move();
bike.ringBell();
