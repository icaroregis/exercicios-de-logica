// ? Funções e exceções em JavaScript
// ? Vamos analisar o funcionamento das exceções dentro de funções. Exceções podem ser lançadas de qualquer lugar dentro de uma função usando a palavra-chave `throw`. Por exemplo:

function validateBaseID(baseID) {
  if (baseID <= 0) {
    throw new Error('Invalid ID!');
  }
}

// ! Nesse cenário, uma exceção é lançada se o valor baseIDfor inválido. Uma exceção interrompe a execução normal da função até ser capturada.

// ! Alternativamente, poderíamos lançar uma exceção new Error("Invalid ID!");; nesse caso, a mensagem de erro ao capturar o erro estará acessível no messagecampo.

// ! Capturar e relançar exceções em funções JavaScript
// ! O padrão comum em funções é capturar uma exceção, implementar uma ação de tratamento (como registrar um log ou processar o caso de erro) e, opcionalmente, relançá-la se precisarmos permitir que a exceção sinalize um problema para quem chamou a função. Veja o exemplo a seguir:

function inspectAndDeliverCargo(baseID) {
  try {
    validateBaseID(baseID); // If an exception is thrown, it gets caught here
    console.log('Cargo inspection complete...');
  } catch (exception) {
    console.log('Error with cargo inspection: ', exception.message);
    throw exception; // rethrowing the caught exception, the caller will receive it
  }
}

try {
  inspectAndDeliverCargo(-1);
} catch (ex) {
  console.log('Cargo delivery failed! Reason: ' + ex.message);
}
// Prints:
// Error with cargo inspection: Invalid ID!
// Cargo delivery failed! Reason Invalid ID!

// * Explicação detalhada:
// * 1. Função inspectAndDeliverCargo
function inspectAndDeliverCargo(baseID) {
  try {
    validateBaseID(baseID); // Se lançar exceção, cai no catch abaixo
    console.log('Cargo inspection complete...');
  } catch (exception) {
    console.log('Error with cargo inspection: ', exception.message);
    throw exception; // Relança a exceção para quem chamou a função
  }
}

// * O que faz:
// * Tenta validar o ID da carga. Se o ID for inválido, a função validateBaseID lança um erro.
// * O try...catch interno:
// * Se um erro for lançado, ele é capturado, uma mensagem de erro é exibida, e o erro é relançado (throw exception) para que o código que chamou essa função também saiba que houve um problema.

// * 2. Bloco try...catch externo
try {
  inspectAndDeliverCargo(-1);
} catch (ex) {
  console.log('Cargo delivery failed! Reason: ' + ex.message);
}

// * O que faz:
// * Chama a função inspectAndDeliverCargo com um ID inválido (-1).
// * O try...catch externo:
// * Como a função relançou a exceção, esse bloco captura o erro e exibe uma mensagem final para o usuário.
