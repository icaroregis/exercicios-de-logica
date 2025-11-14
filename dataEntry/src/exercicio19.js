import readline from 'readline-sync';

function registerPeople() {
  const listPeoples = [];
  for (let people = 0; people < 5; people++) {
    const peopleName = readline.question(`Digite o número da ${people + 1} pessoa: `);
    listPeoples.push(peopleName);
  }
  console.log('Fila Inicial');
  listPeoples.forEach((people) => {
    console.log(`Nome: ${people}`);
  });
  for (let removePerson = 0; removePerson < 3; removePerson++) {
    console.log(`Removendo pessoa: ${listPeoples[listPeoples.length - 1]}`);
    listPeoples.pop();
    console.log('**Lista Atualizada**');
    listPeoples.forEach((people) => {
      console.log(`Nome: ${people}`);
    });
    console.log(' ');
  }
}
registerPeople();
