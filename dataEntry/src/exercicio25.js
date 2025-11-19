// Objetivo: O objetivo é criar um algoritmo que colete o nome, número de matrícula, média final e curso de um aluno, armazenando esses dados em um único objeto.
// O algoritmo deve, em seguida, adicionar uma nova propriedade chamada situação a esse objeto, classificando o aluno como "Aprovado" se a sua média final for igual ou superior a 7,0, ou como "Reprovado" em caso contrário.
import readline from 'readline-sync';

const listStudent = [];
for (let student = 0; student < 3; student++) {
  const name = readline.question(`Nome do ${student + 1} estudante: `);
  const enrollment = readline.question(`Número da matrícula do ${student + 1} estudante: `);
  const finalAverage = readline.question(`Média final do ${student + 1} estudante: `);
  const course = readline.question(`Qual o curso do ${student + 1} estudante: `);
  listStudent.push({ name, enrollment, finalAverage, course });
}

function assessTheStudentSituation(listData) {
  listData.forEach((student) => {
    if (student.finalAverage >= 7) {
      student.result = 'Aprovado';
      console.log(
        `\nAluno: ${student.name}
Resultado: ${student.result}\n`,
      );
    } else {
      student.result = 'Reprovado';
      console.log(
        `\nAluno: ${student.name}
Resultado: ${student.result}\n`,
      );
    }
  });
}

assessTheStudentSituation(listStudent);
