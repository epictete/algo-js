// Import readlineSync
const readlineSync = require("readline-sync");

// Welcome message
console.log('\nHello! Welcome to the Pizza Flavors Manager.');

// Variables
let flavors = [];
let choice;
let rem;

// Program
while (choice != 4) {
    console.log('Please choose your actions:');
    console.log('\n1 - List all the pizza flavors\n2 - Add a new pizza flavor\n3 - Remove a pizza flavor\n4 - Exit this program\n');
    choice = readlineSync.question('Enter your action\'s number: ');
    // Case management with switch
    switch (choice) {
        case '1':
            console.log(flavors);
            break;
        case '2':
            flavors.push(readlineSync.question('Please enter your flavor : '));
            break;
        case '3':
            console.log(flavors);
            rem = readlineSync.question('Which flavor would you like to remove ?');
            // Check if the flavor exists
            while (!flavors.includes(rem)) {
                rem = readlineSync.question('Not found. Please enter an existing flavor : ');
            }
            flavors.splice(flavors.indexOf(rem), 1);
            break;
    }
}