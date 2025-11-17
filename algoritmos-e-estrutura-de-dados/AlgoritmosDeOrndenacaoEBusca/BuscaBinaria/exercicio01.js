// Imagine que você precisa encontrar um livro específico em um banco de dados de biblioteca bem organizado. O código fornecido demonstra como implementar uma busca binária recursiva para localizar um número em um array ordenado. Clique Run para ver como a função encontra o índice do número de forma eficiente!

function findNumberIndex(arr, start, end, numToFind) {
  if (start > end) return -1;

  let mid = Math.floor((start + end) / 2);
  let midNum = arr[mid];

  if (midNum === numToFind) return mid;
  else if (midNum < numToFind) return findNumberIndex(arr, mid + 1, end, numToFind);
  else return findNumberIndex(arr, start, mid - 1, numToFind);
}

let nums = [2, 5, 12, 30, 54];
let numToSearch = 12;
let index = findNumberIndex(nums, 0, nums.length - 1, numToSearch);
console.log(index); // Outputs: 2
