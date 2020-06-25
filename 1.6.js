const readlineSync = require("readline-sync");
let num1 = new Number(readlineSync.questionInt('Can you give me an integer please?'));
let num2 = new Number(readlineSync.question('Can you give me another integer please?'));
console.log("The modulo is : " + num1 % num2);