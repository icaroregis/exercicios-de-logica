class Pet {
  name = 'Buddy';
  type = 'Dog';

  play() {
    console.log(`${this.name} is playing with a ball.`);
  }
}

const buddy = new Pet();
buddy.play(); // Notice something off when you run this?
