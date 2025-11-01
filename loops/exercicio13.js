// Inicialize a variável para o número de estrelas coletadas em 0
// Inicialize a variável para o nível de oxigênio em 100%

// A FAZER: Escreva um loop while que colete estrelas e verifique o nível de oxigênio.
// Queremos coletar no máximo 10 estrelas, e o nível de oxigênio não deve ser inferior a 28% antes da iteração do loop.
// A FAZER: Dentro do loop, colete uma nova estrela e diminua o nível de oxigênio em 8%.
// Além disso, imprima o número atual de estrelas coletadas e o nível atual de oxigênio após cada iteração.

let starsCollected = 0;
let oxygenLevel = 100;

while (starsCollected < 10) {
  starsCollected++;
  oxygenLevel -= 8;

  if (oxygenLevel < 28) {
    return;
  }

  console.log(`Estrelas coletadas: ${starsCollected}, Nível de oxigênio: ${oxygenLevel}%`);
}
