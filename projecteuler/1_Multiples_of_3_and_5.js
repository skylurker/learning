// Multiples of 3 and 5
// https://projecteuler.net/problem=1
// May 06, 2018

/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

function sumOfMultiples(limit){
	let sum = 0;
	for (i = 1; i < limit; i++){
		if (i % 3 == 0 || i % 5 == 0)
			sum += i;
	}
	return sum;
}

console.log(sumOfMultiples(10));
console.log(sumOfMultiples(1000));


function sumOfMultiples2(limit){
	// generate an array https://stackoverflow.com/a/39924913
	return Array.from(Array(limit).keys()).filter(x => ((x % 3 == 0 || x % 5 == 0))).reduce((a, b) => a + b);
}

console.log(sumOfMultiples2(10));
console.log(sumOfMultiples2(1000));