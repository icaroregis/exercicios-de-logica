// Cálculo da folha de pagamento no local de trabalho com um pequeno contratempo
let horasBase = 40;
let totalHorasTrabalhadas = 45;
let taxaSalarial = 15;
let taxaDeHorasExtras = taxaSalarial * 1.5;
let pagamento =
  totalHorasTrabalhadas <= horasBase
    ? totalHorasTrabalhadas * taxaSalarial
    : horasBase * taxaSalarial + (totalHorasTrabalhadas - horasBase) * taxaDeHorasExtras;
