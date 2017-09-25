console.log(`I'm loaded! 👋`);

// Demo: ArrayExtras
// Create an ArrayExtras object with methods to manipulate arrays
//
// .last
// .first
// .take
// .drop

const ArrayExtras = {
  // Usage:
  // ArrayExtras.last([1,2,3,4]) -> returns 4
  last: function last (arr) {
    return arr[arr.length - 1];
  },
  // Usage:
  // ArrayExtras.first([1,2,3,4]) -> returns 1
  first (arr) { return arr[0]; },
  // 👆 is shorthand syntax for 👇
  // first: function first (arr) { return arr[0]; },
  // Usage:
  // ArrayExtras.take(2, [1,2,3,4]) -> returns [1,2]
  take (n, arr) {
    return arr.slice(0, n);
  },
  // Usage:
  // ArrayExtras.drop(2, [1,2,3,4]) -> returns [3,4]
  drop (n, arr) {
    return arr.slice(n);
  },
  // Exercise: Add toObject
  // [['a', 1], ['b', 2], ['c', 3], ['d', 4]]
  // {a: 1, b: 2, c: 3, d: 4}
  toObject (arr) {
    let newObj = {};
    // 👇 let [property, value] = arr[0] is array destructuring assignment
    // It will create the variables property and value from first
    // and second element of arr[0] respectively.
    for (let [property, value] of arr) {
      newObj[property] = value;
    }
    return newObj;
  }
};

// Keyword `this`

console.log('In Script Scope:', this);

const can = {
  taloupe: 'Wut!?',
  touchThis () {
    console.log('Calling touchThis!');
    return this;
  }
}

console.log('From method:', can.touchThis());

function whatIsThis () {
  return this;
}

console.log('From function by itself:', whatIsThis());

const cant = {
  erbury: 'Hoi, mate',
  touchThis: can.touchThis
}; // What will cant.touchThis() return?

const whatIsThat = can.touchThis;
// What will whatIsThat() return?

// Demo: A Counter

if (false) {
  const counter = {
    count: 0,
    set (n) {
      this.count = n;
    },
    inc () {
      this.count += this.step;
      return this.count;
    },
    dec () {
      this.count -= this.step;
      return this.count;
    },
    now () {
      return this.count;
    },
    // Exercise: Configurable Steps
    step: 1,
    setStep (n) {
      this.step = n;
    },
    reset () {
      this.count = 0;
    }
  };
};

// Constructors

// Regular JavaScript functions can be used to create instances of
// objects or as any other function. When used to create objects,
// we name them "constructors."

/*
function Doggo(name, age) {
  // When using a function as a constructor, its `this`
  // is initially a new empty object (i.e. {}).
  this.name = name;
  this.age = age;

  return 'Please use as constructor!';
}

// To call a function as constructor, prefix it with keyword `new`.
const sonicSam = new Doggo('Sonic Sam', 5);

// A constructor is a normal function and it can be called as normal. However,
// when does be careful about how `this` will change. It might be the `window`
// and you may accidently assign properties to `window`.

// Prototypes
// Demo: Teach Doggo to Bark

// Use the `prototype` property of a constructor to share
// methods and properties between all instances of that constructor.

// A method created on the constructor's prototype serves the same purpose as
// an instance method in classical OOP language like Ruby.
Doggo.prototype.bark = function () {
  return 'Bork!';
};

Doggo.prototype.sleep = function () {
  return 'ZZzzzz...';
}
*/

// All prototypes also have a prototype (except for the Object prototype). When
// a property can't be found a in a prototype, we check its prototype recursively
// for that property. This is how inheritance is done in JavaScript.


// Exercise: Prototypical Counter

// When declaring arguments, use the assignment operator `=` to declare defaults.
// If Counter is called as a constructor or not without arguments,
// count and step will be set to 0 and 1 respectively.

function Counter (count = 0, step = 1) {
  // Any property that should unique to an instance of constructor
  // must be declared here (instead of the prototype.)
  this.count = count;
  this.step = step;
}
// Property set on the prototype will be shareable between all instances
Counter.prototype.set = function (n) {
  this.count = n;
}
Counter.prototype.inc = function () {
  this.count += this.step;
  return this.count;
}
Counter.prototype.dec = function () {
  this.count -= this.step;
  return this.count;
}
Counter.prototype.now = function () {
  return this.count;
}
Counter.prototype.setStep = function (n) {
  this.step = n;
}
Counter.prototype.reset = function () {
  this.count = 0;
}

// Demo: Assigning Objects

// Merging Multiple Objects
const bigObj = Object.assign(
  {a: 1},
  {where: 'Vancouver', thing: 'What?'},
  {thing: 'How?', b: 2, c: 3} // Which 'thing' property is going to win?
);

console.log(bigObj);

// Clone an Object
const b = {a: 1, b: 2, c: 3}
const c = b; // Is `c` a copy of `b`?
// `c` points to the same object as `b`. Changing it will also change
// the object of `b`.

const d = Object.assign({}, b); // Is `d` a copy of `b`?

// Easily assign properties to a prototype
// Or, a shortcut for declaring prototype properties
Object.assign(
  Counter.prototype, // the object below will be merged into the Counter.prototype
  {
    set (n) {
      this.count = n;
    },
    inc () {
      this.count += this.step;
      return this.count;
    },
    dec () {
      this.count -= this.step;
      return this.count;
    }
  }
);

// Demo: Modeling Doggo Fighter

if (false) {
  function Doggo(name, age) {
    this.name = name;
    this.age = age;
  }

  Doggo.prototype.bark = function () {
    return 'Bork!';
  };

  Doggo.prototype.sleep = function () {
    return 'ZZzzzz...';
  }

  function DoggoFighter(name, age, specialAbility) {
    this.name = name;
    this.age = age;
    this.specialAbility = specialAbility;
  }

  // To have our DoggoFighter prototype inherit from Doggo's prototype
  // we first assign an instance of a new Doggo(). A new Doggo's prototype
  // is Doggo prototype.
  DoggoFighter.prototype = new Doggo();

  DoggoFighter.prototype.fight = function (doggo) {
    // we expect the `doggo` argument to be an instance of a Doggo
    const winner = [this.name, doggo.name][Math.floor(Math.random() * 2)];
    return `${winner} won!`
  }

  const regularRon = new Doggo('Regular Ron', 6);
  const moneybagsMichael = new DoggoFighter('Moneybags Michael', 9, 'Make it rain');

  // `instanceof` checks an object's prototype including inherited prototypes
  regularRon instanceof Doggo // true
  regularRon instanceof DoggoFighter // false
  moneybagsMichael instanceof DoggoFighter // true
  moneybagsMichael instanceof Doggo // true
  moneybagsMichael instanceof Object // true
}

// Demo: Doggos go to Class

class Doggo {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
  bark () {
    return 'Bork!';
  }
  sleep () {
    return 'ZZzzz...';
  }
}

// Use the `extends` in the declaration to inherit from another
// class or another function constructor.
class DoggoFighter extends Doggo {
  constructor (name, age, specialAbility) {
    super(name, age);
    // super will call the constructor of the class it inherits from (i.e. Doggo)
    // you must use it before mutating `this`
    this.specialAbility = specialAbility;
  }

  fight (doggo) {
    // we expect the `doggo` argument to be an instance of a Doggo
    const winner = [this.name, doggo.name][Math.floor(Math.random() * 2)];
    return `${winner} won!`
  }
}

const regularRon = new Doggo('Regular Ron', 6);
const moneybagsMichael = new DoggoFighter('Moneybags Michael', 9, 'Make it rain');











/* */
