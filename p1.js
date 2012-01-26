var lastResult = 0;

var findMultiples = function ( n1 ) {
    var startNumber = 1;
    var endNumber = 10;
    var result;
    while ((n1 * startNumber) < endNumber) {
        result = (n1 * startNumber);
        startNumber++;
        lastResult += result;
        //console.log("Sum is " +lastResult);
    }
};

findMultiples(3);
console.log(lastResult);
findMultiples(5);
console.log(lastResult);
