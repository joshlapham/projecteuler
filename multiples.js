// Find multiples of a given number passed to the findMultiples function.

var startNumber = 1;
var endNumber = 100;
var result;

var findMultiples = function ( n1 ) {
    while ((n1 * startNumber) < endNumber) {
        console.log(result=(n1 * startNumber));
        startNumber++;
    }
};

findMultiples(7);
