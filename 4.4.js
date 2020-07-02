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
console.log('The array with the ' + n + ' random numbers is : [' + arr + ']');

// Function that takes an array of numbers as argument and returns the average
let sum = 0;
let j = 1;
function average(arr) {
    for (let elem of arr) {
        sum += elem;
        j++;
    }
    return sum / arr.length;
}
console.log('The avergage is : ' + average(arr));

// Function that takes an array of numbers as argument and returns the minimum and maximum elements
let min = arr[0];
let max = arr[0];
for (let elem of arr) {
    if (elem <= min) {
        min = elem;
    } else if (elem >= max) {
        max = elem;
    }
}
console.log('The Min is : ' + min + '\nThe Max is : ' + max);