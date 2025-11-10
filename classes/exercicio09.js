class Pet {
  name = 'Coco';
  species = 'parrot';
  age = 3;
  favoriteToy = 'bell';

  play() {
    console.log(`${this.name} is playing with his favorite toy called: ${this.favoriteToy}`);
  }
}

const coco = new Pet();
coco.play();
