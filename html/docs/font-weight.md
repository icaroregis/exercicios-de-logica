📘 A propriedade font-weight

Já havíamos aprendido sobre a propriedade font-weight há algum tempo. Aprendemos que poderíamos usá-lo para tornar um texto em negrito (font-weight: bold).

Agora, examinaremos mais detalhadamente os outros valores que ela pode assumir.

O peso de uma fonte assume um valor entre 100 e 900 (em incrementos de 100). Então, aqui estão todos os valores possíveis para font-weight:

    100
    200
    300
    400
    500
    600
    700
    800
    900

Quanto menor o número, mais leve o peso. Quanto maior o número, maior o peso.

O valor 400 é o mesmo que especificar font-weight: normal. E o valor 700 é o mesmo que especificar font-weight: bold.

Nem todas as famílias de fontes terão estilos de negrito diferentes, variando de 100 a 900. Portanto, muitas vezes você não notará diferença entre 700 e 800 porque a fonte, por exemplo, tem apenas três pesos diferentes (100, 400 e 700).

<ul>
     <li class="item-1">Primeiro item</li>
     <li class="item-2">Segundo item</li>
     <li class="item-3">Terceiro item</li>
     <li class="item-4">Quarto item</li>
</ul>
<style>
.item 1 {
     font-weight: 100;
}
.item-2 {
     font-weight: 400; /* ou font-weight: normal */
}
.item-3 {
     font-weight: 700; /* ou font-weight: negrito */
}
.item-4 {
     font-weight: 900;
}
</style>

        Primeiro item
        Segundo item
        Terceiro item
        Quarto item

📘 A propriedade font-style

A propriedade font-style é usada para alterar o estilo de uma fonte de normal para italic (itálico).

Há também outro estilo chamado oblique (oblíquo), mas geralmente ele é usado com Variable Fonts (estudaremos isso posteriormente).

Vejamos um exemplo:

<p>Só você pode fazer este mundo parecer certo.</p>

<style>
p {
    font-style: italic;
}
</style>

    Só você pode fazer este mundo parecer certo.

📘 Lembrete de semântica

Por que estamos aprendendo sobre essas propriedades CSS, já que podemos usar os elementos strong e em?

Lembre-se da semântica: os elementos strong e em devem ser usados apenas por seu significado semântico, e não por causa dos estilos padrão que eles possuem.

Você também pode usar elementos semânticos e redefinir seus estilos. Por exemplo:

<p>Apenas <em>você</em> pode fazer esta palavra parecer <strong>certa</strong>.</p>

<style>
     em {
        font-style: normal;
     }
     strong {
         font-weight: normal;
     }
</style>

    Apenas você pode fazer esta palavra parecer certa.

O código HTML acima carrega um significado semântico mesmo que tenhamos sobrescrito os estilos padrão para os elementos strong e em.

📘 A propriedade font

A propriedade font é uma propriedade shorthand (abreviada) que permite definir mais de seis propriedades relacionadas à fonte simultaneamente. Por esse motivo, não recomendamos usá-la, pois o código fica bastante confuso. Aqui está um exemplo para sua referência:

body {
font: italic bold 16px serif;
}

Isso define simultaneamente as propriedades font-style, font-weight, font-size e font-family. Recomendamos que você o ignore e apenas saiba que ele exista (caso você o veja em algum código).
