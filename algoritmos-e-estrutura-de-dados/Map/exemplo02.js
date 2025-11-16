// Problema 2: Indexador de Documentos por Palavra-chave
// Agora, vamos passar para um cenário de biblioteca digital, onde você deseja encontrar todos os artigos que mencionam uma palavra específica, digamos, "sustentabilidade". Assim como um bibliotecário que localiza rapidamente livros sobre um tópico, precisamos de um sistema eficiente para indexar palavras aos documentos em que elas aparecem — uma tarefa vital para que os mecanismos de busca modernos funcionem de forma eficaz.

// Utilizar `map` Map se Sets`filter` em JavaScript é semelhante a usar um sistema de catálogo digital — rápido, sem erros e capaz de lidar eficientemente com grandes volumes de dados. Essa abordagem proporciona a funcionalidade de busca rápida para vincular palavras a documentos de forma eficaz.

// Começamos por declarar o nosso Mapa, que funcionará como o nosso sistema de catálogo digital:

const documents = [
  'A sustentabilidade é essencial para o futuro do planeta',
  'Tecnologias verdes promovem sustentabilidade e inovação',
  'O consumo consciente contribui para a sustentabilidade',
  'A inovação tecnológica pode transformar a sociedade',
];

function createKeywordIndex(documents) {
  const index = new Map();
  documents.forEach((doc, docIndex) => {
    let words = doc.split(/\s+/);
    // ['A','inovação','tecnológica','pode','transformar','a','sociedade']

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

const index = createKeywordIndex(documents);
// Map(23) {'A' => Set(2) { 0, 3 },'sustentabilidade' => Set(3) { 0, 1, 2 }}
// a letra 'A' foi associada as linhas 0 e 3
// a palavra 'sustentabilidade' foi associada as linhas 0, 1 e 2

console.log(index);
