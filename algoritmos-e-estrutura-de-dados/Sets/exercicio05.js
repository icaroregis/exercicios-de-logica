// Muito bem, Stellar Navigator, vamos imaginar que temos um array de inteiros — imagine-o como um conjunto lotado de endereços de e-mail, onde alguns endereços aparecem mais de uma vez. Sua missão? Escrever uma função que percorra esse conjunto e resgate apenas os IDs de endereço únicos.

// Essa função receberá o array original como entrada. Quanto à saída, ela deverá retornar um array, mas desta vez contendo apenas os IDs únicos. Pense nisso como uma limpeza na lista, removendo os endereços duplicados para que cada endereço de e-mail seja único.

// A parte complicada pode ser lidar com esses casos extremos. Arrays podem ser criaturas imprevisíveis – vazios ou completamente cheios. É sua responsabilidade lidar com ambos. Então, pronto para mergulhar de cabeça, Navegador?

const processAddresses = function (addresses) {
  return Array.from(new Set(addresses));
};

let addresses = [1, 2, 3, 2, 1, 5, 3, 1, 2, 1, 4, 5, 6];
let uniqueAddresses = processAddresses(addresses);
console.log(uniqueAddresses); // It should return [1, 2, 3, 5, 4, 6]
