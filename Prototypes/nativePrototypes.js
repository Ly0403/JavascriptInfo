/* eslint-disable no-extend-native */
/* eslint-disable require-jsdoc */
/* eslint-disable no-new-object */
const obj = {};
const obj02 = new Object();
console.log(Object.prototype);
Object.prototype = {
  constructor: Object,
};
console.log(obj.toString());// [object Object]
// obj finds toString from prototype Object
console.log(obj.__proto__);// Object
console.log(obj.__proto__.__proto__);// null
console.log(obj02.__proto__);// Object
console.log(obj02.__proto__.__proto__);// null

const arr = [1, 2, 3];
console.log(arr.__proto__);// Array
console.log(arr.__proto__.__proto__);// Object
console.log(arr.__proto__.__proto__.__proto__);// null
console.log(arr.toString()); // 1,2,3
console.log(arr.__proto__.toString());// 1,2,3
console.log(arr.__proto__.__proto__.toString());// [object Object]


function f() {
  console.log("Hello!");
}
Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
};
f.defer(10000);

function f2(a, b) {
  console.log( a + b );
}
Function.prototype.defer2 = function(ms) {
  const wrapper = function(a, b) {
    setTimeout( f2(a, b), ms);
  };
  return wrapper;
};
f2.defer2(1000)(1, 2);
