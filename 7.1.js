// Import readlineSync
const readlineSync = require("readline-sync");

// Generate the reference number between 1 and 100
function rand100() {
    return Math.floor(Math.random() * 100) + 1;
}

// Check
function numCheck() {
    console.log('Please try to guess a random number between 1 and 100.');
    let guess = new Number(readlineSync.question('Your guess : '));
    let count = 1, num = rand100();
    while (num != guess) {
        if (guess < num) {
            console.log('Too low');
            guess = new Number(readlineSync.question('Your guess : '));
        } else if (guess > num) {
            console.log('Too high');
            guess = new Number(readlineSync.question('Your guess : '));
        }
        count += 1;
    }
    console.log('\nWell guessed!\nYou got it after ' + count + ' tries.\n');
}
numCheck();

