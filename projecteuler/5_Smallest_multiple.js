// Smallest multiple
// https://projecteuler.net/problem=5
// May 07, 2018

/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

function smallestMultiple(limit){
	
	/*
	let result = limit;
	for(let i = limit - 1; i > 1; i--){
		if (result % i != 0){

			result *= i;
			console.log("i ", i, "result", result);
		}
	}
	*/
	// no, too big a number

/*
	if the following number cannot be obtained by multiplying some of the entries of the array, push it into it
	...though it's like super overhead
	*/
	/*
	let result = 1;
	let arr = [1];

	for(let i = 2; i <= limit; i++){	
	}
*/

/* 
	okay we may make an array
	make a for i loop
	and just start dividing all of its items by array[i], if divisible
*/

	let arr = Array.from(Array(limit).keys());
		for (let i = 0; i < arr.length; i++){
			// console.log("i", i);
			for (let j = i + 1; j < arr.length; j++){
				if (arr[j] % arr[i] == 0){
	              arr[j] = parseInt(arr[j] / arr[i]);
				}
			}
		}
 
	arr = arr.slice(1, arr.length+1);
  
	return arr.reduce((a, b) => a*b);
}

console.log(smallestMultiple(10));
console.log(smallestMultiple(20));

/*
for (let k = 1; k < 10; k++){
	console.log(smallestMultiple(10) / k);
}

for (let k = 1; k < 20; k++){
	console.log(smallestMultiple(20) / k);
}
*/