Variáveis são espaços na memória do computador onde armazenamos dados que podem ser usados e modificados ao longo do código. Em JavaScript, usamos as palavras-chave `var`, `let` e `const` para declarar variáveis.

## 1. var

A palavra-chave `var` é usada para declarar variáveis que podem ser reatribuídas. As variáveis declaradas com `var` têm escopo de função, o que significa que são acessíveis apenas dentro da função em que foram declaradas.

```javascript
var nome = 'João';
console.log(nome); // "João"
nome = 'Maria';
console.log(nome); // "Maria"
```

## 2. let

A palavra-chave `let` também é usada para declarar variáveis que podem ser reatribuídas, mas tem escopo de bloco. Isso significa que a variável só é acessível dentro do bloco onde foi declarada (por exemplo, dentro de um loop ou uma condicional).

```javascript
let idade = 25;
if (idade >= 18) {
  let mensagem = 'Você é maior de idade.';
  console.log(mensagem);
}
console.log(mensagem); // ReferenceError: mensagem is not defined
```

## 3. const

A palavra-chave `const` é usada para declarar variáveis cujo valor não pode ser reatribuído após a inicialização. Assim como `let`, `const` tem escopo de bloco.

```javascript
const pi = 3.14;
console.log(pi); // 3.14
pi = 3.1415; // TypeError: Assignment to constant variable.
```

Lembre-se de que, embora o valor de uma variável `const` não possa ser reatribuído, se o valor for um objeto ou array, suas propriedades ou elementos podem ser modificados.

```javascript
const pessoa = { nome: 'Ana', idade: 30 };
pessoa.idade = 31; // Isso é permitido
console.log(pessoa); // { nome: 'Ana', idade: 31 }
```

## Resumo

```javascript
var nome = 'João';
console.log(nome); // "João"
nome = 'Maria';
console.log(nome); // "Maria"

let idade = 25;
if (idade >= 18) {
  let mensagem = 'Você é maior de idade.';
  console.log(mensagem);
}
console.log(mensagem); // ReferenceError: mensagem is not defined

const pi = 3.14;
console.log(pi); // 3.14
pi = 3.1415; // TypeError: Assignment to constant variable.

const pessoa = { nome: 'Ana', idade: 30 };
pessoa.idade = 31; // Isso é permitido
console.log(pessoa); // { nome: 'Ana', idade: 31 }
```
