const readlineSync = require("readline-sync");
let num1 = new Number(readlineSync.questionInt('Can you give me a number with a decimal please?'));
let num2 = new Number(readlineSync.question('Can you give me another number with a decimal please?'));
console.log(num1*num2);