// set is the same with map but no key
// if the value is in the set adding the same value
// will have no effect
const set01 = new Set();
set01.add('1');
set01.add('2');
console.log(set01.size); // 2
set01.add('1');
set01.add('1');
set01.add('1');
console.log(set01.size); // still 2

const unique = (arr) => {
  return new Set(arr).size;
};

const values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O",
];
console.log(unique(values));

const aclean = function(arr) {
  return Array.from(new Set(arr.map(
      (v)=>v = Array.from(v.toLowerCase()).sort().join(''))));
};

const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr));
