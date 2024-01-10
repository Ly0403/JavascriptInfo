// iterables works with for loops
const obj = {
  a: '1',
  b: '5',
};

// for (const v of obj){
//     console.log(v); // obj not iterable error
// }

// add Symbol.iterator function to the object
// to make the object iterable
obj[Symbol.iterator] = function() {
  return {
    current: this.a,
    last: this.b,
    next: function() {
      if (this.current<=this.last) {
        return {done: false, value: this.current++};
      } else {
        return {done: true};
      }
    },
  };
};


for (const v of obj) {
  console.log(v); // obj not iterable error
}
