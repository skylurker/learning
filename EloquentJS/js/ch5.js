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



/*As a bonus assignment, modify your range function 
to take an optional third argument that indicates the 
“step” value used to build up the array. If no step is given, 
the array elements go up by increments of one, 
corresponding to the old behavior. The function call 
range(1, 10, 2) should return [1, 3, 5, 7, 9]. 
Make sure it also works with negative step values 
so that range(5, 2, -1) produces [5, 4, 3, 2]. */

function range2(start, end, step){
	var arr = [];
	/*if (arguments[2]){
		var step = arguments[2];
	} else step = 1;*/
	if (step == undefined) step = 1;
	if (start > end) { //swap
		var tmp = start;
		start = end;
		end = tmp;
		var isSwapped = true;
		step = Math.abs(step);
	};
	for(var i=start; i<=end; i+=step){
		arr.push(i);
	};
	if (isSwapped) arr.reverse();
	return arr;
}
console.log("Range");
console.log(range(1, 10));
console.log(sum(range(1, 10)));
console.log(range2(1, 10, 2));
console.log(range2(5, 2, -1));


/* Reversing an array

Arrays have a method reverse, which changes
the array by inverting the order in which its
elements appear. For this exercise, write 
two functions, reverseArray and reverseArrayInPlace. 
The first, reverseArray, takes an array as 
argument and produces a new array that has the 
same elements in the inverse order.*/

function reverseArray(input){
	var output = [];
	for (var i=0; i<input.length; i++){
		output.unshift(input[i]);
	}
	return output;
}
function reverseArray2(input){
	var output = [];
	for (var i=input.length-1; i>=0; i--){
		output.push(input[i]);
	}
	return output;
}
console.log("Reverse array");
console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArray2(["A", "B", "C"]));