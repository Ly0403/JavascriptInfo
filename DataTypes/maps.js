// maps are like objects but the key can be anything
// the keys in the objects always converted to the string
const map01 = new Map();
map01.set(1, 'v1')
    .set('1', 'v2')
    .set({name_: 'nameV'}, 'v3');
console.log(map01.get(1));
console.log(map01.has(1));
console.log(map01.size);
console.log(map01.delete(1));
console.log(map01.size);

for (const v of map01) {// map01.values map01.keys
  console.log(v);
}

// convert object to map
const obj = {
  a: '1',
  b: '2',
};

const map02 = new Map(Object.entries(obj));
console.log(map02.entries());

// convert map to object
console.log(Object.fromEntries(map02.entries()));
