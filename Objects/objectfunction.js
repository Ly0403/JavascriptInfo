const user ={
  name: 'Yucel',
  sayHi: function() {
    console.log('Hi ' + this.name); // this means is the current object.
  },
  // different usage of func in object
  sayBye() {
    console.log('Bye ' + this.name);
  },
};
user.sayHi();
user.sayBye();
