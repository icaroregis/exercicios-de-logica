class Vehicle {
  constructor(speed) {
    this.speed = speed; // speed property
  }
  move() {
    console.log(`The bicycle is moving at a speed of ${this.speed} km/h.`);
  }
}

class Bicycle extends Vehicle {
  constructor(speed, hasBell) {
    super(speed);
    this.hasBell = hasBell;
  }
  ringBell() {
    this.hasBell ? console.log('Ring Ring!') : console.log('This bicycle has no bell.');
  }
}

const myBicycle = new Bicycle(15, true);
myBicycle.move(); // should print the movement speed of the Bicycle
myBicycle.ringBell(); // should print a message if the Bicycle has a bell
