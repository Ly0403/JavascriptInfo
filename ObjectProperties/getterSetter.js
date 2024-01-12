// access properties of objects
// getter and setter
// normal properties are data properties
const user = {
  name_: 'John',
  surname: 'Doe',
  birth: 2000,
  get fullName() {
    return `${this.name_} ${this.surname}`;
  },
  set fullName(value) {
    [this.name_, this.surname] = value.split(' ');
  },
};

console.log(user.fullName);
user.fullName = 'John Doe2';
console.log(user.fullName);

// access property descriptions
// set get enumarable configurable
// writable and value not exists
Object.defineProperty(user, 'age', {
  get() {
    return (new Date().getFullYear() - this.birth);
  },
  set(value) {
    this.birth = (new Date().getFullYear()) - value;
  },
});

user.age = 33;
console.log(user.age);

// smarter getter setters
const car = {
  get color() {
    return this._color;
  },
  set color(value) {
    this._color = value;
  },
};

car.color = 'red';
console.log(car.color);
