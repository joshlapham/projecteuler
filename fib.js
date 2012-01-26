var fib = function (n) {
    var secondLast = 0;
    var last = 1;
    var c = 0;
    for ( var i = 0; i < n; i++ ) {
        c = secondLast+last;
        console.log(c);
        secondLast = last;
        last = c;
        console.log("last " +last);
    }
};

fib(10);
