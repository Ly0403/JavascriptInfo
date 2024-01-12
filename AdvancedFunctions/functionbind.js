const user = {
  name_: 'John',
};

const f = function() {
  // eslint-disable-next-line no-invalid-this
  console.log(this.name_);
};

f(); // undefined

f.bind(user)();// John

// partial function application

let f2 = function(a, b) {
  console.log( a + b );
};

f2 = f2.bind(null, 22);
// f = f.bind( {name: "John"} ).bind( {name: "Pete"} ); not possible
f2(2);
