let array = ['15478', '3214', '12345', '15935', '4524'];

let acumulador = 0;
while (acumulador <= array.length - 1) {
  if (array[acumulador] === '12345') {
    acumulador++;
    //tudo que está depois do continue não é executado, recomeça o loop.
    continue;
  }
  console.log(array[acumulador]);
  acumulador++;
}
