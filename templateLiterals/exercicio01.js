let city = 'Las Vegas';
let forecastTemperature = 88;

// Using concatenation
let weatherConcat = 'Today in ' + city + ", it's " + forecastTemperature + ' degrees and sunny.';
console.log(weatherConcat);

// Using template literals
let weatherTemplateLiteral = `Today in ${city}, it's ${forecastTemperature} degrees and sunny.`;
console.log(weatherTemplateLiteral);
