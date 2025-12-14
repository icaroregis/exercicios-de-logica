📘 Propriedades personalizadas de CSS

Muitos sites modernos são criados a partir de duas cores principais e algumas variações da cor cinza.

Você pode pensar nelas como cores primárias e secundárias. Ou principal e destaque (existem outros nomes também).

Não importa como você as chame, é útil armazenar essas cores em variáveis para que, mais tarde, você possa se referir a elas pelo nome, em vez de rgb() ou código hexadecimal. Nós, humanos, podemos nos lembrar de nomes, mas não de números.

Vamos dar uma olhada em um exemplo completo e, em seguida, dividi-lo:

<html>
<body>
    <h1>Olá, mundo!</h1>
</body>
</html>

teste

<style>
html {
    --primary-color: #4DAAB3;
}

h1 {
    background-color: var(--primary-color);
    color: white;
}
</style>

Olá, mundo!

O exemplo acima mostra como podemos definir uma propriedade CSS personalizada chamada --primary-color e então usá-la como o valor da propriedade background-color.

📘 Sintaxe

As propriedades personalizadas de CSS sempre começam com -- (dois traços). Esses dois traços permitem que o navegador saiba que essas são suas próprias propriedades personalizadas criadas por você (ou uma biblioteca CSS).

As propriedades personalizadas CSS também são chamadas de variáveis CSS. Uma variável é usada para armazenar informações para que você possa usá-las e manipulá-las posteriormente.

📘 Definindo uma variável

Para criar uma propriedade personalizada CSS (ou uma variável CSS), você deve primeiro ter um seletor. Por enquanto, vamos escolher o elemento mais alto da página, o elemento html.

Então, você pode dar qualquer valor que você quiser. Aqui estão alguns exemplos, todos eles válidos:

html {
--primary-color: #4DAAB3;
--secondary-color: rgb(42 21 156 / 50%);
--default-border: 3px solid rgb(50 50 50 / 40%);
--medium-spacing: 5px;
--button-spacing: 10px 20px;
--code-font: "Fira Code", monospace;
}
A sintaxe é semelhante ao que você já está acostumado. Você só precisa prefixá-la com -- para que se torne uma propriedade personalizada.

Observe como o valor pode ser em vários formatos. Por exemplo, uma cor, valores de pixel (um valor ou mais), valor de borda, famílias de fontes etc.

📘 Usando uma variável

Para usar uma variável, você deve usar a função var(). Ele usa o nome da propriedade personalizada CSS como seu primeiro argumento. Por exemplo, assumindo as propriedades personalizadas definidas acima, veja como você pode usá-las:

html {
font-family: var(--code-font);
}

button {
padding: var(--button-spacing);
color: var(--primary-color);
background-color: var(--secondary-color);
border: var(--default-border);
}

p {
margin: var(--medium-spacing);
color: var(--primary-color);  
}
O benefício das propriedades personalizadas torna-se mais evidente quando você reutiliza a mesma variável mais de uma vez. Por exemplo, usamos var(--primary-color) duas vezes.

Digamos que, daqui a alguns meses, você precise alterar o valor --primary-color. Você pode fazer isso atualizando sua definição, e o valor será atualizado em todos os lugares onde foi usado.

📘 Variáveis CSS e cores

Embora você possa armazenar qualquer valor em propriedades personalizadas, o caso de uso mais comum, de longe, são as cores. Isso por três razões principais:

Podemos memorizar nomes mais facilmente do que rgb/hexadecimal.
Podemos alterar essas cores dinamicamente, por exemplo, no modo escuro ou no modo daltônico
Podemos manter um esquema de cores consistente em nossa página/site.
