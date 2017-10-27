// question('What?').then(answer => console.log(answer))

// DEMO: Make a promise version of node's readline question

const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin, // get input from terminal (stdin == Standard Input)
//   output: process.stdout // send output to terminal (stdout == Standard Output)
// })
//
// rl.question('What is up? 🐬', answer => {
//   console.log(`You said, "${answer}"`);
//   rl.close();
// })

function question (prompt) {
  const rl = readline.createInterface({
    input: process.stdin, // get input from terminal (stdin == Standard Input)
    output: process.stdout // send output to terminal (stdout == Standard Output)
  })

  return new Promise((resolve, reject) => {
    rl.question(prompt, answer => {
      resolve(answer);
      rl.close();
    })
  })
}

question('What is your name?\n> ')
  .then(answer => {
    return question(`Do you like Game of Thrones, ${answer}?\n> `);
  })
  .then(answer => {
    if (answer.toLowerCase() === 'yes') {
      console.log('Me too!');
    } else {
      console.log('Get out of here! 😡');
    }
  })








// bump
