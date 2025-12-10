📘 A propriedade letter-spacing

A propriedade letter-spacing é usada para ajustar o espaço entre as letras. Pode ser aumentada (valores positivos) e diminuída (valores negativos).

Aqui está um exemplo:

<p id="bonus">BÔNUS!</p>
<style>
#bonus {
    font-weight: bold;
    letter-spacing: 2px;
}
</style>

    BÔNUS!

Compare isso com o mesmo exemplo sem modificar o espaçamento entre letras (letter-spacing):

<p id="bonus">BÔNUS!</p>
<style>
#bonus {
    font-weight: bold;
}
</style>

    BÔNUS!

Você também pode fazer pequenos ajustes, como 0.5px ou -0.3px.

    ⚠️ Seu texto pode ficar ilegível se você fornecer um letter-spacing muito grande.

📘 A propriedade line-height

A propriedade line-height é usada para controlar o espaço entre as linhas. Isso geralmente é usado para melhorar a legibilidade de um parágrafo.

Embora a propriedade line-height aceite valores em pixels, recomendamos não fazer isso. É muito comum definir um valor de altura da linha (line-height) e, posteriormente, aumentar o tamanho da fonte (font-size) do parágrafo, esquecendo-se de ajustar a line-height. Você acabará com um texto ilegível.

Em vez disso, recomendamos usar valores sem unidade. Por exemplo, 1.3, 1.5 ou 2.

O valor calculado da line-height será então este número multiplicado pelo font-size. Portanto, a line-height se ajustará automaticamente ao seu font-size!

Aqui está um exemplo:

<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolor quis quae ipsum ad culpa beatae itaque excepturi fugiat! Nostrum eaque adipisci pariatur nulla vero magnam corporis eum incidunt vitae.</p>

<style>
p {
    font-size: 16px;
    line-height: 1.5; /* 1.5 x font-size */
}
</style>

    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolor quis quae ipsum ad culpa beatae itaque excepturi fugiat! Nostrum eaque adipisci pariatur nulla vero magnam corporis eum incidunt vitae.

Agora, digamos que você aumente o tamanho da fonte para 18px. Nesse caso, você não terá que ajustar a line-height:

<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolor quis quae ipsum ad culpa beatae itaque excepturi fugiat! Nostrum eaque adipisci pariatur nulla vero magnam corporis eum incidunt vitae.</p>

<style>
p {
    font-size: 18px;
    line-height: 1.5; /* 1.5 x font-size */
}
</style>

    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolor quis quae ipsum ad culpa beatae itaque excepturi fugiat! Nostrum eaque adipisci pariatur nulla vero magnam corporis eum incidunt vitae.

Se você já usou o Google Docs ou o Microsoft Word antes, provavelmente já viu os valores 1.15, 1.5 e 2:

O valor "Simples" é equivalente a 1 e "Duplo" é equivalente a 2.

    ⚠️ Da mesma forma que o letter-spacing, seu texto pode se tornar ilegível (ou mais difícil de ler) se você fornecer um valor de line-height muito grande.
