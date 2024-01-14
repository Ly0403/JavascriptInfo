'use strict';

/* eslint-disable require-jsdoc */
class Animal {
  constructor(speed) {
    this._speed = speed;
  }
  // private # sign
  #leg = 0;

  // read only
  get speed() {
    return this._speed;
  }

  method1() {
    this.#leg = 2;
  }
}

class Cat extends Animal {
}

const animal = new Animal(22);
// console.log(animal.#leg); // Error
animal.method1();

const cat = new Cat(22);
// console.log(cat.#leg); // Error
console.log(cat.speed); // 22
cat.speed = 'aa'; // Error
console.log(cat.speed);// 22
