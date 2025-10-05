function obterMesagemVotacao(idade) {
  if (idade >= 16) {
    return 'Você está autorizado a votar';
  }

  return 'Você não está autorizado a votar';
}
