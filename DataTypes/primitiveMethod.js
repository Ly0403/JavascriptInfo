const str = 'Test';
// str is a primitive
// when a primitive is created a wrapper object is created
// str = {
//   value: 'Test',
//   toUpperCase: function() {
//     return 'TEST';
//   },
// };
console.log(str.toUpperCase());
