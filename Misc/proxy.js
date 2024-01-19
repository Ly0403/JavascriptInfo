/* eslint-disable require-jsdoc */
/* eslint-disable guard-for-in */
// proxies are wrappers fo the objects
const target = {};

const proxy = new Proxy(target, {}); // target and handler are the parameters
proxy.param01 = 5;
console.log(target.param01);
// 5 proxy directly applied to the target
// The reason is there is no handler

// get handler
let cities = ['Samsun', 'Istanbul'];
cities = new Proxy(cities, {
  get(cities, prop) {
    if (cities[prop]) {
      return cities[prop];
    } else {
      return 'No City';
    }
  },
});

console.log(cities[0]); // Samsun
console.log(cities[5]); // No City

// set handler
cities = new Proxy(cities, {
  set(cities, prop, val) {
    if (val === 'Trabzon') {
      cities[prop] = val;
      return true;
    } else {
      return true;
    }
  },
});

console.log(cities);
cities.push('Trabzon');
console.log(cities);

// ownKeys handler to check keys of the objects
let obj = {
  user: 'test01',
  password: 'test',
  email: 'test',
};

obj = new Proxy(obj, {
  ownKeys(target) {
    return Object.keys(target).filter((v)=>v !== 'user');
  },
});

for (const v in obj) {
  console.log(v); // only password and email
}

// delete property
obj = new Proxy(obj, {
  deleteProperty(target, prop) {
    console.log(prop);
    if (prop === 'email') {
      delete target[prop];
      return true;
    }
  },
});

for (const v in obj) {
  console.log(v); // only password
}

// has handler
obj = new Proxy(obj, {
  has(target, prop) {
    return prop === 'email';
  },
});

let user = {
  name: "John",
};

function wrap(target) {
  return new Proxy(target, {
    get(target, prop) {
      if (target[prop]) {
        return target[prop];
      } else {
        return 'no property';
      }
    },
  });
}

user = wrap(user);
console.log(user.name);
console.log(user.age);

let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop) {
    if (prop < 0) return Reflect.get(target, (target.length+(+prop)));
    else return Reflect.get(target, prop);
  },
});

console.log( array[-1] ); // 3
console.log( array[-2] ); // 2
console.log( array[0] ); // 1
