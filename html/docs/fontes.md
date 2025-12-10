📘 Quais categorias de fontes existem?

Existem duas categorias principais de fontes (também chamadas de typeface): com serifa (serif) e sem serifa (sans-serif).

Na tipografia, uma serifa é uma pequena linha ou traço regularmente anexado ao final de um traço maior em uma letra ou símbolo dentro de uma fonte ou família de fontes em particular.

As linhas destacadas em vermelho na figura acima são as serifas.

A palavra sans em sans-serif é o termo francês para sem. Portanto, estamos efetivamente dividindo todos as TypeFaces (famílias de fontes) em dois ramos: com serifa e sem serifa.

A tipografia está fora do escopo deste curso; no entanto, você pode dar uma olhada no site da Adobe para saber mais sobre como escolher fontes com ou sem serifa . Lembre-se de que, geralmente, não há regras rígidas para ser criativo.

📘 Fontes monoespaçadas, display e manuscritas

Você pode, se quiser, abrir o site de fontes do Google para procurar exemplos de fontes de cada categoria. Lembre-se de que ainda não podemos usar essas fontes (aprenderemos mais tarde como fazer isso).

Embora todas as fontes possam ser divididas entre com serifa e sem serifa, temos outras categorias de fontes:

    monospace (monoespaçadas)
    display
    manuscritas

Essas fontes podem ser encontrados na forma com ou sem serifa.

📘 Monoespaçadas

Uma fonte monospace tem a mesma largura para todos os seus caracteres. Elas são frequentemente usados para representar trechos de código, comandos de terminal, nomes de variáveis etc.

Observe a diferença entre uma fonte padrão e uma fonte monoespaçada:

<p>Olá, mundo (não monoespaçada; também chamada de largura variável)</p>
<p style="font-family: monospace;">Olá, mundo (monoespaçada)</p>

    Olá, mundo (não monoespaçada; também chamada de largura variável)

    Olá, mundo (monoespaçada)

📘 Display

Uma fonte display é usada em tamanhos grandes (normalmente para cabeçalhos). Não se destina a passagens extensas de texto.

📘 Manuscritas

A fonte cursive, também chamada de manuscrita ou cursiva, é uma TypeFace que imita a escrita à mão. Pode ser usada para citações e para deixar o texto divertido, entre outras situações.

<p>Ei, olhe para cima!</p>
<style>
     p {
         font-family: cursive;
     }
</style>

    Ei, olhe para cima!

📘 Especificando/retornando à categoria

Você pode especificar uma categoria na declaração font-family ou fazer a substituição por uma categoria, por exemplo:

body {
font-family: Roboto, sans-serif;
}

Ao fazer isso, o navegador tentará carregar o fonte Roboto do computador do usuário. Se não conseguir encontrá-la, carregará uma fonte sans-serif que estiver disponível.

Da mesma forma, se especificarmos font-family: cursive, o navegador carregará uma fonte cursiva (manuscrita).

Limite o uso de fontes a 2 ou 3 famílias de fontes por site, a menos que você tenha um bom motivo para não fazê-lo.

📘 System-ui

Por enquanto, como ainda não queremos importar Web Fonts, continuaremos usando system-ui. Esta é a família de fontes que representa a fonte padrão da interface do usuário. Ela tem valores diferentes por sistema operacional. Por exemplo:

    Segoe UI no Windows
    Roboto no Android
    San Francisco no macOS e iOS

<p>Ei, olhe para cima. O céu está lindo!</p>
<style>
     p {
         font-family: system-ui;
     }
</style>

    Ei, olhe para cima. O céu está lindo!

Essas fontes são modernas e têm uma aparência muito melhor do que as outras fontes Web Safe que você pode usar (isso é apenas uma opinião, não um fato). Portanto, usaremos system-ui a partir de agora como a família de fontes padrão da página.
