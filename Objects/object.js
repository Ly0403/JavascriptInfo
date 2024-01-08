/* eslint-disable guard-for-in */
const user ={
  name: 'Yucel',
  age: 36,
};

console.log(user.age);

user.color = 'white';

console.log(user);

delete user.age;

console.log(user);

for (const k in user) {
  console.log(k);
}

for (const k in user) {
  console.log(user[k] );
}
