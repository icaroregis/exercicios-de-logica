// Você consegue identificar o que está errado com nossa função fatorial? Examine o código e corrija o erro para calcular o fatorial de um número com precisão.

function countCakeLayers(layers) {
  if (layers === 1) {
    return 1; // Only one layer
  } else {
    return layers * countCakeLayers(layers - 1); // Count this layer plus the rest
  }
}
console.log(countCakeLayers(5)); // Should print 5

//!A multiplicação de layers * (5 - 1 = 4) nunca acontece pois a cada loop a função é chamada novamente

// 1 loop: 5 * (5 - 1 = 4)
// 2 loop: 4 * (4 - 1 = 3)
// 3 loop: 3 * (3 - 1 = 2)
// 4 loop: 2 * (2 - 1 = 1)
// 5 loop: 1 * 1

// agora quando chega na condição de parada voltamos somando os valores de return
// 5loop: 1 * 4loop: 2 * 3loop: 3 * 2loop: 4 * 1loop: 5 = 120

// countCakeLayers(2) retorna 1 * 2 = 2
// countCakeLayers(3) retorna 2 * 3 = 6
// countCakeLayers(4) retorna 6 * 4 = 24
// countCakeLayers(5) retorna 24 * 5 = 120
