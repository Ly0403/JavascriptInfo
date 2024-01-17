/* eslint-disable require-jsdoc */
async function test() {
  return 1; // similar return Promise.resolve(1);
}

const a = test();
console.log(a instanceof Promise); // true
// means that function with async keyword returns always Promise

async function awaitTest() {
  // the line await waits untill the promise resolved.
  const res = await fetch('https://api.github.com/users/Ly0403');
  console.log(res);
  console.log('after fetch');
  // better way of the use then
  fetch('https://api.github.com/users/Ly0403').then((res)=>console.log(res));
}

awaitTest();


async function loadJson(url) {
  const response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new Error(response.status);
  }
}

loadJson('https://javascript.info/no-such-user.json')
    .catch((err)=>console.log(err)); // Error: 404
