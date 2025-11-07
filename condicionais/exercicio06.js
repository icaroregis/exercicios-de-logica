var url = 'blog.meusite.com';
var condicao = url.startsWith('http') || url.includes('.com');

function startsWithHttpOrContainsCom(condicao) {
  if (condicao) {
    console.log('URL processada');
  } else {
    console.log('URL rejeitada');
  }
}

startsWithHttpOrContainsCom(condicao);
