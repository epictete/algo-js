// Import readlineSync
const readlineSync = require("readline-sync");

// Function which takes the coordinates of two different points A and B in a 2D space and returns the distance between those two points

// Coordinates for point A
let ax = new Number(readlineSync.question('Please enter the x coordinate for point A in a 2D space (x, y) : '));
let ay = new Number(readlineSync.question('Please enter the y coordinate for point A in a 2D space (x, y) : '));
console.log('Point A is : (' + ax + ', ' + ay + ')');

// Coordinates for point B
let bx = new Number(readlineSync.question('Please enter the x coordinate for point B in a 2D space (x, y) : '));
let by = new Number(readlineSync.question('Please enter the y coordinate for point B in a 2D space (x, y) : '));
console.log('Point B is : (' + bx + ', ' + by + ')');

// Calculate the distace between the 2 points in a 2D space (x, y)
let dx = bx - ax;
let dy = by - ay;

// The core of the function
function calcDistance(a, b) {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}
console.log('The distance between A and B is : ' + calcDistance(x, y));