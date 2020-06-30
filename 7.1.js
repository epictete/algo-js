// Import readlineSync
const readlineSync = require("readline-sync");

// Generate the reference number between 1 and 100
let num = Math.floor(Math.random() * 100) + 1;
console.log('Please try to guess a random number between 1 and 100.');

// Check 
let guess = new Number(readlineSync.question('Guess the number : '));
let count = 1;
while (num != guess) {
    if (guess < num) {
        console.log('Too low');
        guess = new Number(readlineSync.question('Guess the number : '));
    } else if (guess > num) {
        console.log('Too high');
        guess = new Number(readlineSync.question('Guess the number : '));
    }
    count += 1;
}
console.log('Well guessed!\nYou got it after ' + count + ' tries.');
