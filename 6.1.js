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