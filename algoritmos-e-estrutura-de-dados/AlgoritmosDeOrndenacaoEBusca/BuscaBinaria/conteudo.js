// Introdução e Visão Geral da Lição
// Olá! Hoje, vamos explorar a Busca Binária , um algoritmo eficiente que localiza elementos em uma lista ordenada. É como encontrar o número de uma casa em uma rua longa — em vez de começar por uma extremidade, você começa no meio e, dependendo se o número da casa é maior ou menor, você pesquisa na metade direita ou esquerda da lista.

// Vamos aprender a:

// Entenda a Busca Binária .
// Implemente a busca binária usando recursão e iteração em JavaScript.
// Analise a complexidade temporal da Busca Binária.

// Revelando a Busca Binária
// A Busca Binária segue uma estratégia de dividir para conquistar. Ela começa no meio de uma lista ordenada. Se o valor do meio for o desejado, ótimo! Caso contrário, ela usa a ordenação da lista para eliminar metade dela. O lado a ser eliminado é escolhido com base em se o valor alvo é menor ou maior que o valor do meio.

// Implementando Busca Binária Usando Recursão em JavaScript
// Vamos implementar a Busca Binária em JavaScript usando recursão. Aqui está o código, acompanhado de comentários detalhados:

function recursiveBinarySearch(arr, start, end, target) {
  // Caso base: se a área de busca está vazia, o elemento não foi encontrado
  if (start > end) return -1;

  // Calcula o índice do meio do array atual
  let mid = Math.floor((start + end) / 2);

  // Se o elemento do meio é o alvo, retorna o índice
  if (arr[mid] == target) return mid;

  // Se o alvo é menor que o elemento do meio, busca na metade esquerda
  if (arr[mid] > target) return recursiveBinarySearch(arr, start, mid - 1, target);

  // Caso contrário, busca na metade direita
  return recursiveBinarySearch(arr, mid + 1, end, target);
}

// Essa função chama a si mesma recursivamente, reduzindo gradualmente a área de busca até encontrar o alvo.

/*
Explicação detalhada:
- A função recebe um array ordenado, os índices de início e fim da busca, e o valor alvo.
- Primeiro, verifica se a área de busca está vazia (start > end). Se sim, retorna -1 (não encontrado).
- Calcula o índice do meio do intervalo atual.
- Se o valor do meio for igual ao alvo, retorna o índice do meio.
- Se o valor do meio for maior que o alvo, faz uma chamada recursiva para a metade esquerda (start até mid-1).
- Se o valor do meio for menor que o alvo, faz uma chamada recursiva para a metade direita (mid+1 até end).
- O processo se repete até encontrar o alvo ou a área de busca ficar vazia.
*/

// Implementando a Busca Binária usando Iteração em JavaScript
// Aqui, criamos uma busca binária usando um loop while em JavaScript :

function iterativeBinarySearch(arr, target) {
  let start = 0; // Início da área de busca
  let end = arr.length - 1; // Fim da área de busca

  while (start <= end) {
    // Enquanto houver elementos para buscar
    let mid = Math.floor((start + end) / 2); // Calcula o índice do meio
    if (arr[mid] == target) return mid; // Se encontrou o alvo, retorna o índice
    if (arr[mid] < target) start = mid + 1; // Se o alvo é maior, busca na metade direita
    else end = mid - 1; // Se o alvo é menor, busca na metade esquerda
  }
  return -1; // Se não encontrar, retorna -1
}

// Nesta versão, a função não chama a si mesma. Em vez disso, utiliza um laço while para atingir o mesmo objetivo.

// Analisando a complexidade da busca binária
// A Busca Binária reduz o tamanho da entrada pela metade a cada passo, portanto, são necessários log( n) passos para encontrar um alvo em um array de tamanho n. Assim, a complexidade de tempo da Busca Binária é O(log n) .

// Tanto a abordagem recursiva quanto a iterativa compartilham a mesma complexidade de tempo — O(log n) . A escolha entre elas geralmente depende de problemas específicos, restrições e preferências pessoais.
