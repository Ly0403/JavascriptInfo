/* eslint-disable guard-for-in */
const vehicle = {
  drive: true,
};

const bicycle = {
  __proto__: vehicle,
  wheel: 2,
};

const car = {
  __proto__: vehicle,
  wheel: 4,
};

console.log(Object.getOwnPropertyDescriptor(vehicle, '__proto__'));
console.log(car.drive);
console.log(bicycle.drive);
console.log(bicycle.wheel);

// no cycling during for __proto__
// __proto__ should be null or object
// an object can read from __proto__
// an object can not write to proporties of __proto__
// an object can write to __proto__ only with getter/setter

console.log(Object.keys(car)); // only whell
// the method do not take into consideration of inherit properties

for (const key in car) {
  console.log(key); // whell, drive
  // for .. in uses inherit properties
}

for (const key in car) {
  // hasOwnProperty can be used to filter only properties in the obj
  if (car.hasOwnProperty(key)) {
    console.log(key); // whell
  }
}
