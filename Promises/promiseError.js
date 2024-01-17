// fetch('https://fakeadres')
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err.name)); // type error

// new Promise((resolve, reject)=>{
//   resolve(1);
// }).then((res)=>{
//   throw new Error('error in promise handler');
// }).catch((err)=>console.log(err));

// rethrow errors
new Promise((resolve, reject)=>{
  throw new Error('first error');
}).catch((err)=>{
  if (err instanceof Error) {
    console.log('type error');
  } else {
    console.log('other type error');
    throw err;
  }
}).then()
    .catch((err)=> console.log(err));

