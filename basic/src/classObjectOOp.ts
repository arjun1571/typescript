{
  // oop - class

  class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;

    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      // this.name = name;
      // this.species = species;
      // this.sound = sound;
    }

    makeSound() {
      console.log(`the ${this.name} say ${this.sound}`);
    }
  }

  const dog = new Animal("german", "dog", "gwe");
  const cat = new Animal("sdf", "cat", "mew mew");

  cat.makeSound();

  //
}
