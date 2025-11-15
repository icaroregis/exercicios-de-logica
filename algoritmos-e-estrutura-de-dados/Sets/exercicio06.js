// Muito bem, Viajante Espacial, imagine o seguinte: você recebeu uma tripulação e cada membro possui um ID único composto por caracteres alfanuméricos. Agora, você está analisando esses IDs e precisa encontrar o primeiro que aparece mais de uma vez na matriz. Se todos os IDs forem únicos ou a matriz estiver vazia, retorne uma string vazia.

// Agora vá em frente, mostre sua solução! E não se esqueça, o formato da resposta deve ser uma string — essa string é o nosso ID duplicado que estamos procurando ou uma string vazia se não encontrarmos nenhum número duplicado no array. Arrase, Viajante!

function findFirstDuplicateID(ids) {
  let idSet = new Set();

  for (const item of ids) {
    if (idSet.has(item)) {
      return item.toString();
    } else {
      idSet.add(item);
    }
  }

  return '';
}

console.log(findFirstDuplicateID(['X123', 'A456', 'X123', 'B789', 'A456', 'C111']));
console.log(findFirstDuplicateID(['Z999', 'Y888', 'Z999', 'Y888']));
console.log(findFirstDuplicateID(['E100', 'B200', 'C300', 'E100', 'D400', 'C300']));
