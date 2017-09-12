const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// using the function rl.question will prompt the
// first argument ('How are you?') in the terminal
rl.question('How are you? ', function (answer) {
  // answer is a variable (we can use any name we want) that will
  // be assigned whatever the user types in the terminal
  console.log(`Yay, you are '${answer}'!`)
  // calling the close on rl will terminate the program. Otherwise, it will
  // hang waiting for user input. To quit when node program is frozen, type CTRL-C.

  rl.question('Where do you live? ', function (answer) {
    // Even though `answer` is declared in this and the parent function, this
    // will be allowed. The `answer` inside this function will overwrite the
    // parent `answer` ONLY inside this function.
    console.log(`😎 '${answer}'!`)
    rl.close();
  });
  console.log('\nInside first question:', answer)
});
