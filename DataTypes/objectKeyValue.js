const salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
};

const sumSalaries = function(obj) {
  return Object.values(obj).reduce((sum, v)=> sum + v, 0);
};
console.log(sumSalaries(salaries));

const user = {
  name: 'John',
  age: 30,
};

const count = (user) => {
  return Object.keys(user).length;
};

console.log( count(user) );
