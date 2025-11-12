// Vehicle class
class Vehicle {
  constructor() {
    this.mode = 'transport'; // Common property for all vehicles
  }
}

// 'Bike' class extending 'Vehicle'
class Bike extends Vehicle {
  ride() {
    console.log('The bike starts moving!' + ' ' + 'Mode of transport:' + ' ' + this.mode); // Specific method for Bike
  }
}

// Create an instance of Bike
const myBike = new Bike();
myBike.ride(); // Expected Output: The bike starts moving! Mode of transport: transport
