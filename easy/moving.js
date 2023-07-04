const walkingAnimal = {
  walk() {
    return `${this.name} ${this.gait()} forward`;
  },
};

class Person {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "strolls";
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "saunters";
  }
}

class Cheetah {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "runs";
  }
}

Object.assign(Person.prototype, walkingAnimal);
Object.assign(Cat.prototype, walkingAnimal);
Object.assign(Cheetah.prototype, walkingAnimal);

let mike = new Person("Mike");
console.log(mike.walk());
// "Mike strolls forward"

let kitty = new Cat("Kitty");
console.log(kitty.walk());
// "Kitty saunters forward"

let flash = new Cheetah("Flash");
console.log(flash.walk());
// "Flash runs forward"

// ALTERNATIVELY! We can make a superclass called 'walkingMammal' that
// each of our classes above could inherit from. It would look like this:

class WalkingMammal {
  constructor(name, walkStyle) {
    this.name = name;
    this.walkStyle = walkStyle;
  }

  gait() {
    return this.walkStyle;
  }

  walk() {
    return `${this.name} ${this.gait()} forward`;
  }
}