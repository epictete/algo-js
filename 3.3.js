let arr1 = [1, 2, 3, 4, 5];
let arr1Copy = [];
for (let elem of arr1) {
    arr1Copy.push(elem);
}
console.log(arr1Copy);

let arr2 = [100, 101, 102];
let arr2copy = arr2.map((x) => x);
console.log(arr2copy);