// Entendendo mapas em JavaScript
// Os mapas são estruturas de dados versáteis em JavaScript. Eles armazenam pares de chave-valor e aceitam qualquer tipo de dado como chave — até mesmo objetos e funções!

// Eis como criamos um mapa vazio:

let map = new Map(); // creates an empty Map

// Aqui myMap está um novo mapa em JavaScript, pronto para armazenar suas chaves e valores.

// Explorando os Métodos de Mapeamento
// Os mapas oferecem alguns métodos essenciais integrados:

// set(key, value) Armazena um par chave-valor.
// get(key) Recupera o valor de uma chave.
// has(key) Verifica se uma chave existe e retorna true ou false.
// delete(key): Apaga um par chave-valor.
// size Retorna a contagem de pares chave-valor.
// Para melhor compreensão, vamos aplicar estes métodos:

let myMap = new Map();

// Add pairs with set
myMap.set('apples', 10); // Adds a new pair
myMap.set('bananas', 6); // Adds another pair

// Use get
console.log(myMap.get('apples')); // Outputs: 10, gets apples' value

// Apply has
console.log(myMap.has('bananas')); // Outputs: true, checks for bananas' existence

// Delete with delete
myMap.delete('bananas'); // Deletes bananas and its value from the map

// Check size
console.log(myMap.size); // Outputs: 1; gives the number of pairs

// Nos bastidores: mapas no gerenciamento de memória
// JavaScript utiliza uma tabela hash para implementar mapas. Essa tabela garante que o tamanho do mapa se ajuste com base nos dados armazenados, otimizando o uso da memória.

// Análise da complexidade temporal das operações de mapeamento
// A complexidade temporal das operações get`map`, set`filter`, has`reduce` e `reduce` em Mapas é O(n). Isso significa que elas são executadas instantaneamente, independentemente do tamanho do Mapa.deleteO(1)

// Imagine administrar uma loja com milhares de itens. Um mapa permite que você gerencie qualquer item rapidamente!

let superstoreStock = new Map();

// Stock item
superstoreStock.set('toothpaste', 1000); // Stock 1000 toothpaste
superstoreStock.set('soap', 500); // Stock 500 soap
superstoreStock.set('shampoo', 800); // Stock 800 shampoo

// Purchase is made
console.log(superstoreStock.get('toothpaste')); // Outputs: 1000 (current quantity)
superstoreStock.set('toothpaste', superstoreStock.get('toothpaste') - 1); // A pasta de dentes é comprada
console.log(superstoreStock.get('toothpaste')); // Outputs: 999 (updated quantity)

// Item is out of stock, will be replaced later
superstoreStock.delete('soap'); // Soap is removed
console.log(superstoreStock.has('soap')); // Outputs: false

// Item is restocked
superstoreStock.set('soap', 500); // Soap is restocked
console.log(superstoreStock.has('soap')); // Outputs: true

// Problema 1: Contar a frequência de palavras em um texto
// Imagine que temos um blog. Queremos analisar as postagens para ver quais tópicos são mais discutidos. Uma solução prática envolve escrever uma função para contar a frequência de cada palavra em uma postagem do blog, ignorando maiúsculas e minúsculas e pontuação.

// Essa função é essencial em ferramentas de análise de texto usadas na otimização de mecanismos de busca. Ela pode destacar tópicos populares e até sugerir tags para as postagens, aumentando a visibilidade nos resultados de busca.

// Os mapas são muito úteis, permitindo-nos associar cada palavra única à sua frequência de ocorrência sem esforço. Com isso em mente, podemos rastrear a frequência com que cada palavra aparece com muito menos código e mais rapidamente!

// Vamos começar criando uma função e limpando nossa entrada: removendo a pontuação e convertendo tudo para minúsculas para manter a consistência.

function countWordFrequencies(text) {
  let normalizedText = text.toLowerCase().replace(/[^\w\s]/g, ''); // "olá mundo olá" (exemplo de entrada: "Olá, mundo! Olá.")

  // Divide o texto limpo em palavras separadas por espaço
  let words = normalizedText.split(/\s+/); // ['olá', 'mundo', 'olá']
  let frequencyMap = new Map(); // Mapa vazio inicialmente: Map(0) {}

  // Conta a frequência de cada palavra
  for (let word of words) {
    let count = frequencyMap.get(word) || 0; // Para 'olá': 0 (primeira vez), depois 1 (segunda vez)
    frequencyMap.set(word, count + 1); // Após processar 'olá' duas vezes: Map { 'olá' => 2, 'mundo' => 1 }
  }

  return frequencyMap; // Exemplo de retorno: Map { 'olá' => 2, 'mundo' => 1 }
}

// Problema 2: Abordagem e Construção da Solução
// Em vez disso, o .values() método do Map do JavaScript nos fornece um caminho direto para iterar sobre todos os valores necessários para a nossa soma. É tudo uma questão de ter a ferramenta certa para o trabalho!

// Vamos revisar como escreveríamos uma função simples e concisa para isso. Começaremos inicializando a soma:

function sumOfMapValues(numberMap) {
  let sum = 0;
  for (let value of numberMap.values()) {
    sum += value;
  }
  return sum;
}

// O resultado? Um único número representa o custo total de todas as categorias. Rápido, fácil e um exemplo perfeito das capacidades do JavaScript Map.

// Vamos usar um cenário familiar: em uma festa, é fácil notar que existe uma pessoa que todos parecem conhecer. Essa pessoa, semelhante à "celebridade" da festa, serve como analogia para um elemento em um array que aparece mais da metade das vezes — nossa tarefa é identificar esse elemento "celebridade" em meio a uma multidão de números.

let countMap = new Map();
let majorityThreshold = arr.length / 2;

for (let num of arr) {
  countMap.set(num, (countMap.get(num) || 0) + 1);
  if (countMap.get(num) > majorityThreshold) {
    return num;
  }
  return -1;
}

// Se a contagem terminar sem um vencedor por maioria, retornamos -1, o que significa que não há nenhuma celebridade na festa.

// Problema 2: Indexador de Documentos por Palavra-chave
// Agora, vamos passar para um cenário de biblioteca digital, onde você deseja encontrar todos os artigos que mencionam uma palavra específica, digamos, "sustentabilidade". Assim como um bibliotecário que localiza rapidamente livros sobre um tópico, precisamos de um sistema eficiente para indexar palavras aos documentos em que elas aparecem — uma tarefa vital para que os mecanismos de busca modernos funcionem de forma eficaz.

// Utilizar `map` Map se Sets`filter` em JavaScript é semelhante a usar um sistema de catálogo digital — rápido, sem erros e capaz de lidar eficientemente com grandes volumes de dados. Essa abordagem proporciona a funcionalidade de busca rápida para vincular palavras a documentos de forma eficaz.

// Começamos por declarar o nosso Mapa, que funcionará como o nosso sistema de catálogo digital:

function createKeywordIndex(documents) {
  const index = new Map();
  documents.forEach((doc, docIndex) => {
    let words = doc.split(/\s+/);
    words.forEach((word) => {
      // Indexe as palavras, atribuindo a cada palavra suas referências de documento
      if (index.has(word)) {
        index.get(word).add(docIndex);
      } else {
        // Ao encontrar uma nova palavra, criamos uma nova entrada em nosso índice
        index.set(word, new Set([docIndex]));
      }
    });
  });

  return index;
}
