// Vamos usar um cenário familiar: em uma festa, é fácil notar que existe uma pessoa que todos parecem conhecer. Essa pessoa, semelhante à "celebridade" da festa, serve como analogia para um elemento em um array que aparece mais da metade das vezes — nossa tarefa é identificar esse elemento "celebridade" em meio a uma multidão de números.

// Exemplo de array:
let arr = [3, 1, 3, 3, 2]; // 3 aparece 3 vezes, que é mais da metade de 5

function findMajorityElement(arr) {
  let countMap = new Map();
  let majorityThreshold = arr.length / 2;
  for (let num of arr) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
    if (countMap.get(num) > majorityThreshold) {
      return num;
    }
  }
  // Se a contagem terminar sem um vencedor por maioria, retornamos -1, o que significa que não há nenhuma celebridade na festa.
  return -1;
}

console.log(findMajorityElement(arr)); // Saída esperada: 3
