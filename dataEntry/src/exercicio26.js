import readline from 'readline-sync';

const imcMessages = [
  'Abaixo do peso',
  'Peso normal',
  'Sobrepeso',
  'Obesidade grau 1',
  'Obesidade grau 2',
  'Obesidade grau 3',
];

const patientInformation = {};
const description = 'do paciente';
const messages = 'Alérgico à';

function validationLetter(world) {
  return world.trim() === 's';
}

function changeToUppercase(description) {
  const newString = description.slice(3, description.length);
  const result = newString[0].toUpperCase() + newString.slice(1);
  return result;
}

patientInformation.name = readline.question(`Qual o nome ${description}? `);
patientInformation.age = parseFloat(readline.question(`Qual o idade ${description}? `));
patientInformation.weight = parseFloat(readline.question(`Qual o peso ${description}? `));
patientInformation.height = parseFloat(readline.question(`Qual a altura ${description}? `));
const seafood = readline.question(`${changeToUppercase(description)} possui alergia a frutos do mar? (s/n)`);
const bees = readline.question(`${changeToUppercase(description)} possui alergia a abelhas? (s/n)`);
const animalHair = readline.question(`${changeToUppercase(description)} possui alergia a pelos de animais? (s/n)`);
const pollen = readline.question(`${changeToUppercase(description)} possui alergia a pólen? (s/n)`);
const lactose = readline.question(`${changeToUppercase(description)} possui alergia a lactose? (s/n)`);

patientInformation.seafoodAllergy = {
  seafood: validationLetter(seafood),
  bees: validationLetter(bees),
  animalHair: validationLetter(animalHair),
  pollen: validationLetter(pollen),
  lactose: validationLetter(lactose),
};

function calcImc(imcList, infoDataPatient) {
  const imc = infoDataPatient.weight / (infoDataPatient.height * infoDataPatient.height);
  let status = '';
  switch (true) {
    case imc < 18.5:
      status = imcList[0];
      break;
    case imc >= 18.5 && imc <= 24.9:
      status = imcList[1];
      break;
    case imc >= 25 && imc <= 29.9:
      status = imcList[2];
      break;
    case imc >= 30 && imc <= 34.9:
      status = imcList[3];
      break;
    case imc >= 35 && imc <= 39.9:
      status = imcList[4];
      break;
    default:
      status = imcList[5];
  }
  infoDataPatient.health = { imc, patientStatus: status };
  console.log(infoDataPatient.health.patientStatus);
  console.log(
    `\nDados do paciente:
nome: ${infoDataPatient.name}
idade: ${infoDataPatient.age}
peso: ${infoDataPatient.weight}
altura: ${infoDataPatient.height}
${messages} frutos do mar: ${infoDataPatient.seafoodAllergy.seafood ? 'sim' : 'não'}
${messages} abelhas: ${infoDataPatient.seafoodAllergy.bees ? 'sim' : 'não'}
${messages} pelo de animais: ${infoDataPatient.seafoodAllergy.animalHair ? 'sim' : 'não'}
${messages} pólen: ${infoDataPatient.seafoodAllergy.pollen ? 'sim' : 'não'}
${messages} lactose: ${infoDataPatient.seafoodAllergy.lactose ? 'sim' : 'não'}`,
  );
}
calcImc(imcMessages, patientInformation);
