class ShowroomVehicle {
  constructor(make, model, year = '2030') {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

const vehicle = new ShowroomVehicle('Honda', 'Civic', '2022');
console.log(vehicle);
