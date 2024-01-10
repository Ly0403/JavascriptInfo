const num01 = 1000000000;
const num02 = 1_000_000_000;
const num03 = 1e9;
num01===num02?console.log('Equal'):console.log('Not equal');
num02===num03?console.log('Equal'):console.log('Not equal');

// hex binary conversion
const num04 = 255;
console.log(num04.toString(16)); // FF
console.log(num04.toString(2)); // 11111111
// to convert a number directly use two dots
console.log(123..toString(16)); // 7B
// or
console.log((123).toString(16)); // 7B

// decimal numbers
// number stores 64bit
// 52 bit before dot
// 11 bit after dot
// 1 bit for sign
console.log(0.1+0.2);// 0.30000000000000004
// the memory stores numbers in binary form
// converting and sum causes unending bits
// the solution
console.log(+(0.1+0.2).toFixed(1));

const a = parseInt(prompt('first number:'));
const b = parseInt(prompt('second number:'));
console.log(a + b);
