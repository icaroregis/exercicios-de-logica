```js
for (let i = 1; i <= 5; i++) {
  console.log(i); // Will print numbers from 1 to 5
}
```

O For Loop processo é composto por três elementos:

Inicialização : Aqui, i começa em 1.
Condição : O loop persiste enquanto i <= 5.
Alterações : Aqui, i++ o valor aumenta em 1 cada iteração do loop.
As alterações podem ser qualquer coisa; poderíamos também diminuir i em 1 a cada vez, se isso fizesse mais sentido.

A estrutura do loop é sempre a seguinte:

```js
for (inicialização; condição; alterações) {
  // código a ser executado em cada iteração
}
```

Considere, por exemplo, como poderíamos listar todos os sete dias da semana:

```js
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
for (let i = 0; i < days.length; i++) {
  // 'i' goes through all 'days' list indices
  console.log(days[i]); // Prints each day of the week onto the console
}
/*
Prints:
Monday
Tuesday
Wednesday
Thursday
Friday
Saturday
Sunday
*/
```

Um for-in loop itera sobre as propriedades de um objeto, de forma semelhante a verificar os itens em uma mochila:

```js
let star = {
  name: 'Sun',
  color: 'Yellow',
  size: 'Giant',
};
for (let property in star) {
  console.log(property, '->', star[property]);
}
/*
Prints:
name -> Sun
color -> Yellow
size -> Giant
*/
```

Neste exemplo, o programa percorre cada propriedade do objeto star e recupera o valor de cada uma delas.

O for-ofloop processa objetos iteráveis, como arrays ou listas. Imagine uma lista de tarefas diárias:

```js
let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
for (let planet of planets) {
  // iterate through all planets in the list
  console.log(planet); // Prints every planet onto the console
}
/*
Prints:
Mercury
Venus
Earth
Mars
Jupiter
Saturn
Uranus
Neptune
*/
```

Aqui, planet percorre todos os elementos em planets, imprimindo cada um. Observe que, ao usar for-of, você não precisa de um índice na lista - você itera pelos próprios elementos da lista.
