// Currying in JS

// Clear console: <Esc>c
process.stdout.write('\033c');

var curry = function(initialFunction) {
    // Get the number of arguments the function to be curried expects (add)
    var numberOfArguments = initialFunction.length;

    // the args used with spread operator are the arguments passed to
    // the currried function (curriedAdd)
    var f1 = function(...args) {
        if (args.length >= numberOfArguments) {
            // call and return the initial function if enough args
            return initialFunction(...args);
        } else {
            // return a new function that expects the rest of the args
            var f2 = function(...moreArgs) {
                // merge the old args with more args than call f1 function
                // recursively until enough args are received
                var newArgs = args.concat(moreArgs);
                return f1(...newArgs);
            }
            return f2;
        }
    };
    return f1;
}

var add = function(a, b, c, d) {
    return a + b + c + d;
}

var curriedAdd = curry(add);

console.log(curriedAdd(2)(3)(4)(5)); // Output: 14
console.log(curriedAdd(2, 3)(4, 5)); // Output: 14
console.log(curriedAdd(2)(3, 4, 5)); // Output: 14
console.log(curriedAdd(2, 3, 4)(5)); // Output: 14
console.log(curriedAdd(2, 3, 4, 5)); // Output: 14
