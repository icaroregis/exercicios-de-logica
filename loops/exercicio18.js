for (let star = 3; star > 0; star--) {
  let constellation = '';
  for (let planet = 1; planet <= star; planet++) {
    constellation += '🪐';
  }
  console.log(constellation);
}
/*
Expected output:
🪐🪐🪐
🪐🪐
🪐
*/
