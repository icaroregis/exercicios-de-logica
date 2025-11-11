class Vehicle {
  constructor(vehicleName) {
    this._vehicleName = vehicleName;
    this._fuelLevel = 100;
  }

  set refuel(level = 100) {
    return (this._fuelLevel = level);
  }

  get currentFuelLevel() {
    return this._fuelLevel;
  }

  set updateFuelLevel(level) {
    return (this._fuelLevel = level);
  }
}

const orion = new Vehicle();

orion.refuel = 100;
console.log(orion.currentFuelLevel);

orion.updateFuelLevel = 50;
console.log(orion.currentFuelLevel);
