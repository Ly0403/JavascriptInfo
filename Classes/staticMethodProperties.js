/* eslint-disable require-jsdoc */
class Animal {
  static run(speed) {
    console.log('runs with the speed of '+speed);
  }
}

class Cat extends Animal {
  static var01 = 'Static Variable';
}

Cat.run(4); // the static methods are like properties of Class
console.log(Cat.var01); // like a property
