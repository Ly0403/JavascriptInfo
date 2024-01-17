// Promise.all([
//   fetch("https://api.github.com/users/Ly0403"), // Promise 1
//   fetch("https://api.github.com/users/lyofficialtr"), // Promise2
//   4, // array may should not have promise the 4 move to then as it is
// ])
//     .then((res) => {
//       return res;
//     // both promises should be resolved to move into Promise handler
//     // res is an iterable includes the resolve result of promises
//     })
//     .then((res) => {
//       return Promise.all(res.map((v) => v.json()));
//     })
//     .then((res) => res.forEach((k) => console.log(k.login)));

// Promise.all([
//   fetch("https://api.github.com/users/Ly0403"), // resolved
//   fetch("https://fakeadddre"), // rejected
//   fetch("https://api.github.com/users/lyofficialtr"), // resolved
//   // if one of the promises rejects, the resolved promises ignored
//   // moves to the catch and then handler not worked
// ])
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

// Promise.allSettled([
//   // allSetted can deal with both resolved and rejected promises
//   fetch("https://api.github.com/users/Ly0403"), // resolved
//   fetch("https://fakeadddre"), // rejected
//   fetch("https://api.github.com/users/lyofficialtr"), // resolved
// ]).then((res) => {
//   res.forEach((v, i) => {
//     if (v.status == "fulfilled") console.log(v);
//     if (v.status == "rejected")
//     console.log("Error occured on Promise " + i + 1);
//   });
// });

Promise.any([
  fetch("https://api.github.com/users/Ly0403"), // resolved
  fetch("https://fakeadddre"), // rejected
  fetch("https://api.github.com/users/lyofficialtr"), // resolved
]).then((res) => {
  console.log(res); // returns only first resolved promise
  // if all the promises rejects,
  // returns all the errors from the rejected promises
});

Promise.race([
  fetch("https://api.github.com/users/Ly0403"), // resolved
  etch("https://fakeadddre"), // rejected
  fetch("https://api.github.com/users/lyofficialtr"), // resolved
]).then((res) => {
  console.log(res); // returns only first settled promise resolved or rejected
});

