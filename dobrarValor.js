function obterNotasAumentadasEm2(notas) {
  let aumento = notas.map((nota) => nota + 2);
  return aumento;
}
console.log(obterNotasAumentadasEm2([10, 9, 8, 7, 6]));
