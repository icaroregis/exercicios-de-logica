// Muito bem, Stellar Navigator, imagine que você é o administrador de um site popular e monitora as visitas de vários usuários. Você tem uma lista de números identificadores associados a cada visita, onde cada número representa um usuário único. Agora, imagine uma situação em que um deles é o primeiro da lista a atingir uma frequência de visitas superior a [inserir valor aqui]. n/4 onde 'n' é o número total de visitas. Nesse caso, você precisa determinar quem é esse usuário.

// Nota : Os números de identificação são inteiros não negativos, mas ignore os casos em que o identificador é zero. Se nenhum usuário atingir uma frequência maior que n/4 sua função deve retornar -1.

// Sua jornada o aguarda, mas lembre-se: não tenha pressa e mantenha os olhos nas estrelas!

function frequentUser(visits) {
  const countMap = new Map();
  const majorityThreshold = visits.length / 4;
  for (let visit of visits) {
    if (visit === 0) {
      continue;
    }
    countMap.set(visit, (countMap.get(visit) || 0) + 1);
    if (countMap.get(visit) > majorityThreshold) {
      return visit;
    }
  }
  return -1;
}

console.log(`Frequent User: ${frequentUser([1, 2, 3, 1, 1, 3, 1, 1, 1, 1])}`);
// Expected output: 1
// Explanation: User 1 is the first in the list to reach more than 10/4 (2.5) visits.

console.log(`Frequent User: ${frequentUser([5, 0, 5, 0, 5, 0, 5, 0, 1, 1, 1, 1, 1])}`);
// Expected output: 5
// Explanation: User 5 is the first in the list to reach more than 13/4 (3.25) visits.

console.log(`Frequent User: ${frequentUser([3, 2, 2, 1, 3, 2, 3, 0, 0, 1, 1, 4])}`);
// Expected output: -1
// Explanation: No user exceeds 12/4 (3) visits in this list.
