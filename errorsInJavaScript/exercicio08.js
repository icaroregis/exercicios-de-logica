// * A pergunta para você, Pioneiro Galáctico, é a seguinte: como o código garante que a tentativa de operação seja registrada, seja ela bem-sucedida ou não? Execute o código para descobrir!

let isDataSaved = false;

try {
  if (Math.random() < 0.5) {
    throw new Error('Falha ao salvar os dados no banco de dados.');
  }
  isDataSaved = true;
} catch (error) {
  console.log('Houve um problema ao salvar os dados:', error.message);
} finally {
  console.log('Tentativa de operação no banco de dados finalizada. Dados salvos:', isDataSaved);
}
