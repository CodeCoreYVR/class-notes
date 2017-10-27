// PROMISES

// To create a promise, use the `Promise` constructor.
// It requires a callback as an argument which is called with
// a `resolve` function and a `reject` function as its arguments.
// This callback is usually named the executor or the resolver.

new Promise((resolve, reject) => {
  if (false/* something goes wrong */) {
    // Call `reject` when something goes wrong or when an error occurs.
    // JavaScript will see this as an error.
    reject('Danger! Danger!')
  }

  // Call `resolve` when the promise is complete. The argument passed to resolve
  // will be the value that the Promise "returns". We call this the Promise Value.
  resolve('It worked!')
 })

 // Until `reject` or `resolve` is called, a promise is in a "pending" state.
 // When `resolve` is called, a promise's state changes to "resolved".
 // When `reject` is called, a promise's state changes to "rejected".

 // A promise can only be rejected or resolved once. The first time reject or resolve
 // is called is the only time they will be used.

 // DEMO: Flipping Coins

function flipCoin () {
  return new Promise((resolve, reject) => {
    const coinFace = ['HEADS', 'TAILS'][Math.floor(Math.random() * 2)];
    resolve(coinFace);
  })
}

function flipCoinWithCB (fn) {
  const coinFace = ['HEADS', 'TAILS'][Math.floor(Math.random() * 2)];
  fn(coinFace);
}

// EXERCISE: Roll Die

function random (n) {
  return Math.floor(Math.random() * n);
}

// Usually when writing asynchronous functions that return promises instead
// of using a callback.
// 1. A promise will be returned early in the function
// 2. The actual asynchronous work will be done inside the executor (callback
//    the promise constructor takes).
// 3. Inside, `resolve` will be used to return a value.
// 3b. Reject will be used if an error occurs.
function rollDie (n) {
  return new Promise((resolve, reject) => {
    resolve(random(n) + 1);
  })
}

// DEMO: Throwing the coin too far

function throwCoin () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['HEADS', 'TAILS'][random(2)])
    }, 1000 + random(4000));

    setTimeout(() => {
      reject('Lost coin! Throw again.')
    }, 3000);
  })
}

// Using Promises

// To get the resolved value from a promise, use the `.then` method. When
// the status of the promise is changed to `resolved`, a callback passed
// to `then` will be called with the promise value as its argument.

/*
throwCoin()
  .then(promiseValue => {
    console.log('Coin is ', promiseValue);

    throwCoin()
      .then(promiseValue => {
        console.log('The second coin is ', promiseValue)

        throwCoin()
          .then(promiseValue => {
            console.log('The third coin is ', promiseValue)
          })
      })
  })
*/
// .then returns a promise allowing us to chain then methods one after the other
// forever. The promise that returns will resolve the value that its callback returns.
// If its callback returns promise, instead it will resolve with that promise's
// promise value.

/*
throwCoin()
  .then(promiseValue => {
    console.log('Coin is ', promiseValue);
    return throwCoin()
  }) // <- returns new Promise((resolve) => resolve(throwCoin()))
  .then(promiseValue => {
    console.log('The second is ', promiseValue);
    return throwCoin();
  }) // <- returns new Promise((resolve) => resolve(throwCoin()))
  .then(promiseValue => {
    console.log('The third coin is ', promiseValue);
    return 'Hello!'
  }) // <- returns new Promise((resolve) => resolve('Hello!'))
  .then(promiseValue => {
    console.log('The greeting is ', promiseValue)
  })
  .catch(error => {
    console.error('Oops! It was rejected with ', error)
  })
  */

// DEMO: Create a delay function

function delay (time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  })
}

// EXERCISE: Upgrade Delay

function delayWithValue (time, value) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('time:', time, 'value:', value)
      resolve(value)
    }, time)
  });
}

// usage:
/*
delayWithValue(2000, "Hello, World!")
  .then(value => {
    console.log(value)
    return delayWithValue(1000, "Things")
  })
  .then(console.log)
*/
  // 👆 we can do this because `console.log` is a function. We didn't write
  // be can still pass it as a callback. then doesn't care what function it gets.
  // Regardless of what it is, it will call it with one argument: the resolved value.

// DEMO: Sequential vs Parallel

// Promise.all

function sequentialDemo() {
  console.time('sequentialDemo');
  return delayWithValue(1000 + random(1000), 10)
    .then(() => delayWithValue(1000 + random(1000), 20))
    .then(() => delayWithValue(1000 + random(1000), 30))
    .then(() => delayWithValue(1000 + random(1000), 40))
    .then(() => delayWithValue(1000 + random(1000), 50))
    .then(() => console.timeEnd('sequentialDemo'))
}

function parallelDemo() {
  console.time('parallelDemo');
  // Promise.all can be used to execute promises in parallel get
  // all their values in order.

  // It takes an array of promises or values. It returns a promise
  // that resolves an array with all its values resolved.

  // The promise resolves only once all promises passed to it in an array
  // are resolved.
  return Promise.all([
    delayWithValue(1000 + random(1000), 10),
    delayWithValue(1000 + random(1000), 20),
    'dasdasdas',
    delayWithValue(1000 + random(1000), 30),
    'dasdasdsa',
    delayWithValue(1000 + random(1000), 40),
    delayWithValue(1000 + random(1000), 50)
  ])
    .then(resolvedValue => {
      console.timeEnd('parallelDemo')
      console.log('Promise.all\'s resolved value:', resolvedValue)
    })
}

// Promise.race

function raceHorses () {
  console.log('🔫 🏇🏇🏇🏇🏇')
  return Promise.race([
    delayWithValue(1000 + random(3000), 'Twinkle Star'),
    delayWithValue(1000 + random(3000), 'Rocket Hooves'),
    delayWithValue(1000 + random(3000), 'Bojack'),
    delayWithValue(1000 + random(3000), 'Dead Last'),
    delayWithValue(1000 + random(3000), 'Seabiscuit')
  ])
    .then(resolvedValue => {
      console.log(`${resolvedValue} won!!! 🏁`)
    })
}








 // bump
