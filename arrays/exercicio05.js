// Lista de verificação da missão de exploração espacial
let missionChecklist = [
  ['Traje espacial', 'Botas', 'Capacete'], // Equipamento do astronauta
  ['Mapas', 'Bússola', 'Telescópio'], // Ferramentas de navegação
  [300, 400, 'Combustível suficiente'], // Verificação de combustível em litros
];

// A FAZER: Inverter a lista de ferramentas de navegação (2º item na lista aninhada)
missionChecklist[1].reverse();
// A FAZER: Adicionar um item “Luvas” ao final da lista de equipamentos do astronauta
missionChecklist[0].push('Luvas');

console.log(missionChecklist);
