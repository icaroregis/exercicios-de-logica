class Vehicle {
  constructor(brand) {
    this._brand = brand;
    this._isEngineOn = false;
  }

  get isEngineOn() {
    return this._isEngineOn;
  }

  set isEngineOn(value) {
    this._isEngineOn = !!value;
  }
}

let safetyCar = new Vehicle('Volvo');
safetyCar.isEngineOn = true;
console.log(safetyCar.isEngineOn); // Supposed to print: true, but will it?
