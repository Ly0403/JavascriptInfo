const sum = function(a) {
  return function(b) {// closure is that a function remembers its outer lex env
    return a + b;
  };
};
console.log(sum(2)(3));

const arr = [1, 2, 3, 4, 5, 6, 7];
const inBetween = (a, b) => {
  return function(v) {
    return (v > a && v < b) ? 1 : 0;
  };
};
console.log(arr.filter(inBetween(3, 6)));

// sort by field
const byField = function(prp) {
  return function(a, b) {
    return a[prp] > b [prp] ? 1 : -1;
  };
};

const users = [
  {name: "John", age: 20, surname: "Johnson"},
  {name: "Pete", age: 18, surname: "Peterson"},
  {name: "Ann", age: 19, surname: "Hathaway"},
];

console.log(users.sort(byField('age')));

