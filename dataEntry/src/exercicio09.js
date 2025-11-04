import readlineSync from 'readline-sync';

function calculateConcept(note) {
  if (note < 0 || note > 10) {
    return 'Nota inválida. Por favor, insira uma nota entre 0 e 10.';
  } else if (isNaN(note)) {
    return 'Entrada inválida. Por favor, insira um número válido.';
  }

  let concept;

  switch (true) {
    case note >= 9 && note <= 10:
      concept = 'A';
      break;
    case note >= 7 && note < 8.9:
      concept = 'B';
      break;
    case note >= 5 && note < 6.9:
      concept = 'C';
      break;
    case note < 5:
      concept = 'D';
      break;
    default:
      concept = 'Invalid note provided.';
      break;
  }

  return `Average: ${note.toFixed(2)}, Concept: ${concept}`;
}

const note = parseFloat(readlineSync.question('Digite a sua nota: '));
console.log(calculateConcept(note));
