const readlineSync = require('readline-sync');
console.log("Remaining questions : 5");
let firstName = readlineSync.question('What is your first name?');
console.log("Remaining questions : 4");
let age = new Number(readlineSync.question('How old are you?'));
console.log("Remaining questions : 3");
let dogAge = Math.round(age / 7);
let city = readlineSync.question('Where do you live?');
console.log("Remaining questions : 2");
let favProgLang = readlineSync.question('What is your favourite programming language?');
console.log("Last question!");
let favForeignLang = readlineSync.question('Which foreign language are you most comfortable with?');
console.log("Hello " + firstName + " !\nDid you know that if you were a dog, you would be " + dogAge + " years old? Cool, uh?\nHave you ever tried to speak " + favProgLang + " and " + favForeignLang + " at the same time? I'm sure people in " + city + " would think you are crazy!");