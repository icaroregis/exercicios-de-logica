let missionLog = 'Discovery:Earth,Mars,Jupiter,Saturn;Return:Earth';
let discoverySection = missionLog.split(';')[0];
console.log('Discovery section:', discoverySection);

// ? Explicação: O método .split(';') divide a string em um array, usando o ';' como separador.
// ? Resultado do split:
// * ['Discovery:Earth,Mars,Jupiter,Saturn', 'Return:Earth'];
// * O [0] pega o primeiro elemento do array, ou seja, só a parte da descoberta.
// * O que é impresso?
// * console.log('Discovery section:', discoverySection);
// * Vai mostrar:
// * "Discovery section: Discovery:Earth,Mars,Jupiter,Saturn"

let planetsVisited = discoverySection.split(':')[1].split(',');
// ! quando se usa discoverySection.split(':') me retorna esse novo array:
// ! [ 'Discovery', 'Earth,Mars,Jupiter,Saturn' ]
// ! [1] então pega a segunda posição: 'Earth,Mars,Jupiter,Saturn'
// ! Por fim a expressão discoverySection.split(':')[1].split(',') retorna:
// ! [ 'Earth', 'Mars', 'Jupiter', 'Saturn' ]

let itinerary = planetsVisited.join(' -> ');
console.log(itinerary); // Outputs: Earth -> Mars -> Jupiter -> Saturn
