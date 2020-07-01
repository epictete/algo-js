// Import readlineSync
const readlineSync = require("readline-sync");

// Ask the user for an integer
let num = new Number(readlineSync.question('Please enter a positive integer in order to display its divisors : '));

// Integer validation
while (num % 1 != 0 || num <= 0) {
    num = new Number(readlineSync.question('You did not read the instructions carefully, please try again : '));
}

// Function that displays all the divisors except 1 and the number itself
let div = [];
for (let i = 1; i < num; i++) {
    if (num % i == 0 && i != 1) {
        div.push(i);
    }
}
console.log(div);
