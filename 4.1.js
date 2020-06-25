// Import readlineSync
const readlineSync = require("readline-sync");

// Ask user for input : width and height of the rectangle
let width = new Number(readlineSync.question('Please enter the width : '));
let height = new Number(readlineSync.question('Please enter the height : '));


// Function that calculates the surface of the rectangle
function calcSurface(a, b) {
    return a*b;
}
console.log('The surface is : ' + calcSurface(width, height));