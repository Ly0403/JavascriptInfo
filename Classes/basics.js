/* eslint-disable require-jsdoc */
class User {
  constructor(name) {
    this.name = name;
  }

  method01() {
    console.log(this.name);
  }
}

// user = {
//   name: 'John',
// };

const user1 = new User('John');
user1.method01();

console.log(typeof User);// function
console.log(user1.__proto__);// User
console.log(User.prototype.constructor);
console.log(Object.getOwnPropertyNames(user1));// name
console.log(Object.getOwnPropertyNames(User));// prototype, name
console.log(Object.getOwnPropertyNames(User.prototype));// constructor, method01

// class vs function
// 1. class function has a property [[IsClassConstructor]]
// 2. class methods are not enumerable
// 3. use strict always is set

class Car {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name + ' AAA';
  }

  set name(value) {
    this._name = value + ' BBB ';
  }

  show() {
    console.log(this._name);
  }

  showBound = () => {
    console.log(this._name);
  };
}

const audi = new Car('audi a');
console.log(audi.name);

// losing this and bound method
setTimeout(audi.show, 1000); // undefined this got lost
setTimeout(audi.showBound, 1000); // works arrow function finds this

class Clock {
  timer = null;

  constructor(template) {
    this.template = template;
  }

  render() {
    const date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;
    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;
    const output = this.template.replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
    console.log(output);
  }

  start() {
    this.render();
    this.timer = setInterval(() => {
      this.render();
    }, 1000);
  }

  stop() {
    clearInterval(this.timer);
  }
}

const clock = new Clock('h:m:s');
clock.start();

setTimeout(() => {
  clock.stop();
}, 10000);
