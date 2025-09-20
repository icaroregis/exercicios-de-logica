# Métodos básicos de strings

## 1. charAt

- **O que faz?**  
  Pega uma letra específica de uma string pelo índice.
- **Como usar:**
```js
let palavra = 'banana';
let letra = palavra.charAt(2); // pega a letra do índice 2
console.log(letra); // 'n'
```
- **Exemplos extras:**
```js
let fruta = 'laranja';
console.log(fruta.charAt(fruta.length - 1)); // 'a' (última letra)
```

---

## 2. slice

- **O que faz?**  
  Pega uma parte de uma string (não altera a original).
- **Como usar:**
```js
let palavra = 'banana';
console.log(palavra.slice(1, 4)); // 'ana'
```
- **Exemplos extras:**
```js
let palavra = 'banana';
console.log(palavra.slice(2)); // 'nana' (do índice 2 até o final)
console.log(palavra.slice(-3)); // 'ana' (últimos 3 caracteres)
```

---

## 3. split

- **O que faz?**  
  Quebra uma string em partes, formando um array.
- **Como usar:**
```js
let frase = 'eu gosto de sorvete';
let palavras = frase.split(' '); // separa onde tem espaço
console.log(palavras); // ['eu', 'gosto', 'de', 'sorvete']
```
- **Exemplos extras:**
```js
let lista = 'maçã,banana,laranja';
console.log(lista.split(',')); // ['maçã', 'banana', 'laranja']

let nome = 'Ana';
console.log(nome.split('')); // ['A', 'n', 'a'] (cada letra)
```

---

## 4. substring

- **O que faz?**  
  Similar ao slice, mas não aceita valores negativos.
- **Como usar:**
```js
let texto = 'JavaScript';
console.log(texto.substring(0, 4)); // 'Java'
```

---

## Resumo rápido:

- **charAt**: "Quero pegar só uma letra!"
- **slice**: "Quero cortar um pedaço da palavra!"
- **split**: "Quero quebrar a frase em pedacinhos!"
- **substring**: "Como o slice, mas só com números positivos!"