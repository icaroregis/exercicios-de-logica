import readline from 'readline-sync';

// let message =
//   'Prezados responsáveis da EmpresaX, Venho por meio desta reclamar sobre uma tentativa de burlar o sistema por parte de um indivíduo identificado como Ladrão. O CPF envolvido é 123.456.789-00. Solicito providências imediatas para evitar prejuízos e garantir a segurança dos clientes.';

function formatString(message) {
  const formattedMessage = message
    .toUpperCase()
    .replaceAll('BURLAR', 'ADULTERAR')
    .replaceAll('LADRÃO', 'MAL-CARÁTER')
    .replaceAll('EMPRESAX', 'RAZÃO SOCIAL')
    .replaceAll(/\b\d{3}\.\d{3}\.\d{3}-\d{2}\b/g, 'DADO PESSOAL')
    .toLowerCase();

  return `${formattedMessage.charAt(0).toUpperCase()}${formattedMessage.slice(1)}`;
}

const newMessage = readline.question('Digite a mensagem a ser formatada: ');
console.log('\n Mensagem formatada: \n');
console.log(formatString(newMessage));
