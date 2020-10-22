const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let number = Math.round(1 + (Math.random() * 10) - 1);

rl.question('Guess number between 1 and 10: ', (guessNumber) => {
    
    if(guessNumber == number) {
        console.log("There, you have done it!");
    }
    else {
        console.log("This is not right number, try again.");
        console.log(`Correct was ${number}.`);
    }

    rl.close();
});
