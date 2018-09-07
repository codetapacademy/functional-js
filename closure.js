var greet = function(message) {
    var whom = function(name) {
        return `${message} ${name}!`
    }

    return whom;
}

// greetHim will be a function that has access to a stored
// message variable with the value of 'Welcome'. greetHim will
// expect to receive a name and return the message and the name
// concatenated
var greetHim = greet('Welcome');

// greetHer will be a function that has access to a stored
// message variable with the value of 'Hello'. greetHer will
// expect to receive a name and return the message and the name
// concatenated
var greetHer = greet('Hello');

console.log(greetHim('Marian'));
console.log(greetHer('Maya'));
console.log(greetHer('Dana'));
console.log(greetHim('Dan'));
