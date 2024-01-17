/* eslint-disable require-jsdoc */
const promise = new Promise((resolve, reject) => {
  resolve(1234); // the promise can not return both resolve and reject
  // the second one reject wil be ignored
  reject(new Error('Error message'));
});

promise.then((res, err)=>{
  console.log(res);// 1234
  console.log(err);// undefined since the promise return resolve first.
});
// or
promise.then((res)=>{
  console.log(res);
});

const promiseError = new Promise((resolve, reject) => {
  reject(new Error('Error message'));
});

promiseError.then((res)=>{
  console.log(res); // undefined since the promise return reject
}).catch((err)=>{
  console.log(err.message);
}).finally(()=>{
  console.log('connect is closed.');
})
;

function delay(ms) {
  return new Promise((resolve)=>{
    setTimeout(resolve, ms);
  });
}

delay(10000).then(() => console.log('runs after 10 seconds'));
