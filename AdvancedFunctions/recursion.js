// the max depth of a recursion function
// should be 100_000

// linked list
let linkedList = {value: 1};
linkedList.next = {value: 2};
linkedList.next.next = {value: 3};
console.log(linkedList);

// add new object to the list
linkedList = {value: 11, next: linkedList};
console.log(linkedList);

// delete third node {value: 2}
linkedList.next.next = linkedList.next.next.next;
console.log(linkedList);

// sum up to n
// loop O(n)
const sumTo = (n) =>{
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumTo(100));

// recursive sum
const sumTo2 = (n) =>{
  if (n === 1) return 1;
  return n + sumTo2(n - 1);
};

console.log(sumTo2(100));
