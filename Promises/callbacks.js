// const loadScript = (src) => {
//   const script = document.createElement('script');
//   script.src = src;
//   document.head.append(script);
// };

// loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js');
// console.log( _ ); // not defined error

// with callback
const loadScriptTwo = (src, cb) => {
  const script = document.createElement('script');
  script.src = src;
  script.onload = () => cb();
  document.head.append(script);
};

loadScriptTwo('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', ()=> {
  console.log('sss');
  console.log( _ ); // works
});
