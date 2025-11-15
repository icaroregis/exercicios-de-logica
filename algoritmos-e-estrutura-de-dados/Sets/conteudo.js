// Entendendo o que são conjuntos
// Em JavaScript, os conjuntos são como coleções de gemas únicas. Considere um banco de dados de usuários com `users` Alice, Bob`usernames` e ` David usernames`. Veja como implementaríamos isso:

let users = new Set(); // Create a Set
users.add('Alice'); // Add Alice
users.add('Bob'); // Add Bob
users.add('David'); // Add David
users.add('Alice'); // Attempt to add Alice again

console.log(users); // Set(3) { 'Bob', 'Alice', 'David' } => retorna um objeto
console.log(users.size); // 3

// "Alice" é adicionada apenas uma vez. Os conjuntos garantem que cada pérola seja única, tornando eficiente verificar rapidamente se um usuário já existe. Podemos examinar o tamanho do conjunto usando .size o método. Observe que o conjunto não está ordenado e não podemos garantir que os elementos serão exibidos na ordem em que foram adicionados.

// Análise detalhada da implementação de conjuntos
// Os conjuntos funcionam de forma semelhante aos objetos JavaScript, mas são projetados para serem únicos. Eles usam hashing , uma maneira de converter um elemento em um código único, o que facilita o armazenamento e a recuperação rápidos. Ao verificar se um item está em um conjunto, o JavaScript calcula seu código hash para localizá-lo, como um mapa que leva a um tesouro.

// Exemplo prático: verificação rápida de existência usando Set (hashing por baixo dos panos)
const emails = new Set();
emails.add('alice@email.com');
emails.add('bob@email.com');
emails.add('carol@email.com');

// Verificando se um email já está cadastrado (rápido graças ao hashing)
if (emails.has('bob@email.com')) {
  console.log('Email já cadastrado!');
} else {
  console.log('Novo email, pode cadastrar.');
}

// Adicionando um email duplicado não altera o conjunto
emails.add('alice@email.com');
console.log(emails); // Set(3) { 'alice@email.com', 'bob@email.com', 'carol@email.com' }

// Análise de Complexidade de Conjuntos
// A eficiência é um pilar fundamental na programação, e os conjuntos (Sets) se destacam nesse quesito. Eles proporcionam operações de tempo constante, o que significa que o tempo necessário para adicionar, excluir ou verificar um item em um conjunto permanece o mesmo, independentemente do tamanho do conjunto.

// Exemplo prático: tempo constante para adicionar, remover e verificar itens em um Set

const numeros = new Set();

// Adicionando 1 milhão de números ao Set
for (let i = 0; i < 1_000_000; i++) {
  numeros.add(i);
}

// Verificando se um número está presente (operação rápida, independente do tamanho)
console.log(numeros.has(999_999)); // true

// Removendo um número (também rápido)
numeros.delete(123456);

// Adicionando um novo número (também rápido)
numeros.add(1_000_001);

// Todas essas operações (add, has, delete) são feitas em tempo constante O(1), mesmo com milhões de itens!

// Benefícios práticos do uso de conjuntos
// Os conjuntos têm inúmeras aplicações práticas no gerenciamento de bancos de dados, análise de dados e muito mais. Por exemplo, considere o rastreamento de visitantes únicos de um site:

let visitors = new Set(); // Create a Set

visitors.add('user123'); // A visitor
visitors.add('user345'); // Another visitor

// Check if a user has visited before
if (visitors.has('user123')) {
  console.log('This user has visited before!'); // "This user has visited before!"
}

// Com o Sets, verificar visitas anteriores torna-se notavelmente eficiente.

// Hoje, vamos abordar dois problemas que demonstram como o JavaScript Sets pode simplificar seu código e otimizar o desempenho. Os Sets objetos em JavaScript são uma maneira poderosa de lidar com coleções de itens únicos, tornando-os a estrutura de dados ideal para resolver problemas de unicidade e teste de pertinência.

// Problema 1: Verificar se dois conjuntos são disjuntos
// Vamos começar considerando a função `disjoint` areDisjoint, que recebe dois arrays e determina se eles são disjuntos, ou seja, se não possuem elementos em comum. Isso é crucial ao analisar conjuntos de dados em busca de valores sobrepostos, de forma semelhante a garantir que duas peças de quebra-cabeças diferentes não se encaixem.

// Imagine duas empresas que desejam promover seus produtos em conjunto, mas que querem atingir clientes que ainda não interagiram com nenhuma das duas marcas. Garantir que seus esforços promocionais sejam independentes torna-se essencial.

// Função para verificar se dois arrays são disjuntos usando Set
function areDisjoint(arr1, arr2) {
  const set1 = new Set(arr1);
  for (const item of arr2) {
    if (set1.has(item)) {
      return false; // Encontrou elemento em comum
    }
  }
  return true; // Não encontrou nenhum elemento em comum
}

// Exemplo prático 1: conjuntos disjuntos
const clientesEmpresaA = ['Ana', 'Bruno', 'Carlos'];
const clientesEmpresaB = ['Diana', 'Eduardo', 'Fernanda'];

console.log(areDisjoint(clientesEmpresaA, clientesEmpresaB)); // true (não há clientes em comum)

// Exemplo prático 2: conjuntos NÃO disjuntos
const clientesEmpresaC = ['Ana', 'Bruno', 'Carlos'];
const clientesEmpresaD = ['Carlos', 'Eduardo', 'Fernanda'];

console.log(areDisjoint(clientesEmpresaC, clientesEmpresaD)); // false (Carlos está nos dois)

// Problema 1: Construção de Soluções Eficientes
// Considere um cenário com uma lista de nomes e um scanner super-rápido que pode dizer imediatamente se um nome está na lista. Em termos de JavaScript, é isso que Set so método oferece has uma maneira de verificar a presença em tempo real.

// Vamos construir a solução, tendo essa analogia em mente, passo a passo:

// Transfira os elementos de uma matriz para o nosso scanner super-rápido, também Set conhecido como set1.
// Forneça nomes do outro array para o analisador usando o .some() método para verificar se set1 ele encontra uma correspondência. O método `some()` testa se pelo menos um elemento no conjunto passa no teste implementado pela função fornecida.
// Como queremos determinar se não há gêmeos (elementos em comum), invertemos o resultado de `is_gender`, .some() pois ele retorna `true` true se encontrar pelo menos uma correspondência.

// Defining the function areDisjoint
function areDisjoint(array1, array2) {
  const set1 = new Set(array1);
  return !array2.some((element) => set1.has(element));
}

// Example calls to the function, highlighting the differences in arrays
console.log(areDisjoint(['Alice', 'Bob', 'Charlie'], ['Xander', 'Yasmine', 'Zane'])); // true, no common names
console.log(areDisjoint(['Alice', 'Bob', 'Charlie'], ['Charlie', 'Delta', 'Echo'])); // false, 'Charlie' is common to both

// Este código ilustra como Sets podemos indicar rapidamente se duas listas compartilham elementos, produzindo resultados true para listas completamente distintas e false resultados diferentes caso contrário.

// Vejamos como podemos aplicar isso de forma elegante no código:

// Primeiro, criamos uma lista Seta partir do nosso array. Tínhamos um assistente que filtrava automaticamente os nomes duplicados das nossas listas.
// Em seguida, convertemos nossa lista Set, agora contendo nomes únicos, de volta em um array, pronto para uso em nosso sistema de lista de convidados.

// Defining the removeDuplicates function
function removeDuplicates(array) {
  return Array.from(new Set(array));
}

console.log(removeDuplicates(['apple', 'apple', 'banana', 'banana', 'cherry'])); // ['apple', 'banana', 'cherry']
console.log(removeDuplicates([1, 5, 3, 5, 2, 2, 1])); // [1, 5, 3, 2]

// Esses exemplos demonstram como Sets lidar elegantemente com a remoção de duplicatas, produzindo arrays que representam de forma sucinta os elementos únicos que originalmente continham.

// Bem-vindos à nossa exploração focada em JavaScript Sete suas notáveis ​​aplicações na resolução de desafios algorítmicos. Nesta lição, " Desvendando os Mistérios da Unicidade e dos Anagramas com Conjuntos em JavaScript ", exploraremos como essa poderosa estrutura de dados pode ser usada para abordar e resolver certos tipos de problemas comumente encontrados em entrevistas técnicas.


