const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is the password? 🤖', function (password) {

  if (password === 'opensesame') {
    console.log('The secret number is 714!');
  } else {
    console.log('Incorrect password');
  }

  rl.close();
});
