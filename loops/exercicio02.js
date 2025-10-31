let spacecraft = {
  name: 'Endeavour',
  mission: 'Mars Exploration',
  launchYear: 2025,
};

// ! mostrar todas as chaves e valores do objeto spacecraft usando um loop for in
for (let key in spacecraft) {
  console.log(key, ':', spacecraft[key]);
}
