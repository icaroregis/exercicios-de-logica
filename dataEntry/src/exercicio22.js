import readline from 'readline-sync';

const universities = [
  { acronym: 'UFAM', course: 'Enfermagem', cutOffScore: 861.51 },
  { acronym: 'UFAM', course: 'Odontologia', cutOffScore: 870.62 },
  { acronym: 'UFAM', course: 'Direito', cutOffScore: 873.47 },
  { acronym: 'IFCE', course: 'Engenharia da Computação', cutOffScore: 888.46 },
  { acronym: 'UNIFAP', course: 'Medicina', cutOffScore: 918.34 },
  { acronym: 'UFPE', course: 'Química', cutOffScore: 625.85 },
  { acronym: 'UFPE', course: 'Medicina', cutOffScore: 854.48 },
  { acronym: 'UFPE', course: 'Pedagogia', cutOffScore: 652.25 },
  { acronym: 'UFPE', course: 'Comunicação social', cutOffScore: 715.56 },
  { acronym: 'UFPE', course: 'Engenharia de Produção', cutOffScore: 671.32 },
  { acronym: 'UFPE', course: 'Engenharia Civil', cutOffScore: 691.15 },
  { acronym: 'UFPE', course: 'Ciências Econômicas', cutOffScore: 684.7 },
];

function listUniversitiesCompatibleWithTheStudentGrade(note1, note2, note3, note4, note5) {
  const gradePointAverage = (note1 + note2 + note3 + note4 + note5) / 5;
  const filterCompatibleUniversities = universities.filter((cutOffScore) => {
    return gradePointAverage >= cutOffScore.cutOffScore;
  });
  if (!filterCompatibleUniversities.length || filterCompatibleUniversities.length === 0) {
    console.log(
      'Infelizmente a sua média não é compatível com nenhuma universidade do nosso banco de dados! Estude mais um pouco e tente novamente ano que vem.',
    );
    return;
  }
  console.log(`\nSua média é de: ${gradePointAverage.toFixed(2)}\nLista de universidades compatíveis com sua média\n`);
  filterCompatibleUniversities.forEach((university) => {
    console.log(
      `\nSigla: ${university.acronym}\nCurso: ${university.course}\nNota de corte: ${university.cutOffScore}`,
    );
  });
}

const mathematicalLanguages = parseFloat(readline.question(`Digite sua nota em Linguagens Matemáticas: `));
const humanities = parseFloat(readline.question(`Digite sua nota em Ciências Humanas: `));
const naturalSciences = parseFloat(readline.question(`Digite sua nota em Ciências da Natureza: `));
const languagesCodes = parseFloat(readline.question(`Digite sua nota em Linguagens e Códigos: `));
const writing = parseFloat(readline.question(`Digite sua nota em Redação: `));

listUniversitiesCompatibleWithTheStudentGrade(
  mathematicalLanguages,
  humanities,
  naturalSciences,
  languagesCodes,
  writing,
);
