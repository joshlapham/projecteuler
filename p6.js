// projecteuler.net Problem 6 - Sum square difference

var sumArray = [];

var square = function(x) {
	return x * x;
};

var addSum = function(x, y) {
	return x + y;
};

// Add result of squares to sumArray
// End loop at 101 to get first 100 numbers
for (var i = 1; i < 101; i++) {
	sumArray.push(square(i));
};

var squareSum = 0;
for (var i = 0; i < sumArray.length; i++) {
	squareSum += sumArray[i];
}

var sumOfNumbers = 0;
// End loop at 101 to get first 100 numbers
for (var i = 1; i < 101; i++) {
	sumOfNumbers += i;
}

var numSumSquare = sumOfNumbers * sumOfNumbers;

var finalAnswer = numSumSquare - squareSum;

console.log(finalAnswer);
