// Em JavaScript, você pode verificar se uma chave existe dentro de um objeto usando o 'in' operador conforme mostrado abaixo:

let car = {
  color: 'red',
  model: 'sedan',
  manufacturer: 'Toyota',
};

console.log('color' in car); // Outputs: true
console.log('mileage' in car); // Outputs: false

// Neste exemplo, inspecionamos se as chaves 'color'e 'mileage'estão no carobjeto. As saídas esperadas são truee false, respectivamente, já que o carobjeto contém a 'color'chave, mas não a 'mileage'chave.

// Para excluir propriedades de objetos, use a 'delete' palavra-chave, conforme mostrado neste exemplo:

delete car.propellant;
console.log(car); // Outputs: {color: "blue", model: "sedan", manufacturer: "Toyota"}
console.log(car.propellant); // Outputs: undefined
console.log('propellant' in car); // Outputs: false

// Com a deletepalavra-chave, o par chave-valor desaparece completamente.

// JavaScript fornece vários métodos poderosos para interagir com objetos. Os principais entre eles são Object.keys(), Object.values(), e Object.entries(), que retornam matrizes de chaves, valores e pares chave-valor de um objeto, respectivamente.

// Vamos demonstrar isso com um exemplo:

let newCar = {
  color: 'red',
  model: 'sedan',
  manufacturer: 'Toyota',
};

console.log(Object.keys(newCar)); // Outputs: ["color", "model", "manufacturer"]
console.log(Object.values(newCar)); // Outputs: ["red", "sedan", "Toyota"]
console.log(Object.entries(newCar)); // Outputs: [["color", "red"], ["model", "sedan"], ["manufacturer", "Toyota"]]

// No código acima, Object.keys(newCar), Object.values(newCar), e Object.entries(newCar) nos fornecem matrizes contendo as chaves, valores e pares chave-valor do newCar objeto, respectivamente.
