'use strict';
// eslint-disable-next-line require-jsdoc
function Car() {
}
console.log(Car.prototype);
// all functions has a property named prototype
// prototype is an object with one key named constructor
// constructor is function itself
// sample
Car.prototype = {
  constructor: Car,
};
Car.prototype.constructor = Car;

const audi = new Car();
console.log(audi.constructor); // Car
// new sets the prototype

