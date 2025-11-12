class Vehicle {
  constructor(type) {
    this.type = type;
  }
  describe() {
    console.log(`This is a ${this.type}.`);
  }
}

class Bicycle extends Vehicle {
  constructor(type, hasBell) {
    super(type);
    this.hasBell = hasBell;
  }
  ringBell() {
    if (this.hasBell) {
      console.log('Ring Ring!');
    } else {
      console.log('This bicycle has no bell.');
    }
  }
}

const myBike = new Bicycle('mountain bike', true);
myBike.describe(); // Should print: This is a mountain bike.
myBike.ringBell(); // Should print: Ring Ring!
