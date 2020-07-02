// Import readlineSync
const readlineSync = require("readline-sync");

// Function that will ask the user for data about his or her favorite TV serie

// Asks for the data about the TV serie
let name = readlineSync.question('What is your favorite TV Serie ? ');
let year = readlineSync.question('What is the production year ? ');

// Asks the number of actors the user wants to input
let totalActors = new Number(readlineSync.question('How many actors are there ? '));

// Stores the information in an array
let actors = [];
let i = 1;

// Function that creates an array with the data collected above
function askTvSerie() {
    while (i <= totalActors) {
        actors.push(readlineSync.question('Please enter actor number ' + i + ' : '));
        i++;
    }
    // Create an object with the data and display it
    let tvSerie = {
        "TV serie": name,
        "Production year": year,
        "Cast members": actors,
    }
    console.log('Here is the data about your favorite TV serie : ');
    console.log(tvSerie);
}
askTvSerie();

// Function that will take as argument the data structure defined above and return a list of the same cast but in a random order
function newCast() {
    for (let i = actors.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = actors[i];
        actors[i] = actors[j];
        actors[j] = temp;
    }
}
newCast();
console.log('The new cast of my next serie will be : ');
console.log(actors);