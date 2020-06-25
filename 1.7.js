const readlineSync = require("readline-sync");
let shoeSize = new Number(readlineSync.questionInt('Can you give me your shoe size please?'));
let birthYear = new Number(readlineSync.questionInt('Can you give me your birth year please?'));
let result = shoeSize *= 2;
result += 5;
result *= 50;
result -= birthYear;
result += 1766;
console.log(result);