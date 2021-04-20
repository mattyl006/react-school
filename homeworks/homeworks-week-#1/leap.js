const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

function checkLeapYear(year) {
    if(((year % 4 === 0) && !(year % 100 === 0)) || (year % 400 === 0)) {
        return true;
    }
    return false;
}

readline.question('Input YEAR: ', myInput => {

    let YEAR = '';

    if(myInput === 'current') {
        YEAR = new Date().getFullYear();
    } else {
        YEAR = Number(myInput);
    }

    if(checkLeapYear(YEAR)) {
        console.log('YES, this is leap year');
    } else {
        console.log('NO, this is not leap year');
    }

    readline.close();
})