/* eslint-disable require-jsdoc */
class Animal {
  constructor(name) {
    this.name = name;
    this.leg = 4;
  }

  walk(step) {
    console.log('can walk '+ step + ' steps.');
  }
}

class Cow extends Animal {
  give() {
    console.log('Milk');
  }
}

class Cat extends Animal {
}

const cow1 = new Cow('Cow');
cow1.walk(4);
cow1.give();

const cat1 = new Cat('Cat');
cat1.walk(4);
// cat1.give(); // Error

// method overrride

class Dog extends Cow {
  constructor(name) {
    super(name);
    this.leg = 2;
  }
  give() {
    console.log('No milk');
  }
}

const dog1 = new Dog('Dog');
console.log(dog1.name);
console.log(dog1.leg);
console.log(dog1.give());
