/* eslint-disable guard-for-in */
const a = Symbol();
const b = Symbol();

console.log(a===b);// false
// symbol is an unique identier
// object keys can be string or Symbol

// symbols are the hidden properties
// of the object
const id = Symbol();
const obj ={
  [id]: id,
};

for (const v in obj ) {
  console.log(v); // no key since symbols not included in for
}
