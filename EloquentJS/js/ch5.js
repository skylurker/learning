/*The sum of a range

The introduction of this book alluded to the following 
as a nice way to compute the sum of a range of numbers:

console.log(sum(range(1, 10)));

Write a range function that takes two arguments, 
start and end, and returns an array containing all 
the numbers from start up to (and including) end.
*/

function range(start, end){
	var arr = [];
	for(var i=start; i<end+1; i++){
		arr.push(i);
	}
	return arr;
}

/*Next, write a sum function that takes an array 
of numbers and returns the sum of these numbers. 
Run the previous program and see whether it does 
indeed return 55.*/

function sum(ranging){
	var res = 0;
	for (var i=0; i<ranging.length; i++){
		res+=ranging[i];
	}
	return res;
}

console.log(range(1, 10));
console.log(sum(range(1, 10)));