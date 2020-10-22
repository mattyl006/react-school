const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Input value for YEAR: ', (input) => {
  // TODO: Log the answer in a database
  const YEAR = input;
  console.log(YEAR);

  rl.close();
});
