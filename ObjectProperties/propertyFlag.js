/* eslint-disable guard-for-in */
'use strict';

const user = {
  name_: 'John',
  no: '1',
};

console.log(Object.getOwnPropertyDescriptors(user));

Object.defineProperty(user, 'name_', {
  writable: false,
});

// user.name_ = 'NewName'; name_ can not be modified.
console.log(Object.getOwnPropertyDescriptors(user));

for (const key in user) {
  console.log(key); // name, no
}
Object.defineProperty(user, 'name_', {
  enumerable: false,
});
for (const key in user) {
  console.log(key); // no
}

Object.defineProperty(user, 'name_', {
  configurable: false, // can not delete property.
  // can not modify the attributes of the property
  writable: true, // can only change the value
});

// delete user.name_; // Error can not delete
// Object.defineProperty(user, 'name_', {configurable: true});
// Error can not modify attributes
user.name_ = 'John2';
console.log(user.name_); // John2 can update the value

