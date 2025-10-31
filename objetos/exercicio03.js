let spacecraft = {
  name: 'Cosmo Pioneer',
  type: 'Shuttle',
  mission: 'Mars Exploration',
};

spacecraft['speed'] = '28,000 km/h';
delete spacecraft['type'];
console.log(spacecraft);
