let spaceProbe = {
  name: 'Voyager',
  mission: 'Jupiter exploration',
  launched: 1977,
};

// TODO: Mark spaceProbe's status as active, creating a new property
spaceProbe['status'] = 'ative';
// TODO: Remove the property that keeps the launch year.
delete spaceProbe['launched'];
// TODO: Check if the removed property exists in the object after the removal and print the result
console.log('launched' in spaceProbe);
console.log(spaceProbe);
