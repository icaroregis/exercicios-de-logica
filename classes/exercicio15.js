class Vehicle {
  constructor(make, model, color = 'white') {
    this.make = make;
    this.model = model;
    this.color = color;
  }
}

const vehicle = new Vehicle('Honda', 'Civic');
console.log(vehicle);
