let idade = 17;

if (idade >= 18) {
  console.log('Adulto: Acesso total.');
} else if (idade >= 13) {
  console.log('Adolescente: Acesso supervisionado.');
} else if (idade >= 6) {
  console.log('Criança: Acesso restrito.');
} else {
  console.log('Bebê: Acesso negado.');
}
