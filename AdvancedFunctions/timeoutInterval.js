// const func01 = (a) => {
//   console.log(a);
// };
// const timerId = setTimeout(func01, 2000, 'aaa');
// console.log(timerId);
// clearTimeout(timerId);

// setInterval(func01, 1000, 'a');
// setTimeout(function aaa() {
//   console.log('a');
//   setTimeout(aaa, 2000);
// }, 2000);


const printNumbers = function(from, to) {
  console.log(from);
  //   const intervalId = setInterval(() => {
  //     console.log(++from);
  //     if (from === to) clearInterval(intervalId);
  //   }, 1000);
  setTimeout(function xx() {
    console.log(++from);
    const timerId = setTimeout(xx, 1000);
    if (from === to) clearTimeout(timerId);
  }, 1000);
};

printNumbers(3, 7);
