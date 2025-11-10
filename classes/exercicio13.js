class ShowroomVehicle {
  constructor(make, model, year = '2030') {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

let showroomCar = new ShowroomVehicle('Tesla', 'Model S', '2025');
console.log(showroomCar);
