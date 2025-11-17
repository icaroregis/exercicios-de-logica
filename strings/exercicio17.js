// Regan foi possuída e agora fala em uma linguagem estranha 😱. O padre Karras descobriu que quando Regan está possuída, inverte completamente as palavras que diz, mas mantém a ordem das frases.

// Sua missão é criar um programa que traduza as mensagens possuídas de Regan para a linguagem humana normal.

// Por exemplo:

// const message = 'i yojne gnihctaw uoy'
// translatePossessed(message) // "i enjoy watching you"
// Os espaços entre palavras devem ser mantidos:

// const message = 'siht si gnorw'
// translatePossessed(message) // "this is wrong"
// Se a mensagem estiver vazia ou apenas contiver espaços, devolva uma string vazia:

// const message = '      '
// translatePossessed(message) // ""
// As palavras podem conter maiúsculas e minúsculas, e devem ser mantidas:

// const message = 'dooG secitcarP'
// translatePossessed(message) // "Good Practices"

function translatePossessed(message) {
  if (message.trim().length === 0) return '';
  const formattedText = message
    .split(' ')
    .map((word) => [...word].reverse().join(''))
    .join(' ');
  return formattedText;
}

console.log(translatePossessed('i yojne gnihctaw uoy'));
// console.log(translatePossessed('     '));
