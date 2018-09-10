const R = require('ramda');

const arrOne = [125, 12, 87, 91];
const arrTwo = [4, 6, 62, 36, 31, 60];

const ifFirstElementTheBiggest = R.converge(R.equals, [
    /** R.head grabs the first element like:
     * arr[0] or arr.reduce(a => a)
     */ 
    R.head,
    R.compose(
        // Grab the first element
        R.head, 
        R.sort(R.descend(R.identity))
    )
])

console.log(ifFirstElementTheBiggest(arrOne));
console.log(ifFirstElementTheBiggest(arrTwo));