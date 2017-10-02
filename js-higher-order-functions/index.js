// JS: Higher-Order Functions

// Using gather syntax

// The gather operator (...) will allow a function to take any number
// of arguments. It will put all arguments into a variable of the name
// to the right of `...`.
function sum (...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

// Sum accepts a variable number of arguments. This a variadic function.
// Usage:
sum(8,3);
sum(9,10,3,3,3,3,1);

// Using spread syntax

// You can also use `...` when calling a function to pass all elements of
// an array arguments to a function.
let arr = [5,4,5,4];
sum(...arr)
// the 👆 essentially calls sum like this 👇
sum(5,4,5,4);
// You can pass any expression as an argument to a function
// including an inline array or a new object with a constructor.
// (e.g. new Task('Do things'))
sum(...[9,0,1,3,4]);


// Arrow Functions
{
  const add = (a = 0, b = 0) => {
    return a + b;
  }
}

// When using arrow function, it will implicitly return if
// it's given a single expression for the function body without braces {}.
const add = (a = 0, b = 0) => a + b;

// If you're arrow function takes a single argument without using gather or
// without default values, you can omit the paranthesis () around the arguments
// for even shorter function.
const bark = doggoName => `${doggoName} barks 'Bork, bork, bork!'`;

// Arrow functions can not be used as constructors

const DoggoBarker = (name) => {
  this.name = name;
}

// try doing the follow:
// new DoggoBarker('Loud Loid');
// Hint: it will give you an error message.

//  📝 toArrowFunction

const notNull = obj => obj !== null;

{
  const flip = fn => {
    return function (a, b) {
      return fn(a, b)
    }
  }
}

const flip = fn => (a, b) => fn(b, a);

// Arrow function's this does not behave like a normal function's this.
// `this` is set based on where the arrow function is in the code.
// It behaves like a regular variable. It's not determined dynamically. It's
// set for life.

const myArrow = () => this; // What is this?
// 👆 returns global window object
const myFunc = function () { return this; } // What is this?
// 👆 returns global window object

const myObject = {
  myProperty: 'A contrived property value',
  myArrow: myArrow, // what will this return?
  // Because myArrow was is an arrow function, `this` was set when
  // the function declared above based on its location in the code.
  // `this` will still be the `window`.
  myFunc: myFunc, // what will this return?
  myInlineArrow: () => this, // what will this return?
  // Still the global window object, because () => this is still scoped
  // inside the body of the script first. An object does not count as a scope.
  myUltimateFunc () {
    const myAnonArrow = () => this;
    console.log('myAnonArrow:', myAnonArrow()); // What will this log?
    // `this` will be of the current scope. The same as `myUltimateFunc` or
    // `myObject`.

    const myAnonFunc = function () { return this }
    console.log('myAnonFunc:', myAnonFunc()) // What will this log?
    // Here `myAnonFunc` is not called as a method. `this` will be the window.
    // To be a method, it would to be called somethinglike `myObject.myAnonFunc()`
    // which is impossible right now.

    return this; // What will this return?
  }
}

// Higher-Order Function

// 📺 A Loud function
// 📝 A Custom Logger

// Here we expect `fn` to be a function. Be careful when you use loud
// to not call the callback when you're using it.
// loud(number5()) <-- BAD!
// loud(number5) <-- GOOD! 😎
function loud (logFn, fn, ...args) {
  logFn(`Calling ${fn.name}!`);
  const returnValue = fn(...args);
  logFn(`Called ${fn.name} and returned ${returnValue}...`);
  return returnValue;
}
const number5 = () => 5;

// usage:
// loud(console.log, add, 8, 7)
// loud(console.warn, sum, 8, 10, 12)
// loud(console.error, number5)

// 📺 Implement each
/*
  function each (fn, arr) {
    for (let value of arr) {
      fn(value)
    }
  }
*/

function each (fn, arr) {
  for (let index = 0, max = arr.length; index < max; index += 1) {
    fn(arr[index], index);
  }
}

/*
function each (fn, arr) {
  for (let [index, value] of Object.entries(arr)) {
    fn(value, index);
  }
}
*/

// usage:
each(val => console.log(val), [1,2,3,4,5]);
each((val, i) => console.log(val, i), ['a','b','c','d','e']);


// 📝 Implement Map

function map (fn, arr) {
  let newArr = [];
  for (let index = 0, max = arr.length; index < max; index += 1) {
    newArr.push(fn(arr[index], index))
  }
  return newArr;
}

// usage:
// In JavaScript, arguments are optional. You can choose to use all arguments
// the function expects.
const repeatedVals = map((val, index) => val.repeat(index), ['a', 'b', 'c', 'd', 'e']);
// Just one...
map((val) => val ** 2, [1,2,3,4,5,6]);
// Or, none 🤷‍♂️
map(() => Math.floor(Math.random()*10), [1,2,3,4,5,6]);

// setTimeout
// setTimeout takes a callback as a first argument and a time, n, in milliseconds as
// the second. It calls the callback `n` milliseconds later.

setTimeout(
  () => console.log('I waited 10s'),
  10000
);

let count = 1;
console.log('Before setTimeout:', count) // what is count here?
setTimeout(
  () => {
    count += 1;
    console.log('Inside setTimeout callback:', count) // what is count here?
  },
  1000
)
console.log('After setTimeout:', count) // what is count here?

// setInterval
const intervalId = setInterval(
  () => console.log('Are we there yet?'),
  500
);


// clearTimeout and clearInterval
// setTimeout and setInterval return an id. Call clearTimeout or clearInterval
// with that id to cancel the timeout or interval.

clearInterval(intervalId); // cancels the setInterval above

// Closures

// let scriptLocal = "I'm global";

function foo (fooArg) {
  let fooLocal = "I'm foo";
  console.log('Inside foo:', fooLocal, fooArg);
  return function bar (barArg) {
    console.log(
      'Inside bar:', fooLocal, fooArg, barArg
    );
  };
};

const fooBar = foo("An arg");
const fooBaz = foo("Zug zug!");
const fooRaz = foo("Barem you!");
// fooBar(8);


// 📺 What? Loud is evolving!

function random (number) {
  return Math.floor(Math.random() * number);
}

function loudWith (logFn, fn) {
  return (...args) => {
    logFn(`Calling ${fn.name}!`);
    const returnValue = fn(...args);
    logFn(`Called ${fn.name} and returned ${returnValue}...`);
    return returnValue;
  }
}

// usage:
const loudRandom = loudWith(console.log, random);
const loudAdd = loudWith(console.log, add);
const loudSum = loudWith(console.log, sum);

// 📺 Timing with setInterval

function runTimer(initialCount = 0, interval = 1000) {
  let count = initialCount;
  console.log('Current count:', count);
  setInterval(() => {
    count += 1
    console.log('Current count:', count);
  }, interval);
}







//
