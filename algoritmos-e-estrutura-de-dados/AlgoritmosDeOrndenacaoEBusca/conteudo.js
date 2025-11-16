// Introdução
// Olá, caro explorador! Hoje, vamos mergulhar no intrigante conceito de "Recursão" — um conceito que lembra os reflexos aparentemente infinitos em uma sala de espelhos. Vamos dissecar a recursão, entender suas complexidades e aprender a usá-la em [algo] JavaScript.

// Imagine uma pilha de panquecas. Para chegar à base, você precisa levantar cada panqueca de cima, uma de cada vez. Essa ação repetida é um exemplo básico de recursão. Em programação, a recursão envolve uma função chamando a si mesma repetidamente até que uma condição específica, conhecida como caso base, seja satisfeita. É como descer uma escada, degrau por degrau, até chegar ao final.

// Aqui está uma JavaScript função simples para ilustrar a recursão:

function recursiveFunction(x) {
  if (x <= 0) {
    // Base case
    console.log('Base case reached');
  } else {
    console.log(x);
    recursiveFunction(x - 1); // Recursive call
  }
}
recursiveFunction(5);
/*Output:
5
4
3
2
1
Base case reached
*/

// Nessa função, x o valor é decrementado em um a cada chamada recursiva até que não seja mais maior que 0, momento em que a recursão termina.

// Definindo o Caso Base
// Considere o caso base como uma placa de pare que guia nossa função, indicando quando a recursão deve cessar. No nosso exemplo da pilha de panquecas, o caso base é quando não há mais panquecas para levantar. Da mesma forma, x <= 0 é o nosso caso base na nossa função. Esse caso base é vital para evitar o caos de uma recursão infinita.

// Definindo o caso recursivo
// O caso recursivo é o que faz a recursão funcionar — refere-se ao processo que reduz gradualmente o tamanho do problema. Cada chamada de função recursiva nos aproxima do caso base. Vamos usar o cálculo do fatorial como exemplo para ilustrar isso.

// Para encontrar o fatorial, multiplicamos um número pelo fatorial desse número menos um e repetimos esse processo até chegarmos a um (nosso caso base):

function factorial(n) {
  if (n === 1) {
    // base case
    return 1;
  } else {
    return n * factorial(n - 1); // recursive case
  }
}
console.log(factorial(3)); // Will print 6 (3 * 2 * 1)

// Neste exemplo, factorial(3) retorna 3 * factorial(2), que por sua vez retorna 2 * factorial(1). Como factorial(1) é igual a 1, toda a cadeia de chamadas recursivas resulta no cálculo de 3 * 2 * 1.

// Dicas para Pensar Recursivamente
// Tente visualizar os problemas como uma boneca russa para organizar seus pensamentos sobre recursão. Cada vez que você abre a boneca, uma menor se revela até chegar à menor boneca — análogo ao caso base — e o processo de desempilhar as bonecas se assemelha ao caso recursivo.

// É crucial lembrar que grandes problemas frequentemente se dividem em subproblemas menores e mais fáceis de resolver. Resolver esses problemas menores e combinar suas soluções pode facilmente solucionar o problema maior.

// Outro exemplo de função recursiva
// Vamos criar uma função que calcule a soma dos dígitos de um número. Um laço de repetição seria suficiente para essa tarefa, mas com o uso inteligente de recursão, a solução se torna mais simples:

function sumOfDigits(num) {
  if (num < 10) {
    // Base case
    return num;
  } else {
    return (num % 10) + sumOfDigits(Math.floor(num / 10)); // Recursive case
  }
}
console.log(sumOfDigits(12345)); // Will print 15 (1+2+3+4+5)

// Nessa função, de forma semelhante ao cálculo do fatorial, passamos Math.floor(num / 10)para o próximo nível de recursão, descartando efetivamente o último dígito em cada chamada recursiva.
