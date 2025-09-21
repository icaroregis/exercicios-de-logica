function obterLetraDaNota(nota) {
  if (nota >= 15) {
    return 'A';
  } else if (nota >= 10) {
    return 'B';
  } else {
    return 'F';
  }
}
