// Array destructing
const arr = [1, 2, 3];
let [var01, var02, var03] = arr;
[var03, , var01] = [var01, var02, var03];
console.log(var03);
// rest ...
const [var04, ...var05] = arr;
console.log(var04); // 1
console.log(var05); // [2, 3]
// default values
const [var06 = 3, var07]= [, 4];
console.log(var06); // 3
console.log(var07);

// Object destructing
const obj = {
  a: 1,
  b: 2,
};
const {a, b} = obj;
console.log(a); // 1
console.log(b); // 2
const {a: c, b: d} = obj;
console.log(c); // 1
console.log(d); // 2
const {a: e, b: f, g = 100} = obj;
console.log(e); // 1
console.log(f); // 2
console.log(g); // 100
const obj02 = {
  v: 1,
  b: 2,
  c: 3,
};

const {v, ...i} = obj02;
console.log(v); // 1
console.log(i); // { b: 2, c: 3}

const salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
};

const topSalary = (salaries) => {
  if (salaries.length === 0) {
    return null;
  } else {
    let maxSalary = 0;
    for ([key, value] of Object.entries(salaries) ) {
      maxSalary < value ? maxSalary = value : null;
    }
    return maxSalary;
  }
};

console.log(topSalary(salaries));
