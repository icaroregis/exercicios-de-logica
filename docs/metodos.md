# Resumo dos métodos splice, slice, split e charAt

## 1. splice

- O que faz?
  O método `splice` serve para **remover, adicionar ou substituir** elementos em um array.
- Como funciona?
  Você diz onde começar, quantos elementos tirar e o que colocar no lugar.
- Exemplo:

```js
let frutas = ['maçã', 'banana', 'laranja'];
frutas.splice(1, 1, 'uva'); // começa no índice 1, remove 1 elemento, adiciona 'uva'
console.log(frutas); // ['maçã', 'uva', 'laranja']
```

- Dica: O splice **muda o array original**!

---

## 2. slice

- O que faz?
  O método `slice` serve para **pegar uma parte** de um array ou string.
- Como funciona?
  Você diz onde começar e onde terminar (o final não entra).
- Exemplo:

```js
let frutas = ['maçã', 'banana', 'laranja'];
let algumasFrutas = frutas.slice(0, 2); // pega do índice 0 até 2 (não inclui o 2)
console.log(algumasFrutas); // ['maçã', 'banana']
```

- Dica: O slice **não muda o original**, só devolve uma cópia!

---

## 3. split

- O que faz?
  O método `split` serve para **quebrar uma string em partes**, formando um array.
- Como funciona?
  Você diz qual é o separador.
- Exemplo:

```js
let frase = 'eu gosto de sorvete';
let palavras = frase.split(' '); // separa onde tem espaço
console.log(palavras); // ['eu', 'gosto', 'de', 'sorvete']
```

- Dica: O split só funciona em **strings**!

---

## 4. charAt

- O que faz?
  O método `charAt` serve para **pegar uma letra** de uma string, pelo índice.
- Como funciona?
  Você diz o número da posição.
- Exemplo:

```js
let palavra = 'banana';
let letra = palavra.charAt(2); // pega a letra do índice 2
console.log(letra); // 'n'
```

---

## Diferença entre splice, slice e split

- **splice**: mexe no array, tira ou coloca coisas (altera o original)
- **slice**: pega uma parte do array ou string (não altera o original)
- **split**: quebra uma string em partes, formando um array

---

## Resumindo com exemplos simples:

- splice: "Quero tirar ou colocar coisas na minha caixa de brinquedos!"
- slice: "Quero pegar só alguns brinquedos da caixa, mas sem mexer nela!"
- split: "Quero cortar uma frase em palavras, como se fosse picar uma banana!"
- charAt: "Quero pegar só uma letra da palavra!"

## Pronto! Agora você sabe usar cada um deles!

# Exemplos extras e variações

## splice

- Remover elementos:

```js
let numeros = [1, 2, 3, 4, 5];
numeros.splice(2, 2); // remove 2 elementos a partir do índice 2
console.log(numeros); // [1, 2, 5]
```

- Adicionar elementos sem remover:

```js
let letras = ['a', 'b', 'c'];
letras.splice(1, 0, 'x'); // adiciona 'x' no índice 1, não remove nada
console.log(letras); // ['a', 'x', 'b', 'c']
```

## slice

- Usando só o início:

```js
let palavra = 'banana';
console.log(palavra.slice(2)); // 'nana'
```

- Usando início e fim negativos:

```js
let frutas = ['maçã', 'banana', 'laranja', 'uva'];
console.log(frutas.slice(-3, -1)); // ['banana', 'laranja']
```

## split

- Separando por vírgula:

```js
let lista = 'maçã,banana,laranja';
console.log(lista.split(',')); // ['maçã', 'banana', 'laranja']
```

- Separando cada letra:

```js
let nome = 'Ana';
console.log(nome.split('')); // ['A', 'n', 'a']
```

## charAt

- Pegar última letra:

```js
let fruta = 'laranja';
console.log(fruta.charAt(fruta.length - 1)); // 'a'
```

# Outros métodos úteis

## join

- Junta elementos de um array em uma string:

```js
let palavras = ['eu', 'amo', 'JS'];
console.log(palavras.join(' ')); // 'eu amo JS'
```

## indexOf

- Mostra a posição de um elemento:

```js
let animais = ['gato', 'cachorro', 'pássaro'];
console.log(animais.indexOf('cachorro')); // 1
```
