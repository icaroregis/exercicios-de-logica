// Dada uma matriz de uns e zeros, converta o valor binário equivalente em um número inteiro.

// Por exemplo: [0, 0, 0, 1] é tratado como 0001, que é a representação binária de 1.

const binaryArrayToNumber = (arr) => {
  const binaryString = arr.join('');
  const convertInteger = parseInt(binaryString, 2);
  return convertInteger;
};
