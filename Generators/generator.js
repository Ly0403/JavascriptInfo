/* eslint-disable require-jsdoc */
function* generator() {
  yield 'first value';
  yield 'second value';
  yield 'third value';
  return 'last value';
}

const generatorExecutor = generator();
console.log(generatorExecutor); // not a function but an object

console.log(generatorExecutor.next()); // {value: first value, done: false}
console.log(generatorExecutor.next()); // {value: second value, done: false}
console.log(generatorExecutor.next()); // {value: third value, done: false}
console.log(generatorExecutor.next()); // {value: last value, done: true}
console.log(generatorExecutor.next()); // {value: undefined, done: true}

// generators are iterable

const generatorExecutor02 = generator();

for (const v of generatorExecutor02) {
  console.log(v); // iterate over the values except the return one
}

const generatorExecutor03 = generator();
console.log([...generatorExecutor03]); // convert to array

// iterable with generators
const obj = {
  from: 1,
  to: 5,
  // for of call this method for iteration
  [Symbol.iterator]() {
    // method returns an object with current, last and next function
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current<=this.last) {
          return {value: this.current++, done: false};
        } else {
          return {done: true};
        }
      },
    };
  },
};
// object is not iterable
for (const v of obj) {
  console.log(v);
}

// with generator
const obj02 = {
  from: 1,
  to: 5,
  // for of call this method for iteration
  * [Symbol.iterator]() {
    // generator
    for (let i = this.from; i <= this.to; i ++) {
      yield i;
    }
  },
};

for ( const v of obj02) {
  console.log(v);
}

// yield two way street
function* twoWay() {
  const result = yield "what is the next value?";
  console.log(result);
  const result02 = yield "what is the next value?";
  console.log(result02);
}

const generatorTwoWay = twoWay();
generatorTwoWay.next();
generatorTwoWay.next('aaa'); // send data to previous call
generatorTwoWay.next('bbb'); // send data to previous call

function* twoWayWithError() {
  try {
    const result = yield "what is the next value";
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

const generatorTwoWayWithErr = twoWayWithError();
generatorTwoWayWithErr.next();
// generatorTwoWayWithErr.next('first value'); // successful data
generatorTwoWayWithErr.throw(new TypeError('Type error'));

// return call todone immediately
function* generator03() {
  yield 'first value';
  yield 'second value';
  yield 'third value';
}

const gen03 = generator03();
console.log(gen03.next()); // first value done false
console.log(gen03.return()); // undefined value done true


function* pseudoRandom(seed) {
  while (true) {
    const next = seed * 16807 % 2147483647;
    seed = next;
    yield next;
  }
}
const gen04 = pseudoRandom(1);

console.log(gen04.next().value); // 16807
console.log(gen04.next().value); // 282475249
console.log(gen04.next().value); // 1622650073

