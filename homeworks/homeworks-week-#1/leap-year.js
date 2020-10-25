const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Input value for YEAR: ', (input) => {

  const YEAR = input;

  if( ((YEAR % 4 === 0) && !(YEAR % 100 === 0))  || (YEAR % 400 === 0) ) {
      console.log(`Yes, ${YEAR} is leap year!`);
  }
  else {
      console.log(`Nope, ${YEAR} is not a leap year.`);
  }

  rl.close();
});
