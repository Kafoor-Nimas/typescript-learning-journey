class Person {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
  getName() {
    if (this.name.length < 2) return "";
    return this.name;
  }
  setName(name: string) {
    if (name.length < 5) return;
    this.name = name;
  }
}

const p1 = new Person("Tim");
p1.getName();
