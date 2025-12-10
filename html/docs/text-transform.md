📘 A propriedade text-transform

Há momentos em que você gostaria de forçar uma capitalização de uma parte do texto em seu código HTML. Capitalizar significa renderizar tudo em letras minúsculas ou tudo em letras maiúsculas. Isso é útil principalmente quando seu HTML é gerado por uma linguagem de programação de back-end (NodeJS, PHP, Ruby etc.), mas também é útil mesmo se você estiver escrevendo seu HTML à mão, pois ajuda a manter a consistência entre os estilos.

A propriedade text-transform ajuda a forçar a capitalização do texto em seu HTML — por exemplo:

    tudo em minúsculas (lowercase)
    tudo em maiúsculas (uppercase)
    maiúscula somente na letra inicial de cada palavra (capitalize)

Vejamos alguns exemplos:

<a href="https://example.com/contato">Entre em contato conosco</a><br>
<a href="https://example.com/sobre">sobre nós</a>

<style>
a {
    text-transform: uppercase;
}
</style>

    Entre em contato conosco
    sobre nós

Observe como forçamos o texto dentro do link a estar sempre em letras maiúsculas.

📘 A propriedade border-radius

A propriedade border-radius é usada para arredondar os cantos de um elemento. Por enquanto, vamos nos concentrar no uso mais básico desse recurso.

Vejamos um exemplo:

<a id="contato" href="https://example.com/contato">Fale conosco</a><br><br>
<a id="sobre" href="https://example.com/sobre">Sobre nós</a>

<style>
#contato {
    background-color: yellow;
    padding: 5px;
    border-radius: 4px; /* aplicado aos 4 cantos */
}

#sobre {
    border: 3px solid red;
    padding: 5px;
    border-radius: 4px; /* aplicado aos 4 cantos */
}
</style>

    Fale conosco

    Sobre nós

Não se esqueça de ter uma cor de fundo (background-color) e/ou uma borda (border) para poder visualizar o arredondamento da borda. Caso contrário, ele estará presente, mas como a borda ou a cor de fundo não existe, você não poderá vê-lo.
