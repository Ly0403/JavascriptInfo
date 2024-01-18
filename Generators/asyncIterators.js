/* eslint-disable require-jsdoc */
// make an object async iterable

// const obj = {
//   from: 1,
//   to: 5,
//   [Symbol.asyncIterator]() {
//     return {
//       current: this.from,
//       last: this.to,
//       async next() {
//         await new Promise((resolve, reject)=>setTimeout((resolve), 3000));
//         if (this.current<=this.last) {
//           return {done: false, value: this.current++};
//         } else {
//           return {done: true};
//         }
//       },
//     };
//   },
// };

// (
//   async () => {
//     for await (const v of obj) {
//       console.log(v);
//     }
//   }
// )();


// async generators

async function* genFunc01() {
  yield 1;
  await new Promise((resolve) =>setTimeout(resolve, 1000));
  yield 2;
  await new Promise((resolve) =>setTimeout(resolve, 1000));
  yield 3;
}

async function loopGen() {
  const gen01 = genFunc01();
  for await (const v of gen01) {
    console.log(v);
  }
}
loopGen();
