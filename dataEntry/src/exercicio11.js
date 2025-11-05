import readline from 'readline-sync';

function aprovarEmprestimo(rendaComprovada, clienteAntigo, preferencial, nomeNegativado) {
  if (nomeNegativado) {
    return `Empréstimo negado. Cliente com nome negativado.`;
  } else if (rendaComprovada || (clienteAntigo && preferencial)) {
    return `Empréstimo aprovado para o cliente.`;
  }
}

let rendaComprovada = readline.question('O cliente possui renda comprovada? (sim/não): ') === 'sim';
let clienteAntigo = readline.question('O cliente é antigo? (sim/não): ') === 'sim';
let preferencial = readline.question('O cliente é preferencial? (sim/não): ') === 'sim';
let nomeNegativado = readline.question('O cliente possui nome negativado? (sim/não): ') === 'sim';

console.log(aprovarEmprestimo(rendaComprovada, clienteAntigo, preferencial, nomeNegativado));
