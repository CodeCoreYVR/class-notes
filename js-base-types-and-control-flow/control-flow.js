const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// when passing conditions to a if-statement, javascript will convert
// whatever value it is given into a boolean if isn't already.

// What will 'test' be considered? true or false
// To find out use two nots (!!) in front in the node repl
// to see what it outputs, `!!'test'`
if ('test') console.log('yay!');

// Some example type coercions to booleans by javascript:
/*
!!'false' // true
!!'' // false
!!0 // false
!!1 // true
!!NaN // ???
!!undefined // ???
!!null // ???
*/

rl.question('How do you feel? ', function (answer) {
  const mood = answer;

  // when building a if-statement, always set the most
  // specific conditions first
  if (mood === 'happy') {
    console.log('Yay! 😃');
  } else if (mood === 'angry') {
    // you can chain as many `else if` as you want, but there can be
    // only one `if` and one `else` in the same statement (like Highlanders)
    console.log('(╯°□°)╯︵ ┻━┻');
  } else  {
    console.log('Ok...');
  }

  rl.close();
});
