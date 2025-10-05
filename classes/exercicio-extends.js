class Tarefa {
  constructor(titulo, estaCompleta) {
    this.titulo = titulo;
    this.estaCompleta = estaCompleta;
  }

  obterFormatacao() {
    let status = '';
    if (this.estaCompleta) {
      status = '✅';
    } else {
      status = '⏳';
    }
    return `[${status}] ${this.titulo}`;
  }
}

class TarefaMarcar extends Tarefa {
  marcarComoConcluida() {
    this.estaCompleta = true;
  }
}

let tarefa = new Tarefa('Aprendizagem de Programação', false);
console.log(tarefa.obterFormatacao());

let tarefaMarcar = new TarefaMarcar('Aspirar o chão', false);
console.log(tarefaMarcar.obterFormatacao());

tarefaMarcar.marcarComoConcluida();

console.log(tarefaMarcar);
console.log(tarefaMarcar.obterFormatacao());
