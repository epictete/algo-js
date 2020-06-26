let arr = [5, 58, -3, -23, 101];
let min = arr[0];
let max = arr[0];
for (let elem of arr) {
    if (elem <= min) {
        min = elem;
    } else if (elem >= max) {
        max = elem;
    } 
}
console.log('The array is : ' + arr + '.\nThe Min is : ' + min + ' and the Max is : ' + max);