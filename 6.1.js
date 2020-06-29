// Import readlineSync
const readlineSync = require("readline-sync");

// Get the circle's data
// let x = new Number(readlineSync.question("What's the circle's x position ? "));
// let y = new Number(readlineSync.question("What's the circle's y position ? "));
// let radius = new Number(readlineSync.question("What's the circle's radius ? "));

// Creating the Circle class
class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    move(xOffset, yOffset) {
        this.xPos = this.xPos + xOffset;
        this.yPos = this.yPos + yOffset;
    }
    get surface () {
        return Math.pow(this.radius, 2) * Math.PI;
    }
}

//Testing the class
let circ = new Circle(1, 2, 3);
console.log(circ.surface);
circ.move(1, 2);
console.log('(' + circ.xPos + ', ' + circ.yPos + ')');
