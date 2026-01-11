abstract class Animal {
  abstract makeSound(duration: number): void;

  move(duration: number) {
    console.log("Moving along...");
    this.makeSound(duration);
  }
}

class Dog extends Animal {
  makeSound(duration: number) {
    console.log("Woof woof");
  }
}
class Cat extends Animal {
  makeSound(duration: number) {
    console.log("Meow meow");
  }
}

const dog = new Dog();
dog.move(10);
