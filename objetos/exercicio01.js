let spaceProbe = {
  name: 'Voyager',
  launchedYear: 1977,
  mission: 'Interstellar',
};

console.log(spaceProbe.name); // Outputs: "Voyager"
delete spaceProbe.launchedYear;
// ! Verifica se a propriedade launchedYear ainda existe no objeto spaceProbe.
console.log('launchedYear' in spaceProbe); // Outputs: false
console.log(spaceProbe);
