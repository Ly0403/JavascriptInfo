let work = function(a, b) {
  console.log( a + b );
};

const spy = function(func) {
  const wrapper = function(...args) {
    wrapper.calls.push(args);
    // eslint-disable-next-line no-invalid-this
    return func(...args);
  };
  wrapper.calls = [];
  return wrapper;
};

work = spy(work);
work(1, 2); // 3
work(4, 5); // 9


for (const args of work.calls) {
  console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}


const f = function(x) {
  console.log(x);
};

const delay = function(func, ms) {
  const wrapper = function(...x) {
    setTimeout(() => {
      // eslint-disable-next-line no-invalid-this
      func.apply(this, x);
    }, ms);
  };

  return wrapper;
};

const f1000 = delay(f, 1000);
const f2500 = delay(f, 2500);

f1000("test1000"); // shows "test" after 1000ms
f2500("test2500"); // shows "test" after 2500ms
