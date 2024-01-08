// OR operator convert to boolean first true return
// no true return last value
console.log(null||undefined||3);// return 3
console.log(null||2||3);// return 2
console.log(null||undefined||""||0);// return 0

// AND operator convert to boolean first false return
// no false return last value
console.log(null&&44&&3);// return null
console.log(2&&undefined&&3);// return undefined
console.log(3&&33&&66);// return 66

// ?? nullish coalescing return first defined value
console.log(undefined??null??22); // return 22
