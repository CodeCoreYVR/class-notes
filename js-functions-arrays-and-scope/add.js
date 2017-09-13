function add (a, b) {
  const total = a + b;

  return total;
}

const increment = function (number) {
  return number + 1;
}

function insult (name) {
  const randomNumber = Math.ceil(Math.random() * 3);

  /*
  if (randomNumber === 3) {
    // You can have multiple returns in a function. Once a function,
    // encounters return it immediatly exits ignoring the rest of the code
    // in its body.
    return `${name}, you doofus!`;
  } else if (randomNumber === 2) {
    return `${name}, your mother was a hamster!`;
  } else if (randomNumber === 1) {
    return `${name}, your father smelt of elderberries!`;
  }
  */

  switch(randomNumber) {
    case 3:
      return `${name}, you doofus!`;
      // break; <-- exits case, otherwise JavaScript will execute
      // the code all the cases below. Here we `return` which exits
      // the function early making `break` unnecessary.
    case 2:
      return `${name}, your mother was a hamster!`;
    default:
      return `${name}, your father smelt of elderberries!`;
  }
}

function repeat (str, num) {
  // Instead of modifying 'str', we created a new variable
  // and build that string. We do this avoid mutating passed arguments.
  let newStr = '';

  for (let i = 0; i < num; i += 1) {
    // newStr = newStr + str;
    newStr += str;
  }
  return newStr;
}










/* */
