// Complete a função obterUltimoCaractere() de forma que ela retorne uma matriz contendo o último caractere de cada nome da matriz recebida como parâmetro.

function obterUltimoCaractere(nomes) {
  return nomes.map((nome) => nome[nome.length - 1]);
}

console.log(obterUltimoCaractere(['Alice', 'Bruno', 'Samuel', 'Augusto']));
console.log(obterUltimoCaractere(['samara', 'alexandre', 'carla']));
