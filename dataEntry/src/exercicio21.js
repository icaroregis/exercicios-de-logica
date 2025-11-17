import readline from 'readline-sync';

function verifyAges() {
  const ageList = [];
  for (let age = 0; age < 10; age++) {
    const peopleAge = Number(readline.question(`Qual a idade da ${age + 1} pessoa? `));
    ageList.push(peopleAge);
  }
  const removeDuplicateNumbers = Array.from(new Set(ageList));
  const highestNumber = Math.max(...removeDuplicateNumbers);
  const lowestNumber = Math.min(...removeDuplicateNumbers);
  const average =
    removeDuplicateNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
    removeDuplicateNumbers.length;
  const filterOutMinors = ageList.filter((age) => age < 18).length;
  console.log('\n****Resumo****\n');
  console.log(
    `A menor idade é: ${lowestNumber}\nA maior idade é: ${highestNumber}\nA média das idades é: ${average}\n${filterOutMinors} são menores de idade`,
  );
}
verifyAges();

// tambem pode ser usado o método sort()
const numeros = [5, 2, 9, 1, 7];
numeros.sort((a, b) => a - b);
console.log(numeros); // [1, 2, 5, 7, 9]

const numeros2 = [5, 2, 9, 1, 7];
numeros2.sort((a, b) => b - a);
console.log(numeros2); // [9, 7, 5, 2, 1]
