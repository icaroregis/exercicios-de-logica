import readline from 'readline-sync';

function passwordIsValid(password) {
  if (!/^[0-9]+$/.test(password)) {
    return 'Senha inválida. Só pode conter números!';
  }
  if (password == null || password === '' || password.length === 0) {
    return 'Senha inválida. A senha não pode ser vazia ou igual a zero.';
  }
  const validation =
    password.length >= 8 && password.length <= 16
      ? 'Senha válida.'
      : 'Senha inválida. A senha deve ter entre 8 e 16 caracteres.';
  return validation;
}

const senha = readline.question('Digite a senha para validação (8-16 caracteres): ');
console.log(passwordIsValid(senha));
