const i=0;
// can initial i and increase/descrease be bypassed.
// for(;i<5;)
// {
//     console.log(i);
// }

outer:
for (i = 0; i < 3; i++) {
  for (let j=0; j<4; j++) {
    console.log(j);
    // break; only breaks the inner loop
    // how to break outside loop;
    // use label
    break outer;
  }
}

// write even numbers from 2 to 10
console.log("EVEN NO");
for (let i =2; i<11; i+=2) {
  console.log(i);
}
