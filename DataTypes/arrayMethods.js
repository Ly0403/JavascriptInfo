const arr = [1, 2, 3];
arr.splice(0, 2, 4, 4); // remove 2 elements from index 0
// and add two element to the index 0
console.log(arr);

// find findIndex
const arr02 = [
  {
    id: 1, name_: 'Yucel',
  },
  {
    id: 2, name_: 'Yucel02',
  },
];

console.log(arr02.find( (v) => v.id === 1).name_); // Yucel
console.log(arr02.findIndex( (v) => v.id === 2)); // 1

// map
console.log(arr02.map((v)=>v.name_='AAA '+v.name_));

const camelize = (txt) => {
  return txt.split('-')
      .map((v, i)=>v = i !== 0 ? v[0]
          .toUpperCase()+v.substring(1) : v).join('');
};

console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

const filterRange =function( arr, a, b) {
  return arr.filter((v) => v >= a && v <= b);
};

console.log(filterRange([5, 3, 8, 1], 1, 4));
