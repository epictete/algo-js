// Function that sorts an array
function sortArray() {
    // Define the array and the temp variable
    let arr = [8, -3, 32, 12, -6, 20, -56, 100, 83, -1];
    let temp;
    // Display the initial array
    console.log('\nInitial array : ');
    console.log(arr);
    // Loop that sorts the array
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    // Display the sorted array
    console.log('\nSorted array : ');
    console.log(arr);
}
sortArray();

