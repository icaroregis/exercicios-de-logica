// Objetivo: Criar um algoritmo que colete o nome, peso, cor da pelagem e idade de um pet, armazenando esses dados em um único objeto.  Além disso, o algoritmo deve adicionar uma nova propriedade chamada obesidade a esse objeto, classificando o pet como "Obeso(true)" se o seu peso corporal for mais de 20% acima do peso ideal (ou valor de referência).
// Observação: Solicite ao usuário o valor de referência.
import readline from 'readline-sync';

const petInformation = {};
petInformation.name = readline.question('Qual o nome do seu PET? ');
petInformation.weight = parseFloat(readline.question('Qual o peso do seu PET? '));
petInformation.color = readline.question('Qual a cor do seu PET? ');
petInformation.age = parseFloat(readline.question('Qual a idade do seu PET? '));
petInformation.reference = parseFloat(readline.question('Qual o peso de referência para seu pet? '));

function animalWeight(petData) {
  petData.referenceCalc = (petData.reference * 20) / 100 + petData.reference;
  if (petData.weight > petData.reference) {
    petData.obesity = true;
    console.log(
      `\nSeu pet está obeso pois seu peso é: ${petData.weight}kg.
Peso ideal: no máximo até ${petData.referenceCalc}kg.
Seu pet está com ${petData.weight - petData.referenceCalc}kg a mais.`,
    );
    return;
  }
  console.log(
    `Peso do seu pet está ideal.
Peso:${petData.weight}.
Peso de referência: ${petData.reference}.`,
  );
}
animalWeight(petInformation);
