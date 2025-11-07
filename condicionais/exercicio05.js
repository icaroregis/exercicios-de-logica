function licencaVeiculo(idade, licenca) {
  if (idade < 18) {
    console.log('Menor de Idade');
  } else if (licenca === 'A') {
    console.log('Motocicleta');
  } else if (licenca === 'B' || licenca === 'C') {
    console.log('Veículo Leve/Comercial');
  } else {
    console.log('Sem Licença');
  }
}

licencaVeiculo(25, 'A');
