// @ts-check
//
// ☝🏽 A linha acima ativa a checagem de tipos para este arquivo. Diversos IDEs interpretam
// a diretiva @ts-check. Ela vai te dar autocompletar útil na web
// e em IDEs compatíveis ao implementar este exercício. Você não precisa
// entender tipos, JSDoc ou TypeScript para completar este exercício de JavaScript,
// e pode ignorar completamente este bloco de comentários e diretiva.
//
// 👋🏽 Olá!
//
// Na trilha de JavaScript nós fornecemos stubs. Esses stubs fornecem um
// ponto de partida para resolver o exercício.
//
// Em geral, cada variável/constante e cada função declarada terá um
// bloco de comentário JSDoc acima, explicando o que a variável/constante guarda ou
// o que a função deve realizar.
//
// 💡 Frequentemente, os blocos de comentário JSDoc têm anotações, como @param e
// @returns, que geralmente são destacadas com uma cor diferente se o IDE
// reconhecer. São essas anotações que são usadas quando
// se refere à constante, variável ou função de outro lugar que
// IDEs exibem.
//
// Você não precisa escrever esses comentários; não é esperado em JavaScript idiomático,
// mas algumas empresas e guias de estilo exigem.
//
// 💡 Você pode limpar completamente um stub antes de começar. Muitas vezes
// recomendamos usar o stub, porque eles já estão configurados corretamente para
// funcionar com os testes, que você pode encontrar em ./lasagna.spec.js
//
// Boa sorte preparando a lasanha!

/**
 * O número de minutos que leva para preparar uma camada.
 */
export const EXPECTED_MINUTES_IN_OVEN = 40;
const PREPARATION_MINUTES_PER_LAYER = 2;

/**
 * Determina o número de minutos que a lasanha ainda precisa ficar no forno para ser preparada corretamente.
 *
 * @param {number} actualMinutesInOven
 * @returns {number} o número de minutos restantes
 */
export function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

/**
 * Dado um número de camadas, determina o tempo total de preparação.
 *
 * @param {number} numberOfLayers
 * @returns {number} o tempo total de preparação
 */
export function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
}

/**
 * Calcula o tempo total de trabalho. Ou seja, o tempo para preparar todas as camadas
 * da lasanha e o tempo já gasto no forno.
 *
 * @param {number} numberOfLayers
 * @param {number} actualMinutesInOven
 * @returns {number} o tempo total de trabalho
 */
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}
