const R = require('ramda')

let arr = [1, 2, 3];
let newArr = R.append(4, arr);

console.log(arr); // [ 1, 2, 3 ]
console.log(newArr); // [ 1, 2, 3, 4 ]