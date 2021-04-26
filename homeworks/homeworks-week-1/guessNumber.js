const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const correctNumber = getRandomInt(10) + 1;

readline.question('Guess NUMBER: ', myInput => {

    if (Number(myInput) === correctNumber) {
        console.log("CORRECT!");
    } else {
        console.log("TRY AGAIN!");
        console.log(`NUMBER WAS ${correctNumber}`);
    }

    readline.close();
});
