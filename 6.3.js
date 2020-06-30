// Creating the Rectangle class
class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    collides(otherRectangle) {
        if (this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
            this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
            this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length &&
            this.topLeftYPos + this.length > otherRectangle.topLeftYPos) {
            return true;
        }
        return false;
    }
}

// Function that generates random coordinates for the rectangles with a max of 1000
function randPos() {
    return Math.floor(Math.random() * 1000) + 1;
}

// Function taht generates random sizes for the rectangles with a max of 10
function randSize() {
    return Math.floor(Math.random() * 10) + 1;
}

// Loop that generates 1000 rectangles
let rectangles = [];
let i = 1;
while (i <= 1000) {
    rectangles.push(new Rectangle(randPos(), randPos(), randSize(), randSize()));
    i++;
}
console.log(rectangles);

// Loop that checks for collisions among all the rectangles
for (let j = 0; j < rectangles.length; j++) {
    for (let k = 0; k < rectangles.length && j > k; k++) {
        if (rectangles[j].collides(rectangles[k])) {
            console.log("Rectangle " + j + " collides with rectangle " + k);
        }
    }
}