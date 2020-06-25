const readlineSync = require('readline-sync');
let num = new Number(readlineSync.question('Please enter a number : '));
while (num != 42) {
    console.log('Are you sure?');
    num = new Number(readlineSync.question('Please enter another number : '));
}