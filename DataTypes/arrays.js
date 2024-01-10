// arrays are immutable
// ordered collections
const arr01 = [1, 2, 3, 4];
console.log(arr01[-2]);// undefined
console.log(arr01.at(-1));// 4

// queue FIFO
// stack LIFO
arr01.push(5); // add 5 to the end
arr01.pop(); // remove 5 from end LIFO
arr01.shift(6); // add 6 to the start
arr01.unshift(); // remove 6 from the start

// array is a special kind of the objects
// the elements are stored in the arbitrary memories.
// const arr01 = {
//     0 : 1,
//     1 : 2,
// };
