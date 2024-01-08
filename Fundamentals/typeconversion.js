console.log("STRING CONVERTION");

const sample=1234;
const sample2=false;
console.log(typeof sample+" "+sample);
console.log(typeof sample2+" "+sample2);
console.log(typeof String(sample)+" "+String(sample));
console.log(typeof String(sample2)+" "+String(sample2));

console.log("NUMBER CONVERTION");

const sample3="  3434  ";
const sample4=true;
const sample5=null;
const sample6=undefined;
const sample7="text";

console.log(typeof sample2+" "+sample3);
console.log(typeof sample2+" "+sample4);
console.log(typeof sample2+" "+sample5);
console.log(typeof sample2+" "+sample6);
console.log(typeof sample2+" "+sample7);
console.log(typeof Number(sample3)+" "+Number(sample3));
console.log(typeof Number(sample4)+" "+Number(sample4));
console.log(typeof Number(sample5)+" "+Number(sample5));
console.log(typeof Number(sample6)+" "+Number(sample6));
console.log(typeof Number(sample7)+" "+Number(sample7));

// Boolean(0,null,NaN,undefined,"") =>false
