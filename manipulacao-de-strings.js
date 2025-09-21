// Dada uma sequência de dígitos, você deve substituir qualquer dígito abaixo de 5 por ‘0’ e qualquer dígito 5 e acima por ‘1’. Retorne a sequência resultante.

// Observação: a entrada nunca será uma sequência vazia.

function fakeBin(x) {
  return x
    .split('')
    .map((number) => (Number(number) < 5 ? '0' : '1'))
    .join('');
}
