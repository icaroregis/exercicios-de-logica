// Ótimo trabalho, Viajante Espacial! Você está pronto para aprimorar nossa mensagem de previsão do tempo? Vamos adicionar as condições meteorológicas de hoje à mensagem.

// Declare uma nova variável representando a condição (por exemplo, `if` sunny ou rainy`else`) e incorpore-a em nosso `if` dinâmico forecastMessage. Em seguida, converta o `if` forecastMessage para usar Template Literals em vez de concatenação.

// Vamos à programação!

let city = 'Orbit City';
let highTemp = 88;
let lowTemp = 59;
let weatherCondition = highTemp > 80 ? 'sunny' : 'rainy';

// Usando Template Literals para criar a mensagem de previsão do tempo
let forecastMessage = `Today's weather for ${city} is ${weatherCondition}: High of ${highTemp} degrees and a low of ${lowTemp} degrees.`;
console.log(forecastMessage);
