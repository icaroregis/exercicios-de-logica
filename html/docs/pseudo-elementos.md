📘 Pseudoclasses

A palavra "pseudo" significa "não genuíno". Você pode dizer que algo é pseudo quando não é 100% o que deveria ser, mas tem sua aparência.

Em CSS, usamos a palavra pseudo quando nos referimos a elementos ou estados que existem, mas não são necessariamente criados manualmente por você, o desenvolvedor.

Mais especificamente, uma pseudoclasse é uma palavra-chave que corresponde ao estado específico de um elemento. Por exemplo, quando o usuário coloca o mouse sobre um elemento, isso acionará o estado hover.

Você pode combinar esse estado hover com a pseudoclasse hover. Veja como:

<a href="https://meucursodehtmlcss.com" target="_blank">Aprenda HTML e CSS</a>

<style>
a:hover {
    background-color: #222;
    color: white;
}
</style>

Tente colocar o mouse sobre este link e observe como ele muda de cor (fundo e texto).

As pseudo-classes sempre começam com o caractere de dois pontos :.

📘 A pseudoclasse :hover

A pseudo-classe :hover é usada quando o usuário coloca seu dispositivo apontador (mouse, caneta, etc.) em cima de um elemento.

Esse estado pode não ser acionado em dispositivos móveis, pois não há como o navegador saber que nosso dedo está pairando sobre um elemento.

Estilizar esse estado ajuda a sinalizar ao usuário que ele pode clicar nesse elemento e que deve esperar uma ação.

Você precisa especificar o seletor principal para o qual deseja direcionar a pseudo-classe :hover. Por exemplo:

<a class="link" href="https://meucursodehtmlcss.com" target="_blank">Aprenda HTML e CSS</a>

<style>
.link {
    padding: 5px 10px;
    border-radius: 3px;
}

.link:hover {
    background-color: #222;
    color: white;
}
</style>

⚠️ Importante: Você geralmente desejará evitar que o estado hover altere o posicionamento do elemento. Portanto, é sempre melhor colocar a maioria de seus estilos no seletor de base (neste exemplo, .link) e colocar apenas as alterações necessárias no estado :hover.

📘 A pseudoclasse :active

A pseudo-classe :active é usada para apontar o estado quando um usuário começa a interagir com um elemento. Isso normalmente significa quando o usuário começou a pressionar o elemento (seja com o mouse, caneta ou dedo).

Portanto, a pseudoclasse :active é bem suportada em dispositivos de toque.

A pseudo-classe :active melhora a experiência do usuário sinalizando a ele que seu clique foi recebido. O dispositivo responde imediatamente à ação do usuário. Esse é um conceito fundamental na Interação Humano-Computador.

<a class="link" href="https://meucursodehtmlcss.com" target="_blank">Aprenda HTML e CSS</a>

<style>
.link {
    padding: 5px 10px;
    border-radius: 3px;
}

.link:active {
    background-color: #D32F2F;
    color: white;
}
</style>

Tente clicar no link acima sem soltar o botão do mouse. Você verá que ele ficará vermelho.

📘 Depurando pseudo-classes com as DevTools

Você não pode depurar o estado :hover ou :active enquanto estiver usando o mouse, porque o foco ou o estado ativo desaparecerá assim que você clicar em Inspecionar (ou Inspecionar elemento).

Por esse motivo, os navegadores forneceram aos desenvolvedores uma ferramenta de depuração para pseudoclasses.

Depois de selecionar um elemento e inspecioná-lo, você pode alternar entre as pseudoclasses que desejar.

Você precisa localizar o pequeno botão :hov para usar esta ferramenta. Nesta captura de tela, está no canto superior direito:

Então, assim que você clicar neste elemento, ele se expandirá e você poderá forçar um estado:
