const readlineSync = require('readline-sync');
let n = new Number(readlineSync.question('Please enter a number : '));
let num, i = 1, sum = 0;
while (i <= n) {
    num = new Number(readlineSync.question('Please enter a new number : '));
    sum += num;
    i++;
}
console.log(sum);