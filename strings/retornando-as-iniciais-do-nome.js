//Retornar as iniciais do nome
function abbrevName(name) {
  let validation = name
    .split(' ')
    .map((letter) => letter.charAt(0).toUpperCase())
    .join('.');
  return validation;
}
