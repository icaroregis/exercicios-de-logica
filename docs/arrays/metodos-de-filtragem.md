# Métodos de filtragem em arrays: filter, some e every

## 1. filter

- O que faz?
  O método `filter` serve para **filtrar** elementos de um array, criando um novo array só com os que passaram no teste.
- Como funciona?
  Você passa uma função que retorna true ou false para cada elemento. Só os que derem true entram no novo array.
- Exemplo:

```js
let numeros = [1, 2, 3, 4, 5];
let pares = numeros.filter((n) => n % 2 === 0);
console.log(pares); // [2, 4]
```

---

## 2. some

- O que faz?
  O método `some` verifica se **pelo menos um** elemento do array passa no teste.
- Como funciona?
  Você passa uma função que retorna true ou false. Se algum elemento der true, o resultado é true.
- Exemplo:

```js
let frutas = ['maçã', 'banana', 'laranja'];
let temBanana = frutas.some((f) => f === 'banana');
console.log(temBanana); // true
```

---

## 3. every

- O que faz?
  O método `every` verifica se **todos** os elementos do array passam no teste.
- Como funciona?
  Você passa uma função que retorna true ou false. Só retorna true se todos os elementos derem true.
- Exemplo:

```js
let idades = [18, 22, 30];
let todosAdultos = idades.every((i) => i >= 18);
console.log(todosAdultos); // true
```

---

## Diferença entre filter, some e every

- **filter**: devolve um novo array só com os elementos que passaram no teste.
- **some**: devolve true se pelo menos um elemento passou no teste.
- **every**: devolve true só se todos os elementos passaram no teste.

---

## Resumindo com exemplos simples:

- filter: "Quero separar só os brinquedos vermelhos da caixa!"
- some: "Tem algum brinquedo vermelho na caixa?"
- every: "Todos os brinquedos da caixa são vermelhos?"

Esses métodos são muito usados para trabalhar com listas e fazer verificações rápidas!

---

## Outros métodos úteis para trabalhar com arrays

### 4. forEach

- O que faz?
  O método `forEach` executa uma função para cada elemento do array, mas não retorna nada.
- Como funciona?
  Você passa uma função que será chamada para cada item do array. Usado para executar ações, como mostrar ou alterar valores.
- Exemplo:

```js
let nomes = ['Ana', 'Bia', 'Carlos'];
nomes.forEach((nome) => {
  console.log('Olá, ' + nome + '!');
});
// Olá, Ana!
// Olá, Bia!
// Olá, Carlos!
```

---

### 5. map

- O que faz?
  O método `map` cria um novo array com o resultado da função aplicada a cada elemento.
- Como funciona?
  Você passa uma função que transforma cada item. O resultado é um novo array com os valores modificados.
- Exemplo:

```js
let numeros = [1, 2, 3];
let dobrados = numeros.map((n) => n * 2);
console.log(dobrados); // [2, 4, 6]
```

---

### 6. for...of

- O que faz?
  O `for...of` é uma estrutura de repetição que percorre cada elemento do array.
- Como funciona?
  Você usa o `for...of` para acessar cada item do array, um por vez, de forma simples.
- Exemplo:

```js
let cores = ['azul', 'verde', 'amarelo'];
for (let cor of cores) {
  console.log(cor);
}
// azul
// verde
// amarelo
```

---

## Resumindo todos os métodos:

- **filter**: devolve um novo array só com os elementos que passaram no teste.
- **some**: devolve true se pelo menos um elemento passou no teste.
- **every**: devolve true só se todos os elementos passaram no teste.
- **forEach**: executa uma ação para cada item (não retorna nada).
- **map**: transforma cada item e retorna um novo array.
- **for...of**: percorre cada item do array, útil para ler ou mostrar valores.
