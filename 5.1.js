// Import readlineSync
const readlineSync = require("readline-sync");


// Function that will ask the user for data about his or her favorite TV serie
function askTvSerie() {
    let name = readlineSync.question('What is you favorite TV Serie ? ');
    let year = readlineSync.question('What is the production year ? ');
    // Asks the number of actors the user wants to input
    let totalActors = new Number(readlineSync.question('How many actors are there ? '));

    // Stores the information in an array
    let actors = [];
    let i = 1;
    while (i <= totalActors) {
        actors.push(readlineSync.question('Please enter actor number ' + i + ' : '));
        i++;
    }

    // Create an object with the data collected above and display it
    let tvSerie = {
        "TV serie": name,
        "Production year": year,
        "Cast members": actors,
    }
    console.log(tvSerie);
}
askTvSerie();