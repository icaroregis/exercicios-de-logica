//! Getters e Setters devem terem a mesma nomenclatura.
class Vehicle {
  constructor(vehicleName) {
    this._vehicleName = vehicleName;
    this._fuelLevel = 100;
  }

  set fuelLevel(level = 100) {
    return (this._fuelLevel = level);
  }

  get fuelLevel() {
    return this._fuelLevel;
  }

  set fuelLevel(level) {
    return (this._fuelLevel = level);
  }
}

const orion = new Vehicle();

orion.fuelLevel = 100;
console.log(orion.currentFuelLevel);

orion.fuelLevel = 50;
console.log(orion.currentFuelLevel);
