// Demo: A Stack Object

function Stack () {
  this.collection = [];
}

Stack.prototype.push = function (val) {
  this.collection.push(val);
  // returning `this` here allows us to chain `.push`
  // (e.g. stack.push(8).push(11).push(20))
  return this;
}

Stack.prototype.pop = function () {
  return this.collection.pop();
}

// The Call Stack

function callStackDemo() {
  function a () {
    console.log('This is A!');
  }
  function b () {
    a();
    console.log('This is B!');
  }
  function c () {
    b();
    console.log('This is C!');
  }
  function d () {
    c();
    console.log('This is D!');
  }
  debugger;
  d();
};

// Exercise: A Queue Object

class Queue {
  constructor () {
    this.collection = [];
  }

  enqueue (value) {
    this.collection.push(value);
    return this;
  }

  dequeue () {
    return this.collection.shift();
  }
}

// Demo: Linked List

class Node {
  constructor (value, next = null) {
    Object.assign(this, {value, next});
    // 👆 {value, next} is a short-hand syntax for
    // {value: value, next: next}
  }

  first () {
    return this.value;
  }
  rest () {
    return this.next;
  }
  prepend (value) {
    return new Node(value, this);
  }
  lastNode () {
    let pointer = this;
    while (pointer.next !== null) {
      pointer = pointer.next;
    }
    return pointer;
  }
  last () {
    return this.lastNode().value;
  }
  append (value) {
    this.lastNode().next = new Node(value);
    return this;
  }
}

let list = new Node('Last').prepend(2).prepend(1).prepend('First');


// Demo: Sum with recursion

function sum (arr) {
  console.log(arr);
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sum(arr.slice(1))
  }
}
// debugger;
// sum([1,2,3,4,5]);


// Exercise: Recursive Factorial
function factorial (n) {
  if (n === 1) return n;
  return n * factorial(n - 1);
}

// Exercise: Reverse a string recursively

function reverse (str) {
  if (str.length === 1) return str;
  return reverse(str.slice(1)) + str[0];
}

// Demo: Benchmarking

function benchmarkDemo () {
  let output = '';

  console.time('concatenate string');

  for (let i = 0; i <= 1000000; i += 1) {
    output += i;
  }
  console.timeEnd('concatenate string');

  return output;
}

// Demo: Benchmark factorial
function factorialIter (n) {
  let total = 1;
  for (let i = n; i >= 1; i -= 1) {
    total *= i;
  }
  return total;
}

function benchmarkFactorial () {
  const factorialRecur = factorial;

  console.time('Recursive');
  for (let i = 0; i < 100; i += 1) {
    factorialRecur(500);
  }
  console.timeEnd('Recursive');

  console.time('Iterative');
  for (let i = 0; i < 100; i += 1) {
    factorialIter(500);
  }
  console.timeEnd('Iterative');
}







/* */
