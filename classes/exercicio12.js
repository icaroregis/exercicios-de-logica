class Vehicle {
  constructor(type, brand, year, color = 'black') {
    this.type = type;
    this.brand = brand;
    this.year = year;
    this.color = color;
  }
}

let showroomVehicle = new Vehicle('car', 'Tesla', 2022);
console.log(showroomVehicle);
