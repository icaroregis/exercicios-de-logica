class Pet {
  name = 'Lessie';
  activity = 'running';

  doActivity() {
    console.log(`${this.name} is ${this.activity}!`);
  }
}

const lessie = new Pet();
lessie.doActivity();
