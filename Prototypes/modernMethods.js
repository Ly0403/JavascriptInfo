/* eslint-disable guard-for-in */
const user = [];
console.log(Object.getPrototypeOf(user));

const dictionary = Object.create(null);

dictionary.toString = function() {
  return (Object.keys(dictionary)).toString();
};

// add some data
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// only apple and __proto__ are in the loop
for (const key in dictionary) {
  console.log(key); // "apple", then "__proto__"
}

// your toString in action
console.log(dictionary.toString()); // "apple,__proto__"
