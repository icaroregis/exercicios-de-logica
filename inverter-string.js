// Como inverter uma string ?

// ? 1 Forma
// 1. Transformar em Array
// 2. Usar método reverse para inverter os elementos.
// 3. Juntar os caracteres e transformar em string novamente.
function inverterString(string) {
  console.log('função inverterString chamada');
  return string.split('').reverse().join('');
}

console.log(inverterString('amor'));

// ? 2 Forma
// 1. criar variável para armazenar o resultado
// 2. Percorrer a string de trás para frente
// 3. Concatenar cada caractere na variável resultado
// 4. retornar a variável resultado
function inverterString2(string) {
  console.log('função inverterString2 chamada');
  let resultado = '';
  for (let i = string.length - 1; i >= 0; i--) {
    resultado += string[i];
  }
  return resultado;
}

console.log(inverterString2('amor'));

// ? 3 Forma - Recursiva.
// Na recursividade(onde temos um função que chama ela mesma) a função em questão não é executada, pois está sempre chamando ela mesma e vai empilhando cada chamada em uma pilha de execução, ou seja, o JavaScript guarda as informações dessa chamada em uma pilha de execução. Depois que a condição de parada é atingida as funções começam a desempilhar(executar), ou seja, começam a ser executadas no modelo de LIFO(Last in, First out/ última que entrou é o primeiro a sair). Temos o exemplo da impressora, se enviarmos cinco arquivos para imprimir, eles ficarão armazenados em uma pilha de execução, uma coisa é enviar esses arquivos para pilha de execução, outra coisa é executar esses arquivos. No caso aí só é executado quando literalmente a impressora executa o processo de impressão.

// desta forma quando tenho a função abaixo:

//  function inverterString3(string) {
//   console.log('função inverterString3 chamada');
//   if (string === '') return '';
//   return inverterString3(string.substr(1)) + string.charAt(0);
// }

// 'amor'

// 1 loop
// 'amor'.substr(1) => retira o 1 caractere = 'mor'
// 'amor'.charAt(0) pega o primeiro caractere da string = a

// 2 loop
// 'mor'.substr(1) => retira o 1 caractere = 'or'
// 'mor'.charAt(0) pega o primeiro caractere da string = m

// 3 loop
// 'or'.substr(1) => retira o 1 caractere = 'r'
// 'or'.charAt(0) pega o primeiro caractere da string = o

// 4 loop
// 'r'.substr(1) => retira o 1 caractere = ''
// 'r'.charAt(0) pega o primeiro caractere da string = r

// encontrou a condição de parada então parou de empilhar e agora começa a executar.

// 1 execução
// resultado 1 = '' condição de parada.
// resultado 2 = 'r'

// concatenando => '' + 'r' = R

// 2 execução
// resultado 1 = 'r' resultado da execução anterior que deu r.
// resultado 2 = 'o'

// concatenando => 'r' + 'o' = RO

// 3 execução
// resultado 1 = 'ro' resultado da execução anterior que deu RO
// resultado 2 = 'm'

// concatenando => 'ro' + 'm' = ROM

// 4 execução
// resultado 1 = 'rom' resultado da execução anterior que deu ROM
// resultado 2 = 'a'

// concatenando => 'rom' + 'a' = ROMA

// Por que sempre pegar o resultado da anterior?
// Porque cada função depende da próxima para calcular seu resultado.

function inverterString3(string) {
  console.log('função inverterString3 chamada');
  if (string === '') return '';
  return inverterString3(string.substr(1)) + string.charAt(0);
}

console.log(inverterString3('amor'));

// ? 4 Forma - Usando Spread Operator
// 1. Transformar a string em array usando spread operator
// 2. Usar método reverse para inverter os elementos.
// 3. Juntar os caracteres e transformar em string novamente.
function inverterString4(string) {
  console.log('função inverterString4 chamada');
  return [...string].reverse().join('');
}

console.log(inverterString4('amor'));

// ? 5 Forma - Usando reduce
// 1. Transformar a string em array usando spread operator
// 2. Usar método reduce para concatenar os caracteres na ordem inversa
// 3. Retornar o resultado
function inverterString5(string) {
  console.log('função inverterString5 chamada');
  return [...string].reduce((acc, char) => char + acc, '');
}

console.log(inverterString5('amor'));

// ? 6 Forma - Usando for...of
// 1. criar variável para armazenar o resultado
// 2. Percorrer a string usando for...of
// 3. Concatenar cada caractere no início da variável resultado
// 4. retornar a variável resultado
function inverterString6(string) {
  console.log('função inverterString6 chamada');
  let resultado = '';
  for (const char of string) {
    resultado = char + resultado;
  }
  return resultado;
}

console.log(inverterString6('amor'));
