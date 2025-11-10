class Pet {
  name = 'Buddy';
  age = 4;

  describe() {
    console.log(`${this.name} is ${this.age} years old.`);
  }

  walk() {
    console.log(`${this.name} is walking!`);
  }

  run() {
    console.log(`${this.name} is running!`);
  }

  eat() {
    console.log(`${this.name} is eating!`);
  }

  play() {
    console.log(`${this.name} is playing!`);
  }
}

const buddy = new Pet();
buddy.describe(); // Prints: Buddy is 4 years old.
buddy.walk();
buddy.run();
buddy.eat();
buddy.play();
