// 2. Array Transformations
const numbers = [1, 2, 3, 4, 5];
//Doubles the array
function double(arr) {
    return arr.map(num => num * 2);
}

console.log(double(numbers)); 

//Filters out even numbers
function filterEven(arr) {
    return arr.filter(num => num % 2 !== 0);
}
console.log(filterEven(numbers)); 

//Sum of the array
function sum(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
console.log(sum(numbers));

//Average of the array
function average(arr) {
    return arr.length ? sum(arr) / arr.length : 0;
}
console.log(average(numbers)); 

//Finding Maximum
function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax(numbers)); 

//Finding Minimum
function findMin(arr) {
    return Math.min(...arr);
}
console.log(findMin(numbers)); 

//Removing Duplicates
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
const duplicateNumbers = [1, 2, 2, 3, 4, 4, 5, 5];
console.log(removeDuplicates(duplicateNumbers)); 

//Finding Index
function findIndex(arr, value) {
    return arr.indexOf(value);
}
console.log(findIndex(numbers, 3)); 
