// Para entender melhor como a recursão funciona, modifique a countCakeLayers função para que ela imprima uma mensagem cada vez que uma camada for contada. Isso ajudará você a visualizar as chamadas recursivas em ação. Você só precisa adicionar uma pequena console.log instrução para conseguir isso.

function countCakeLayers(layers) {
  if (layers === 1) {
    return 1; // Only one layer
  } else {
    console.log(layers);
    return 1 + countCakeLayers(layers - 1); // Count this layer plus the rest
  }
}

console.log(countCakeLayers(5)); // Should print 5
