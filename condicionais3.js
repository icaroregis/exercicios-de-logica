function receberSaudacaoPorPeriodoDoDia(hora) {
  if (hora < 12) {
    return 'Bom dia';
  } else if (hora >= 12 && hora < 20) {
    return 'Boa tarde';
  } else {
    return 'Boa noite';
  }
}
