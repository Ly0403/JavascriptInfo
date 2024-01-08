/* eslint-disable require-jsdoc */
const var1 = 'xxx';

export function testConsole() {
  const var1 = "yyy";
  console.log(var1);
  return 'aaa';
}

testConsole();
console.log(var1); // xxx or yyy?
// the output is xxx since the
// function created a new variable with the same name

// callback functions
// function expression
// create callback function
// const func01 = function(textParam, func02, func03) {
//   confirm(textParam) ? func02() : func03();
// };
// create function as function declaration

// function sayOK() {
//   console.log("OK");
// }
// create function as function expression
// const cancFunc = function() {
//   console.log("Canceled");
// };
// function expression created when
// it is called while declaration in the beginning
// func01("Agree?", sayOK, cancFunc);

// create func01 as arrow function
// const funcArr01 = (textParam, func02, func03) =>
//   confirm(textParam) ? func02() : func03();
// funcArr01();

const sayOKFunc = () => {
  console.log("OK");
};
sayOKFunc();
