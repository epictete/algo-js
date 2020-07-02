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
function rectGen() {
    let i = 1;
    while (i <= 1000) {
        rectangles.push(new Rectangle(randPos(), randPos(), randSize(), randSize()));
        i++;
    }
}
rectGen();
console.log('\nHere are the 1000 randomly generated rectangles :\n')
console.log(rectangles);

// Loop that checks for collisions among all the rectangles
function collCheck() {
    console.log('\nHere is the list of the detected collisions :\n')
    let count = 0;
    for (let i = 0; i < rectangles.length - 1; i++) {
        for (let j = 0; j < rectangles.length - 1 && i > j; j++) {
            if (rectangles[i].collides(rectangles[j])) {
                console.log("Rectangle " + i + " collides with rectangle " + j);
                count += 1;
            }
        }
    }
    console.log('\nTotal collisions detected : ' + count + '\n');
}
collCheck();