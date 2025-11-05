// O caractere de escape em JavaScript é a barra invertida (\ \). Funcionando como um ponto de inflexão, ela atribui uma interpretação diferente aos caracteres que a seguem. Aqui está um cenário clássico: inserir caracteres especiais, como aspas, dentro de uma string. Não podemos usar aspas duplas diretamente dentro da string, pois o JavaScript não conseguirá interpretá-la dessa forma, mas um caractere de escape resolve o problema:

let quote = "And then she said, \"Hello, World!\"";
console.log(quote);  // Outputs: And then she said, "Hello, World!"

// Neste caso, o caractere de escape ( \) insere aspas duplas na string. Sem ele, o compilador JavaScript geraria um erro. Outras sequências de escape frequentemente usadas incluem \t(tabulação), \n(nova linha) e \\(barra invertida).

console.log("This is an escape character lesson:\n\t- Backslash: \\\t- New line: \\n\t- Tab: \\t"); // An example of using escape sequences
/*
Prints:
This is an escape character lesson:
    - Backslash: \	- New line: \n	- Tab: \t
*/

// Neste exemplo, "\n"uma nova linha é inserida, e "\t"uma tabulação é inserida, resultando em uma saída organizada. Pode parecer complicado, mas fique à vontade para me pedir ajuda; terei prazer em esclarecer qualquer dúvida!


// Às vezes, precisamos incluir caracteres especiais, como o próprio caractere de escape, em uma string. Para fazer isso, precedemos esses caracteres especiais com uma barra invertida (\ \), efetivamente escapando-os.

let phrase = "She said, \"Hey, it\'s a \\ \".";
console.log(phrase);  // Outputs: She said, "Hey, it's a \ ".


// Neste exemplo, escapamos uma aspa dupla (" \"), uma aspa simples ( \'") e uma barra invertida (" \\) em uma string.


// Caracteres de nova linha e de escape de tabulação também podem ser usados, embora as strings de modelo também permitam strings de várias linhas diretamente!

const testMessage = "Test message";

console.log(`This supports\n\t- New lines\n\t- Tabs`);  // Supports new lines and tabs
// Prints:
// This supports
//	- New lines
//	- Tabs

console.log(`This supports
\t- New lines
\t- Tabs
\t- And expressions, as before: ${testMessage}`); // Also supports multi-line strings
// Prints:
//This supports
//	- New lines
//	- Tabs
//	- And expressions, as before: Test message

// Assim, os caracteres de escape se misturam perfeitamente com as cadeias de modelo para formar expressões de cadeia complexas.