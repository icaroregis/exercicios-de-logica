class Vehicle {
  constructor(brand) {
    this._brand = brand; // private brand attribute
    this._fuelLevel = 100; // private fuel level attribute
  }

  // Getter for brand
  get brand() {
    return this._brand;
  }

  // Getter and Setter for fuelLevel
  get fuelLevel() {
    return this._fuelLevel;
  }

  set fuelLevel(value) {
    if (value >= 0 && value <= 100) {
      this._fuelLevel = value;
    } else {
      this._fuelLevel = this._fuelLevel;
      console.log('Invalid value! Please enter a value between 0 and 100.');
    }
  }
}

let myVehicle = new Vehicle('Honda');
console.log(myVehicle.brand); // Outputs: Honda
myVehicle.fuelLevel = 10;
console.log(myVehicle.fuelLevel); // Outputs: 10
