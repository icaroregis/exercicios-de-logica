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

patientInformation.name = readline.question(`Qual o nome ${description}? `);
patientInformation.age = parseFloat(readline.question(`Qual o idade ${description}? `));
patientInformation.weight = parseFloat(readline.question(`Qual o peso ${description}? `));
patientInformation.height = parseFloat(readline.question(`Qual a altura ${description}? `));

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
}
calcImc(imcMessages, patientInformation);
