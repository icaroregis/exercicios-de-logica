// Alex acabou de ganhar um novo bambolê, ele adora, mas se sente desanimado porque seu irmão mais novo é melhor do que ele.

// Escreva um programa em que Alex possa inserir (n) quantas vezes o bambolê gira e ele receberá uma mensagem de incentivo:

// Se Alex conseguir 10 ou mais giros, retorne a string “Ótimo, agora passe para os truques”.
// Se ele não conseguir 10 voltas, retorne a string “Continue tentando até conseguir”.

// Traduzido com a versão gratuita do tradutor - DeepL.com

function hoopCount(n) {
  const result = n >= 10 ? 'Great, now move on to tricks' : 'Keep at it until you get it';
  return result;
}
