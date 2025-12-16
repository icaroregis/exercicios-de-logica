📘 Variáveis globais e o seletor :root

Colocamos nossas variáveis no exercício anterior no seletor html. Muitas vezes você verá desenvolvedores colocando suas variáveis globais no seletor :root da seguinte forma:

<h1>Olá, mundo!</h1>

<style>
:root {
    --primary-color: #4DAAB3;
}

h1 {
    background-color: var(--primary-color);  
    color: white;
}
</style>

O seletor :root é semelhante ao elemento html, exceto que tem maior especificidade.

Você pode usar a ferramenta CSS Specificity para visualizar a diferença:

:root tem uma especificidade de 0,1,0.
html tem uma especificidade de 0,0,1.
Portanto, preferimos usar o seletor :root para variáveis CSS globais, porque é o elemento mais alto da página. Assim, as chances de ser substituído são bastante baixas.

Não é um problema se você definir as variáveis no elemento html ou mesmo no elemento body. No entanto, é uma prática recomendada e você a verá com frequência.

Portanto, as variáveis que você define no seletor :root são variáveis CSS globais, o que significa que elas podem ser acessadas por qualquer elemento dentro da página.

Isso ocorre porque as propriedades personalizadas do CSS são transmitidas em cascata exatamente como as propriedades normais.

📘 Cascata de propriedades personalizadas

Se a mesma propriedade personalizada tiver vários valores para um determinado elemento, o algoritmo em cascata será aplicado.

Uma rápida recapitulação do algoritmo em cascata (até agora):

Para seletores com a mesma especificidade: a última propriedade encontrada substituirá uma propriedade especificada anteriormente.
O seletor com maior especificidade sobrescreve aquele com menor especificidade.
No entanto, a cascata mais comum que você encontrará com as propriedades personalizadas CSS é quando uma propriedade personalizada é substituída por outro seletor. Vamos dar uma olhada neste exemplo:

<main>
    <p>Conteúdo principal aqui.</p>
</main>
<footer>
    <p>Conteúdo do rodapé aqui.</p>
</footer>

<style>
:root {
    --primary: green;
}

main {
    --primary: black;
}

p {
    color: var(--primary);
}
</style>

Conteúdo principal aqui.

Conteúdo do rodapé aqui.

Observe como a cor do parágrafo no main é preta, enquanto no footer é verde.

Definimos a propriedade personalizada primary como verde. No entanto, o elemento main redefine a propriedade personalizada primary para preto.

Assim, você pode substituir o valor de uma propriedade CSS para uma seção do seu site.

📘 Fornecendo um valor padrão

A função var() aceita um segundo parâmetro que permite especificar o valor padrão se a propriedade personalizada não foi encontrada. Veja como isso funciona:

<p>Olá, mundo</p>

<style>
p {
    color: var(--primary, red);
}
</style>

Olá, mundo

Como a cor --primary não foi encontrada, o valor padrão fornecido red será aplicado.

📘 Casos de uso de variáveis avançadas

Uma variável pode conter outras variáveis. Além disso, você pode misturar e combinar variáveis e outras palavras-chave CSS. Este exemplo mostra ambas as situações:

<p id="quadrado">Quadrado</p>

<style>
:root {
    --thickness: 5px;
    --primary-color: #361500;
    --default-border: var(--thickness) solid var(--primary-color);
}

#quadrado {
    border: var(--default-border); 
}
</style>

Quadrado

Note que, aplicando a combinação de variáveis, o estilo do id quadrado será entendido pelo navegador assim:

#quadrado {
border: 5px solid #361500
}
