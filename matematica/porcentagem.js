function obterPrecoDoBilhete(idade) {
  if (idade < 18 || idade > 60) {
    return 4000 / 2;
  }
  return 4000;
}

console.log(obterPrecoDoBilhete(15)); // 2000
console.log(obterPrecoDoBilhete(30)); // 4000
console.log(obterPrecoDoBilhete(45)); // 4000
console.log(obterPrecoDoBilhete(75)); // 2000
