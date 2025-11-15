// Muito bem, viajante espacial! Imagine a seguinte situação: você está monitorando os visitantes de dois blogs diferentes em seu fantástico site galáctico. Cada usuário é identificado por um ID único e você possui registros de todas as suas visitas. Sua missão, caso aceite, é descobrir se há alguma sobreposição de visitantes em cada blog. Em termos simples, queremos saber se alguém visitou os dois blogs. Você pode decodificar esses registros – eles são simplesmente listas de IDs de usuário, com cada ID espelhado por um número inteiro único. Seu código deve retornar verdadeiro se houver alguma sobreposição e falso caso contrário.

function audienceOverlap(blog1, blog2) {
  const set01 = new Set(blog1);
  return blog2.some((set02) => set01.has(set02));
}

let blog1 = [1, 2, 3, 4, 5];
let blog2 = [6, 7, 8, 9, 10];

if (audienceOverlap(blog1, blog2)) {
  console.log('Yes, there is an audience overlap between both blogs.');
} else {
  console.log('No, there is no audience overlap between both blogs.');
}
