// Import readlineSync
const readlineSync = require("readline-sync");

// Recursive function that returns the factorial of a number
let a = new Number(readlineSync.question('Please enter a number : '));

function factorial(a) {
    if (a === 1) {
        return a;
    } else {
        return a * factorial(a - 1);
    }
}
console.log('The factorial of ' + a + ' is : ' + factorial(a));