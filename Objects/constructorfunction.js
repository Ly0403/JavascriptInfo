/* eslint-disable require-jsdoc */
function Calculator() {
  let a;
  let b;

  this.read = function() {
    a = prompt('The first number: ');
    b = prompt('The second number: ');
  };
  this.sum = function() {
    console.log('Sum of the values is ', (+a) + (+b));
  };
  this.mul = function() {
    console.log('Mul fo the values is ', a * b);
  };
}

const cal01= new Calculator();
cal01.read();
cal01.sum();
cal01.mul();
