// Sua tarefa neste exercício é escrever uma função recursiva que calcule a soma dos dígitos de um número dado. Mãos à obra!

function sumDigits(number) {
  if (number <= 10) {
    console.log(number);
    return number;
  } else {
    console.log(number);
    return (number % 10) + sumDigits(Math.floor(number / 10));
  }
}
console.log(sumDigits(54321)); // Should print 15 (5+4+3+2+1)

// primeira parte
// 5432 % 10 => 1
// 543 % 10 => 2
// 54 % 10 => 3
// 5 % 10 => 4
// 5

// segunda parte
// 5 + 4 + 3 + 2 + 1 = 15
