const R = require('ramda');

const userOne = {
    name: 'Marian',
    city: 'London',
    info: {
        occupation: {
            primary: 'web developer',
            secondary: 'mentor'
        }
    }
}

const userTwo = {
    name: 'Gratiela',
    city: 'London',
    info: {}
}

/** R.path returns the value of the property specified as the last value of
 *  the array passed as the first argument
 *  R.path(['firstProperty', 'secondProperty', 'lastOneReturnMyValue'], lookInsideMe)
 *  it can be as many properties as needed
 */
console.log(R.path(['info', 'occupation', 'secondary'], userOne)); // mentor
console.log(R.path(['info', 'occupation', 'secondary'], userTwo)); // undefined
/**
 * R.pathOr, similar to R.path, however we expect three arguments, the first one being
 * the default value to be returned in case we don't find a property with a value
 * using the second argument array to build a tree structure of the object passed
 * as the third argument
 */
console.log(R.pathOr('no secondary occupation', ['info', 'occupation', 'secondary'], userTwo)); // no secondary occupation