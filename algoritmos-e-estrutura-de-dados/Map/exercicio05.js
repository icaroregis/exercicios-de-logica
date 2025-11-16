// Muito bem, Navegador Estelar, vamos rumo às estrelas com esta tarefa empolgante. Imagine que você está recebendo sinais cósmicos, mas as palavras alienígenas estão separadas por vírgulas, e não pelos espaços usuais aos quais estamos acostumados. Eles lhe enviaram uma sequência de caracteres e seu objetivo é anotar quantas vezes cada palavra aparece na mensagem. Digamos que seja algo como "olá,navegador,estelar,estelar". O resultado? Uma contagem mostrando "olá: 1, estelar: 3, navegador: 1". Prepare seu foguete de código para decifrar essas palavras galácticas! Vamos ver o que você consegue.

const text =
  'Cosmo,is,an,incredible,technical,companion,with,very,strong,skills,in,Algorithms,and,Data,Structures,and,a,great,teacher,for,technical,interviews.';
const wordCount = new Map();
const words = text.split(',');

for (let word of words) {
  let count = wordCount.get(word) || 0; // Map(20) {'Cosmo' => 1,'is' => 1,'an' => 1}
  wordCount.set(word, count + 1);
}

console.log(wordCount);
