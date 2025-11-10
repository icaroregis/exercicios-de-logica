class Pet {
  type = 'hamster';
  age = 2;

  describe() {
    console.log(`This pet is a ${this.age}-year-old ${this.type}.`);
  }
}

const fluffy = new Pet();
fluffy.describe(); // Output: This pet is a 2-year-old hamster.
