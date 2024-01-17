const promise = new Promise((resolve, reject)=>{
  resolve(1);
});
promise.then((res)=>{
  console.log(res);
  return res*2;
}).then((res)=>{
  console.log(res);
  return new Promise((resolve)=>{
    setTimeout(()=>resolve(res*4), 5000);
  });
}).then((res)=>{
  console.log(res);
  return new Promise((resolve)=>{
    setTimeout(()=>resolve(res*4), 5000);
  });
}).then((res)=>{
  console.log(res);
  return new Promise((resolve)=>{
    setTimeout(()=>resolve(res*4), 5000);
  });
});

