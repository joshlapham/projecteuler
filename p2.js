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
        } else {
        console.log("Else: " +c);
        }
    }
};

var isEven = function (n) {
    if ((n % 2)=== 0) {
        return true;
    } else {
        return false;
    }
};

fib(10);
