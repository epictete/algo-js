const readlineSync = require('readline-sync');
let min = new Number(readlineSync.question('Enter a min number : '));
let max = new Number(readlineSync.question('Enter a max number : '));
if (min > max) {
    console.log(min + ' is NOT smaller than ' + max + '!! Pay attention!');
    return;
}
let current = new Number(readlineSync.question('Enter a current number : '));
if (current >= min && current <= max) {
    console.log(current + ' is between ' + min + ' and ' + max + '. Good job!');
}