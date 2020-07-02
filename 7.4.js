// Import readlineSync
const readlineSync = require("readline-sync");

// Welcome message
console.log('\nHello! Welcome to the Pizza Flavors Manager.');

// Program
function pizzaManager() {
    // Declare the variables
    let flavors = [];
    let choice;
    let rem;
    //  Display the actions menu
    console.log('Please choose your actions:');
    console.log('\n1 - List all the pizza flavors\n2 - Add a new pizza flavor\n3 - Remove a pizza flavor\n4 - Exit this program\n');
    // The while loop that manages the user's choices
    while (choice != 4) {
        choice = readlineSync.question('Enter your action\'s number: ');
        // Case management with switch
        switch (choice) {
            case '1': // List all the pizza flavors
                console.log(flavors);
                break;
            case '2': // Add a new pizza flavor
                flavors.push(readlineSync.question('Please enter your flavor : '));
                break;
            case '3': // Remove a pizza flavor
                console.log(flavors);
                rem = readlineSync.question('Which flavor would you like to remove ?');
                // Check if the flavor exists
                while (!flavors.includes(rem)) {
                    rem = readlineSync.question('Not found. Please enter an existing flavor : ');
                }
                flavors.splice(rem, 1); // Remove the flavor
                break;
        }
    }
}
pizzaManager();