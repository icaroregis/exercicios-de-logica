📘 Elementos não-semânticos

Nós só aprendemos sobre elementos semânticos ao longo de todo o curso até agora. Cada elemento tinha um significado específico para o navegador.

Por exemplo, o elemento strong significa que seu conteúdo é mais importante do que os outros elementos que estão ao seu redor.

No entanto, às vezes, precisaremos representar um item que não tenha um significado especial ou não tenha um elemento HTML relevante que possamos usar para representá-lo.

Por exemplo, você está criando um site de receitas e gostaria de mostrar um rótulo ao lado de cada receita. Por exemplo, o rótulo pode dizer:

    nova (para receitas adicionadas recentemente)
    vegana (para receitas veganas)
    peixe (para receitas com peixe)

Não há elemento semântico que representaria essa tag ou rótulo de receita. O que fazemos neste caso?

Usamos um elemento não-semântico, ou seja, um elemento que não tem significado semântico.

📘 O elemento span

O elemento span é um elemento não semântico in-line (embutido). Ele não tem nenhum significado especial e nenhum estilo padrão.

O que é importante observar aqui é que o elemento span é em linha (tem um display: inline). Portanto, ele se comporta de maneira semelhante a outros elementos em linha que aprendemos. Ele não entra em uma nova linha e tem um modelo de caixa em linha (inline box model).

Vejamos um exemplo:

<ul>
     <li><span>Novo</span> Massa deliciosa</li>
     <li><span>Peixe</span> Massa de peixe</li>
</ul>

        Novo Massa deliciosa
        Peixe Massa de peixe

Você vê algo de diferente no elemento span? Ele não tem estilos, então você não verá nada de especial. No entanto, colocando span nas palavras Novo e Peixe, podemos estilizá-las.

O elemento span não dá nenhum significado semântico ao que está contido dentro dele. Portanto, o navegador não entende seu conteúdo e não infere nenhum significado específico. Isso é bom, porque, se tivéssemos usado o elemento strong aqui, estaríamos transmitindo o significado semântico errado para o navegador.

📘 Exemplo da vida real

Vamos adicionar alguns estilos básicos ao exemplo acima, para que você possa entender melhor porque precisamos colocar as palavras Novo e Peixe dentro de span:

<ul>
     <li><span class="rotulo-receita">Novo</span> Massa deliciosa</li>
     <li><span class="rotulo-receita">Peixe</span> Massa de peixe</li>
</ul>

<style>
.rotulo-receita {
    background-color: yellow;
    padding: 2px;
    font-size: 12px;
    letter-spacing: 1px;
}
</style>

        Novo Massa deliciosa
        Peixe Massa de peixe

Ao usar elementos não semânticos, é importante fornecer um nome de classe útil para permitir que outros desenvolvedores de sua equipe (e você mesmo, no futuro) entendam melhor o papel desse elemento (já que ele não é semântico).

📘 Quando devo usar span?

Você pode estar se perguntando agora: "Quando devo usar o elemento span"?

Sempre prefira elementos semânticos para casos de uso semânticos. Se você não conseguir encontrar um elemento semântico, use o elemento span.

📘 Situações comuns

O conteúdo do elemento é mais importante do que o seu entorno?
➡️ Então, use o elemento strong.

O conteúdo deve ser enfatizado? Mudar o conteúdo muda drasticamente o significado da frase?
➡️ Então, use o elemento em.

Você está representando um comentário paralelo, direitos autorais, atribuição ou outras formas de textos jurídicos curtos?
➡️ Então, use o elemento small.

Você está representando uma data, hora ou deslocamento de fuso horário?
➡️ Então, use o elemento time.

📘 Situações menos comuns

Uma voz ou humor alternativo está sendo usado? Ou palavras de outro idioma?
➡️ Então, use o elemento i.

Quer chamar a atenção para o conteúdo sem dar a entender que ele tem mais importância?
➡️ Então, use o elemento b.

Você está mencionando o título de uma obra?
➡️ Então, use o elemento cite.

O conteúdo é relevante para o que o usuário está fazendo na página? Por exemplo, um resultado de uma consulta de pesquisa?
➡️ Então, use o elemento mark.

O conteúdo representa uma citação em linha?
➡️ Então, use o elemento q.

📘 Situações raras

Você está apresentando um atalho de teclado?
➡️ Então, use o elemento kbd.

Você está apresentando o texto exibido como subscrito ou sobrescrito?
➡️ Então, use os elementos sub ou sup, respectivamente.

Você está apresentando uma variável?
➡️ Então, use o elemento var.

A lista acima é baseada nos elementos inline que aprendemos até agora.
