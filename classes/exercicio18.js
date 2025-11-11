class Vehicle {
  constructor(name) {
    this._name = name; // Private attribute _name
    this._fuelLevel = 100; // Private attribute _fuelLevel
  }

  get fuelLevel() {
    return this._fuelLevel;
  }

  set fuelLevel(level) {
    if (typeof level !== 'number' || level < 0 || level > 100) {
      console.log('Invalid value! Please enter a value between 0 and 100.');
      return;
    }
    if (this._fuelLevel < 0) this._fuelLevel = 0;
    this._fuelLevel = level;
  }

  get nameVehicle() {
    return this._name;
  }
}

let myVehicle = new Vehicle('Cybertruck');
myVehicle.fuelLevel = 90;
console.log(myVehicle.fuelLevel);

console.log(myVehicle.nameVehicle);

myVehicle.fuelLevel = 50;
console.log(myVehicle.fuelLevel);
