Recursividade em JavaScript: descomplicando o conceito na prática 🧑‍💻

Recursividade pode parecer mágica, mas é pura lógica! Esse conceito aparece quando uma função chama a si mesma para resolver um problema. No JavaScript, cada chamada recursiva é armazenada em uma pilha de execução (call stack) e só começa a ser resolvida de trás para frente, quando encontra a condição de parada.

Veja este exemplo clássico para inverter uma string:

```js
function inverterString(string) {
  if (string === '') return '';
  return inverterString(string.substr(1)) + string.charAt(0);
}
```

**Como funciona, passo a passo:**

1. Chamada com `'amor'`
   - `string.substr(1)` → `'mor'`
   - `string.charAt(0)` → `'a'`
2. Chamada com `'mor'`
   - `string.substr(1)` → `'or'`
   - `string.charAt(0)` → `'m'`
3. Chamada com `'or'`
   - `string.substr(1)` → `'r'`
   - `string.charAt(0)` → `'o'`
4. Chamada com `'r'`
   - `string.substr(1)` → `''`
   - `string.charAt(0)` → `'r'`
5. Chamada com `''` (condição de parada) → retorna `''`

Agora começa o **desempilhamento (LIFO)**:

- 1ª execução: `'' + 'r'` → `'r'`
- 2ª execução: `'r' + 'o'` → `'ro'`
- 3ª execução: `'ro' + 'm'` → `'rom'`
- 4ª execução: `'rom' + 'a'` → `'roma'`

Cada função depende do resultado da próxima para montar o resultado final!

💡 **Curiosidade:** Pense na pilha de execução como uma impressora: se você enviar cinco arquivos para imprimir, eles ficam armazenados em uma pilha. Só quando a impressora executa o processo, eles vão sendo impressos um a um — e, no caso da recursividade, o processo começa do último arquivo enviado.

**Por que isso importa?**  
Recursividade é essencial para problemas que podem ser quebrados em partes menores, como manipulação de strings, percorrer árvores ou listas, etc.

Se ficou com dúvida, salva o post e depois faça o teste no seu editor! 😉

Já usou recursividade em algum projeto? Compartilha sua experiência!

#JavaScript #Recursividade #Desenvolvimento #DicaDeCódigo
