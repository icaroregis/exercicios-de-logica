let missionDataProcessed = false;

try {
  if (Math.random() < 0.5) {
    throw new Error('Erro ao processar os dados da missão.');
  }
  missionDataProcessed = true;
} catch (error) {
  console.log('Não é possível processar os dados da missão:', error);
} finally {
  // ! O finally é executado independentemente de haver ou não um erro
  if (missionDataProcessed) {
    console.log('Dados da missão processados. Pronto para a decolagem!');
  } else {
    console.log('Preparação da missão falhou. Não é possível prosseguir para a decolagem.');
  }
}
