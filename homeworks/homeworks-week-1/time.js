const currentDay = new Date().getDate();
const currentMonth = new Date().getMonth() + 1;
const currectYear = new Date().getFullYear();

const currentHour = new Date().getHours();
const currentMinute = new Date().getMinutes();
const currentSecond = new Date().getSeconds();

console.log(`Current Date: ${currentMonth}/${currentDay}/${currectYear}`);
console.log(`Current Time: ${currentHour}:${currentMinute}:${currentSecond}`);

const moment = require('moment')

const date = moment().format('MMMM Do YYYY');
const time = moment().format('h:mm:ss a')

console.log(`Current Date by moment.js: ${date}`);
console.log(`Current Time by moment.js: ${time}`);

