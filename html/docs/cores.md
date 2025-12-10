📘 Introdução às cores

Até agora, usamos as seguintes cores:

    black
    white
    red
    green
    blue
    lightgray
    gray
    gold

Embora existam muitas outras cores (como purple, cyan etc.), você raramente as usará, exceto black e white.

Para poder escolher uma cor a partir de uma gama mais ampla, teremos que misturar cores.

Existem muitas maneiras de misturar cores em CSS. Começaremos com a mais comum, que é o modelo RGB.

📘 RGB (Vermelho Verde Azul)

O modelo de cores RGB permite misturar valores de vermelho, verde e azul para formar a cor desejada. Você deve especificar um valor para cada cor, variando de 0 a 255.

Se você está se perguntando por que é de 0 a 255, é porque existem 256 valores (28).

Aqui está um exemplo:

<p>Olá, mundo</p>
<style>
p {
    color: rgb(255 255 0);
    background-color: black;
}
</style>

    Olá, mundo

Neste exemplo, misturamos vermelho e verde, o que nos deu o amarelo.

Alguns designers estudam a mistura de cores e conseguem prever o resultado; no entanto, se você for um desenvolvedor Web, isso geralmente não será um requisito, especialmente se você tiver uma equipe de designers trabalhando no design.

Você também não precisa memorizar as cores, pois sempre poderá experimentá-las no navegador. Eventualmente, você se lembrará desses valores populares:

<ul>
     <li class="primeiro">Branco</li>
     <li class="segundo">Preto</li>
     <li class="terceiro">Cinza</li>
</ul>
<style>
.primeiro {
    color: rgb(255 255 255);
    background-color: black;
}

.segundo {
color: rgb(0 0 0);
}

.terceiro {
color: rgb(100 100 100);
}
</style>

        Branco
        Preto
        Cinza

Você obterá branco quando misturar as três cores: rgb(255 255 255).

Quando você mistura 0 para todas as três cores, obtém preto: rgb(0 0 0).

Por outro lado, quando você tiver o mesmo valor para os três canais, obterá uma cor cinza. Por exemplo, rgb(100 100 100). Se você aumentar os valores, o cinza ficará mais claro (pois se aproxima do branco). Por exemplo: rgb(220 220 220).

📘 A sintaxe

A sintaxe da função rgb() é a seguinte:

rgb (vermelho verde azul)

Observe que os três valores são separados por um caractere de espaço.

    💡 Se você já conhece algum CSS antes do curso, pode estar familiarizado com a sintaxe antiga, que era separada por vírgula em vez de um caractere de espaço. Essa sintaxe também funciona. Por exemplo: rgb(255, 255, 255).

📘 Especificando o canal alfa

Há um quarto valor que você pode passar para a função rgb(), que é o canal alfa. Esse canal controla a transparência das cores. Um alfa de 0% torna a cor completamente transparente e invisível (independentemente dos valores fornecidos para os canais vermelho, verde e azul). Um alfa de 100% torna a cor opaca.

Por padrão, o alfa é 100%.

Vejamos alguns exemplos:

<p class="primeira">Primeira sentença</p>
<p class="segunda">Segunda sentença</p>
<style>
.primeira {
    /* preto */
    color: rgb(0 0 0 / 100%); /*equivalente a color(0 0 0) */
}

.segunda {
/_ preto com 75% alfa torna a cor cinza _/
color: rgb(0 0 0 / 75%);
}
</style>

    Primeira sentença

    Segunda sentença

Portanto, a sintaxe da função rgb é a seguinte:

rgb(vermelho verde azul / alfa%)

O / alpha pode ser omitido se for 100%.

    💡 Semelhante à nota anterior, se você já viu a maneira antiga de escrever cores rgb com alfa, ainda pode usá-la. Existem duas maneiras: rgba(0, 0, 0, 0.75). Além disso, os navegadores agora criaram um alias de rgb para rgba para que você possa escrever rgb(0, 0, 0, 0.75) e rgb(0, 0, 0, 75%). Eles são todos equivalentes.

📘 A palavra-chave transparent

Como deixar o fundo totalmente transparente? Você pode usar a palavra-chave transparent. Então, o código fica assim: color: transparent. Ou você pode definir o canal alfa como 0%. Isso seria a cor: rgb(0 0 0 / 0%).

📘 Paletas de cores

Muitos recursos ajudam você a encontrar cores existentes (especialmente cores que combinam bem). Discutiremos isso mais adiante, assim como a implicação de acessibilidade.

Por enquanto, você pode se inspirar nas paletas de cores populares fornecidas pelo site Color Hunt .

📘 Representação hexadecimal

Vimos como podemos misturar cores usando a função rgb(). Muitas vezes você verá essas cores escritas em representações diferentes. Eles ainda são as mesmas cores, mas representados de forma diferente em hexadecimal.

Por exemplo, rgb(0 0 0) é o mesmo que #000000 e rgb(255 255 255) é o mesmo que #FFFFFF.

📘 O que é hexadecimal?

Hexadecimal é uma forma de contar onde a base é 16. Os humanos contam com a base 10 (chamada decimal).

Veja como você pode contar em Hexadecimal:

    0
    1
    2
    3
    4
    5
    6
    7
    8
    9
    A
    B
    C
    D
    E
    F

O valor A representa 10 em decimal. O valor F representa 15 em decimal.

A conversão entre decimal e hexadecimal não é direta e requer um pouco de matemática. No entanto, não recomendamos investir tempo aqui, considerando quantos tópicos você deve aprender ao criar sites. Você sempre pode usar calculadoras on-line.

    💡 A maioria (se não todas) as ferramentas de desenvolvimento e design mostrarão a representação rgb e hexadecimal da mesma cor. Você nunca fará a conversão manualmente.

O que você vai acabar lembrando depois de usar cores hexadecimais algumas vezes é que:

    00 é o mesmo que 0 (é o mínimo)
    FF é o mesmo que 255 (é o máximo)

📘 Representando cores em hexadecimal

Assim, as cores também podem ser representadas em hexadecimal usando a sintaxe abaixo:

#RRGGBB

Onde existem dois números usados para representar cada canal de cor. Vejamos alguns exemplos comuns:

    rgb(0 0 0) é o mesmo que #000000.
    rgb(255 255 255) é o mesmo que #FFFFFF.

Agora, digamos que você tenha a cor rgb(243, 197, 197). Sua representação hexadecimal é #F3C5C5. Ninguém faz essa conversão de cabeça. Apenas utilizamos as DevTools do navegador conforme imagem abaixo:

Então, por que usar hexadecimal quando você pode usar rgb? É apenas uma questão de preferência. Não importa se você usa rgb ou hexadecimal.

No entanto, há uma exceção quando você precisa calcular os valores de vermelho, verde e azul com base em alguns parâmetros. Nesse caso, rgb é o preferido (ou mesmo outras funções de cor, como hsl).

Além disso, você pode ver #RGB, que pode ser usado quando um único valor é suficiente para representar o canal vermelho, outro valor único é suficiente para representar o canal verde e outro para o canal azul. Por exemplo, #000 é o mesmo que #000000 (preto) e #A9D é o mesmo que #AA99DD.

📘 Especificando o canal alfa

Com hexadecimal, é possível especificar o canal alfa como os dois últimos caracteres usando a sintaxe abaixo:

#RRGGBBAA

onde AA representa o valor de Alpha. esse valor também está em hexadecimal em vez de uma porcentagem. Portanto, lembre-se de que o mínimo é 00 e o máximo é FF.

Assumindo a cor rgb(25 178 74 / 50%), podemos usar as DevTools para obter o equivalente hexadecimal: #19B24A80.

Os dois últimos dígitos são 80, que está no meio entre 00 e FF (que é equivalente a 50% em decimal). Isso não é muito simples e requer cálculos. Como Web Developer ou Web Designer, você desejará usar ferramentas para fazer as conversões.
