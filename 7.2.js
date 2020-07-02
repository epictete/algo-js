// Import readlineSync
const readlineSync = require("readline-sync");

// Ask for the number used in the Fibonacci serie
let n = new Number(readlineSync.question('Please enter a number to generate a Fibonacci serie : '));

// Function that generates a Fibonacci serie up to number n
function fibo() {
    let current = 1, prev = 0, temp, serie = [];
    while (n > 0) {
        serie.push(current);
        temp = current;
        current = current + prev;
        prev = temp;
        n--;
    }
    console.log(serie);
}
fibo();