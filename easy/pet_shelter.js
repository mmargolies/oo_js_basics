class Pet {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
}

class Shelter {
  constructor() {
    this.adoptions = {};
    this.pets = [];
  }

  intakePets(...pets) {
    pets.forEach(pet => this.pets.push(pet));
  }

  removePetAvailabiliy(pet) {
    let idx = this.pets.indexOf(pet);
    this.pets.splice(idx, 1);
  }

  adopt(owner, pet) {
    owner.adoptPet(pet);
    this.removePetAvailabiliy(pet);

    if (!this.adoptions[owner.name]) {
      this.adoptions[owner.name] = [[pet.species, pet.name]];
    } else {
      this.adoptions[owner.name].push([pet.species, pet.name]);
    }
  }

  printAdoptions() {
    Object.keys(this.adoptions).forEach(owner => {
      console.log(`${owner} has adopted the following pets:`);
      this.adoptions[owner].forEach(([species, name]) => {
        console.log(`a ${species} named ${name}`);
      });
      console.log();
    });
  }

  printAvailablePets() {
    console.log('The shelter has the following undapoted pets: ');
    this.pets.forEach(pet => {
      console.log(`A ${pet.species} named ${pet.name}`);
    });
  }

  printNumOfAvailablePets() {
    console.log(`The shelter has ${this.pets.length} undopted pets.`);
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  numberOfPets() {
    return this.pets.length;
  }

  adoptPet(pet) {
    this.pets.push(pet);
  }
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let bill         = new Pet('dog', 'Bill');
let ted          = new Pet('cat', 'Ted');
let frank        = new Pet('rat', 'Frank');
let guy          = new Pet('snake', 'Guy');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();

shelter.intakePets(
  butterscotch, pudding, darwin, kennedy, sweetie, molly, chester,
  bill, ted, frank, guy
);

shelter.printAvailablePets();
console.log();

shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);

shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);
console.log();

shelter.printAvailablePets();
shelter.printNumOfAvailablePets();

// P Hanson has adopted the following pets:
// a cat named Butterscotch
// a cat named Pudding
// a bearded dragon named Darwin

// B Holmes has adopted the following pets:
// a dog named Molly
// a parakeet named Sweetie Pie
// a dog named Kennedy
// a fish named Chester

// P Hanson has 3 adopted pets.
// B Holmes has 4 adopted pets.

// FURTHER EXPLORATION:
// Suppose the shelter has a number of not-yet-adopted pets, and wants to
// manage them through this same system. Thus, you should be able to add the
// following output to the example output shown above
// (I took some liberties with the pets)

/*
The Animal Shelter has the following unadopted pets:
a dog named Asta
a dog named Laddie
a cat named Fluffy
a cat named Kat
a cat named Ben
a parakeet named Chatterbox
a parakeet named Bluebell
   ...
The Animal shelter has 7 unadopted pets.
*/