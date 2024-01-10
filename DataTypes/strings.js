console.log('Hello'[0] ); // H
console.log('Hello'.at(0)); // H
console.log('Hello'.at(-1)); // o

console.log('Hello'.indexOf('l')); // 2
console.log('Hello'.lastIndexOf('l')); // 3 --> starts from end
console.log('Hello'.indexOf('l', 3)); // 3 --> starts from 3th element

console.log('HelloWorld'.slice(2, 6)); // lloW
console.log('HelloWorld'.substring(2, 6)); // lloW
console.log('HelloWorld'.substr(2, 6)); // lloWor

const name_ = 'john';
console.log(name_[0].toUpperCase()+name_.slice(1));
// Capitilaze only first letter

// truncate the text
const truncate = (txt, maxL) =>{
  if (txt.length<maxL) return txt;
  return txt.slice(0, maxL-1)+'...';
};
console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));
