function exportarMinusculasCSV(itens) {
  return itens.map((item) => item.toLowerCase()).join(', ');
}
console.log(exportarMinusculasCSV(['Abacaxi', 'Bomba', 'Casa', 'Dinheiro']));
