Outras pseudoclasses

📘 As pseudoclasses :first-child e :last-child

A pseudoclasse :first-child é usada para encontrar um elemento que é o primeiro filho de seu elemento pai.

Da mesma forma, a pseudo-classe :last-child é usada para encontrar um elemento que é o último filho de seu elemento pai.

Quando você escreve li:first-child, ele corresponderá ao li que é o primeiro filho do seu elemento-pai (ul). Então, essa pseudoclasse não se refere aos filhos do li.

Vejamos um exemplo:

<ul class="ingredientes">
     <li>Massa</li>
     <li>Molho</li>
     <li>Queijo</li>
</ul>

<style>
.ingredientes li:first-child {
    color: green;
}

.ingredientes li:last-child {
    color: blue;
}
</style>

        Massa
        Molho
        Queijo

Observe que o seletor .ingredientes li:first-child corresponde ao li (dentro de .ingredientes) que é o primeiro filho de seu elemento pai.

Então, olhamos para o pai de li. Neste caso, é <ul class="ingredientes">...</ul>. O <li>Massa</li> é o primeiro filho desse elemento pai? Sim, então corresponderá a :first-child.

📘 Casos de uso

Assim que começarmos a combinar componentes, como uma lista de avatares e guias, usaremos :first-child e :last-child para combinar o primeiro e o último filho para que possamos dar a eles diferentes margens ou diferentes raios de borda.

📘 A pseudoclasse :nth-child()

Assim como os seletores anteriores, como você faria para selecionar o segundo elemento (em vez do primeiro ou do último)?

Para isso, você usará a pseudoclasse :nth-child(), que aceita um índice. Por exemplo:

<ul>
     <li>Massa</li>
     <li>Molho</li>
     <li>Queijo</li>
     <li>Sal</li>
</ul>

<style>
ul li:nth-child(2) {
    font-weight: bold;
}
</style>

        Massa
        Molho
        Queijo
        Sal

O seletor :nth-child() aceita um índice que começa em 1. Portanto, 1 refere-se ao primeiro elemento, 2 ao segundo elemento e assim por diante.

Ele também aceita casos de uso mais avançados que serão úteis quando aprendermos sobre tabelas (eles ajudam muito na legibilidade):

<ul>
     <li>Massa</li>
     <li>Molho</li>
     <li>Queijo</li>
     <li>Sal</li>
</ul>

<style>
li:nth-child(odd) {
    color: green;
}

li:nth-child(even) {
    color: blue;
}
</style>

        Massa
        Molho
        Queijo
        Sal

Observe como podemos estilizar as entradas ímpares e pares usando as palavras-chave odd (ímpar) e even (par).

Você também pode fazer um uso mais avançado dessa pseudoclasse, com fórmulas como 2n, 2n+1, 3n+2, etc.

Isso permitirá que você combine variações pares, ímpares e mais complicadas.

    2n é o mesmo que even (par).
    2n+1 é o mesmo que odd (ímpar).

Isso não é algo que você deva memorizar. Assim que você tiver um caso de uso para isso, experimente algumas opções e encontrará resposta necessária.

📘 As pseudoclasses :first-of-type e :last-of-type

Digamos que você tenha vários parágrafos e gostaria de selecionar o primeiro deles. Portanto, para encontrar o primeiro elemento do tipo parágrafo, você pode usar a pseudo-classe :first-of-type:

<h1>Artigo</h1>
<p>Primeiro parágrafo</p>
<p>Segundo parágrafo</p>
<p>Terceiro parágrafo</p>

<style>
p:first-of-type {
    font-weight: bold;
}
</style>

    Artigo

    Primeiro parágrafo

    Segundo parágrafo

    Terceiro parágrafo

A diferença entre :first-child e :first-of-type é que o :first-child irá verificar se este é o primeiro filho de seu elemento pai. Já o :first-of-type irá verificar se esta é a primeira vez que este seletor aparece em relação ao seu elemento pai (mesmo que ele não seja o primeiro elemento filho).

Isso fica mais claro com um exemplo:

<main>
     <h1>Artigo</h1>
     <p class="texto">Primeiro parágrafo</p>
     <p class="texto">Segundo parágrafo</p>
     <p class="texto">Terceiro parágrafo</p>
</main>

<style>
/* Corresponde ao primeiro .texto
(relativo ao seu pai) mesmo que não
seja o primeiro filho de main*/
.texto:first-of-type {
    font-weight: bold;
}
/* Isso não corresponderá!
O parágrafo não é o primeiro
filho de main*/
.text:first-child {
    color: red;
}
</style>

    Artigo

    Primeiro parágrafo

    Segundo parágrafo

    Terceiro parágrafo
