// Import readlineSync
const readlineSync = require("readline-sync");

// Function that generates a random number between 1 and 10
function rand10() {
    return Math.floor(Math.random() * 10) + 1;
}

// Function that generates an array of "n" random numbers between 0 and 10
let n = new Number(readlineSync.question('How many random numbers would you like? '));
let arr = [];
let i = 1;
function multiRand(n) {
    while (i <= n) {
        arr.push(rand10());
        i++;
    }
}
multiRand(n);
console.log(arr);