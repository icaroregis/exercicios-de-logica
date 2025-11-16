// Você consegue identificar o que está errado com nossa função fatorial? Examine o código e corrija o erro para calcular o fatorial de um número com precisão.

function countCakeLayers(layers) {
  if (layers === 1) {
    return 1; // Only one layer
  } else {
    return 1 + countCakeLayers(layers - 1); // Count this layer plus the rest
  }
}

console.log(countCakeLayers(5)); // Should print 5

// 1 + (5 - 1 = 4)
// 1 + (4 - 1 = 3)
// 1 + (3 - 1 = 2)
// 1 + (2 - 1 = 1)
// 1 + 1

// agora quando chega na condição de parada voltamos somando os valores de return
// 1 + 1 + 1 + 1 + 1 = 5
