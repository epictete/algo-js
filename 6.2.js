// Creating the Rectangle class
class Rectangle {
    constructor (topLeftXPos, topLeftYPos, width, length) {
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

// Testing the class with various scenarios
// No collision
let a = new Rectangle(1, 1, 2, 2);
let b = new Rectangle(5, 5, 2, 2);
console.log(a.collides(b));

// Standard collision -> Collision
let c = new Rectangle(1, 1, 2, 3);
let d = new Rectangle(2, 2, 3, 4);
console.log(c.collides(d));

// Second rectangle is inside the first one -> Collision
let e = new Rectangle(1, 1, 10, 10);
let f = new Rectangle(2, 2, 2, 2);
console.log(e.collides(f));

// First rectangle is inside the other one -> Collision
let g = new Rectangle(2, 2, 2, 4);
let h = new Rectangle(1, 1, 5, 8);
console.log(g.collides(h));