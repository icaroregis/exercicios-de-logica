// Um sistema de elegibilidade exige que o usuário tenha um Score de Crédito maior que 700 E que ele não esteja na lista de clientes negativados (ehNegativado = false). Além disso, o sistema aceita exceções: o usuário é elegível se o Score for maior que 900 OU se o HistoricoPagamento for estritamente igual a 'Excelente'. Qual das condições if a seguir representa CORRETAMENTE essa lógica de elegibilidade?
let score = 750;
let ehNegativado = false;
let historicoPagamento = 'Excelente';


// Aqui no caso o enNegativado não precisa ser comparado com false, pois ele já é um booleano e não está negativado. 
if (score > 700 || score > 900 || historicoPagamento === 'Excelente') {
  console.log('Usuário elegível');
}
