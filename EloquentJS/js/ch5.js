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

/* Hints:
Having range understand negative step values is probably 
best done by writing two separate loops—one for counting up 
and one for counting down—because the comparison that checks whether 
the loop is finished needs to be >= rather than <= when counting downward.

It might also be worthwhile to use a different default step, namely, -1, 
when the end of the range is smaller than the start. That way, range(5, 2) 
returns something meaningful, rather than getting stuck in an infinite loop. */

function range2(start, end, step){
	var arr = [];	
	if (start <= end){
		if (step == undefined) step =  1;
		for(var i=start; i<=end; i+=step){
			arr.push(i);
		};
	} else{
		if (step == undefined) step = -1;
		for(var i=start; i>=end; i+=step){
			arr.push(i);
		};
	}
	return arr;
}
/* Slightly modified the tutorial solution so
	it sets -1 as a default step if start > end */
function range3(start, end, step){
	if (step==null && start <= end) step =  1;
	if (step==null && start > end)  step = -1;
	var array = [];
	if (step>0){
		for (var i=start; i<=end; i+=step){
			array.push(i);
		}
	} else{
		for (var i=start; i>=end; i+=step){
			array.push(i);
		}
	}
	return array;
}
/*console.log("Range");
console.log(range(1, 10));
console.log(sum(range(1, 10)));
console.log(range2(1, 10, 2));
console.log(range2(5, 2, -1));
console.log(range2(5, 5));
console.log(range3(1, 10, 2));
console.log(range3(5, 2, -1));
console.log(range3(5, 5));
console.log(range3(5, 2));*/

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

/*Deep comparison

The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties.

Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".

*/
/* Hints
Your test for whether you are dealing with a real object will look something like typeof x == "object" && x != null. Be careful to compare properties only when both arguments are objects. In all other cases you can just immediately return the result of applying ===.

Use a for/in loop to go over the properties. You need to test whether both objects have the same set of property names and whether those properties have identical values. The first test can be done by counting the properties in both objects and returning false if the numbers of properties are different. If they’re the same, then go over the properties of one object, and for each of them, verify that the other object also has the property. The values of the properties are compared by a recursive call to deepEqual.

Returning the correct value from the function is best done by immediately returning false when a mismatch is noticed and returning true at the end of the function.
*/

function deepEqual(obj1, obj2){
	if (typeof(obj1)=="object" && typeof(obj2)=="object" 
		&& typeof(obj1) != null && typeof(obj2) != null){
		//return "These are objects";
		//if (obj1.length != obj2.length) return false;
		//counting properties of both objects
		var cnt = 0;
		for (var property in obj1) 
			cnt++;
			//deepEqual(obj1[property], obj2[property]);
		for (var property in obj2)
			cnt--;
		if (cnt != 0) return false;
		for (var property in obj1){
			if (property in obj2){
				return deepEqual(obj1[property], obj2[property]);
			} else return false;
		}
	} else{
	return obj1===obj2;
	}
	//return "lala";
}
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(1, 2));
console.log(deepEqual(-10, -10));
console.log(deepEqual({here: 1}, {here: 1, object: 2, boom: 3}));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));