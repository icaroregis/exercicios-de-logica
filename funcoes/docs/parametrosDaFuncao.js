// ! Em JavaScript, os parâmetros rest são usados ​​para lidar com argumentos de comprimento variável. A sintaxe `...nome` coleta todos os argumentos passados ​​para a função em um array — daí o nome parâmetros rest, pois reúnem o "restante" dos parâmetros.

function sendInvitations(host, ...guests) {
  //Loops through and prints an invitation for each guest
  for (let guest of guests) {
    console.log(`Dear ${guest}, ${host} invites you to a cosmic party!`);
  }
}
sendInvitations('Earth', 'Mars', 'Jupiter', 'Saturn');
/*
Prints:
Dear Mars, Earth invites you to a cosmic party!
Dear Jupiter, Earth invites you to a cosmic party!
Dear Saturn, Earth invites you to a cosmic party!*/
