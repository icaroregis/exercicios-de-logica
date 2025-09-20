# Métodos básicos de arrays

## 1. splice

- **O que faz?**  
  Remove, adiciona ou substitui elementos em um array (modifica o original).
- **Como usar:**
```js
let frutas = ['maçã', 'banana', 'laranja'];
frutas.splice(1, 1, 'uva'); // começa no índice 1, remove 1 elemento, adiciona 'uva'
console.log(frutas); // ['maçã', 'uva', 'laranja']
```
- **Exemplos extras:**
```js
// Remover elementos:
let numeros = [1, 2, 3, 4, 5];
numeros.splice(2, 2); // remove 2 elementos a partir do índice 2
console.log(numeros); // [1, 2, 5]

// Adicionar sem remover:
let letras = ['a', 'b', 'c'];
letras.splice(1, 0, 'x'); // adiciona 'x' no índice 1, não remove nada
console.log(letras); // ['a', 'x', 'b', 'c']
```

---

## 2. slice

- **O que faz?**  
  Pega uma parte de um array (não modifica o original).
- **Como usar:**
```js
let frutas = ['maçã', 'banana', 'laranja'];
let algumasFrutas = frutas.slice(0, 2); // pega do índice 0 até 2 (não inclui o 2)
console.log(algumasFrutas); // ['maçã', 'banana']
```
- **Exemplos extras:**
```js
let frutas = ['maçã', 'banana', 'laranja', 'uva'];
console.log(frutas.slice(-3, -1)); // ['banana', 'laranja']
```

---

## 3. join

- **O que faz?**  
  Junta elementos de um array em uma string.
- **Como usar:**
```js
let palavras = ['eu', 'amo', 'JS'];
console.log(palavras.join(' ')); // 'eu amo JS'
console.log(palavras.join('-')); // 'eu-amo-JS'
```

---

## 4. indexOf

- **O que faz?**  
  Mostra a posição (índice) de um elemento no array.
- **Como usar:**
```js
let animais = ['gato', 'cachorro', 'pássaro'];
console.log(animais.indexOf('cachorro')); // 1
console.log(animais.indexOf('peixe')); // -1 (não encontrado)
```

---

## Resumo rápido:

- **splice**: "Quero mexer no meu array, tirando ou colocando coisas!"
- **slice**: "Quero pegar uma parte, mas sem mexer no original!"
- **join**: "Quero juntar tudo numa frase!"
- **indexOf**: "Em que posição está esse elemento?"