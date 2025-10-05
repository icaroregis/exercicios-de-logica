function soma(a, b) {
  return a + b;
}

function multiplica(a, b) {
  return a * b;
}

function subtrai(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function executa(operacao, x, y) {
  if (operacao === 'soma') {
    return soma(x, y);
  } else if (operacao === 'multiplica') {
    return multiplica(x, y);
  } else if (operacao === 'subtrai') {
    return subtrai(x, y);
  } else if (operacao === 'divide') {
    return divide(x, y);
  } else {
    return 'Operação inválida';
  }
}
