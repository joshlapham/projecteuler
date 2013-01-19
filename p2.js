// projecteuler.net Problem 2 - Evem Fibonacci numbers

var result = 0;

var fib = function (n) {
    var secondLast = 0;
    var last = 1;
    var c = 0;
    while ( c < n ) {
        c = secondLast+last;
        secondLast = last;
        last = c;
        if (isEven(c)) {
            console.log("Is even: " +c);
            console.log("Sum: " +result);
        }
    }
};

var isEven = function (n) {
    if ((n % 2)=== 0) {
        result += n;
        return true;
    } else {
        return false;
    }
};

fib(4000000);
