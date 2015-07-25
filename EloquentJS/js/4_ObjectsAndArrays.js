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

/* The trick is to swap the first and last 
elements, then the second and second-to-last, 
and so on. You can do this by looping over 
half the length of the array (use Math.floor 
to round down—you don’t need to touch the 
middle element in an array with an odd length) 
and swapping the element at position i with 
the one at position array.length - 1 - i. 
You can use a local variable to briefly hold 
on to one of the elements, overwrite that one 
with its mirror image, and then put the value 
from the local variable in the place where 
the mirror image used to be.
*/
function reverseArrayInPlace (array){
	var tmp = 0;
	for (var i = 0; i<Math.floor(array.length/2); i++){
		tmp = array[array.length - 1 - i];
		array[array.length - 1 - i] = array[i]
		array[i] = tmp;
	}
}
/* Answers
function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}
*/
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

var arrayValue2 = [1, 2, 3, 4];
reverseArrayInPlace(arrayValue2);
console.log(arrayValue2);

/* A list

Objects, as generic blobs of values, 
can be used to build all sorts of data structures. 
A common data structure is the list (not to be confused 
with the array). A list is a nested set of objects, 
with the first object holding a reference to the second, 
the second to the third, and so on.

var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};


A nice thing about lists is that they can share 
parts of their structure. For example, if I create 
two new values {value: 0, rest: list} and {value: -1, rest: list} 
(with list referring to the variable defined earlier), 
they are both independent lists, but they share 
the structure that makes up their last three elements. 
In addition, the original list is also 
still a valid three-element list.

Write a function arrayToList that builds up 
a data structure like the previous one when 
given [1, 2, 3] as argument, and write a listToArray 
function that produces an array from a list. 
Also write the helper functions prepend, which 
takes an element and a list and creates a new list 
that adds the element to the front of the input list, 
and nth, which takes a list and a number and returns 
the element at the given position in the list, 
or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.
*/

/* Hints
Building up a list is best done back to front. 
So arrayToList could iterate over the array 
backward (see previous exercise) and, for each 
element, add an object to the list. You can use 
a local variable to hold the part of the list that 
was built so far and use a pattern 
like list = {value: X, rest: list} to add an element.
*/

function arrayToList(array){
	//var list = {value: null, rest: null}
	//var tmp = list;
	var list = null;
	for(var i=array.length-1; i>=0; i--){
		list = {value: array[i], rest: list}
		//list.rest = tmp;
		//list.value = array[i];
		//tmp = list;
	}
	return list;
}


console.log("Array to list");
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}


/*Hints
To run over a list (in listToArray and nth), 
a for loop specification like this can be used:

for (var node = list; node; node = node.rest) {}

Can you see how that works? Every iteration of 
the loop, node points to the current sublist, 
and the body can read its value property to get 
the current element. At the end of an iteration, 
node moves to the next sublist. When that is null, 
we have reached the end of the list and the loop is finished.
*/
function listToArray(list){
var array = [];
var cnt=0;
for (var node = list; node; node = node.rest) {
	array[cnt] = node.value;
	cnt++;
}
	//reverseArrayInPlace(array);
	return array;
}

console.log("listToArray");
console.log(listToArray({value: 10, rest: {value: 20, rest: null}}));
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

function nth(list, index){
	var cnt=0;
	var found = undefined;
	for (var node = list; node; node=node.rest){
		if (index == cnt) 
			found = node.value;
		cnt++;
	}
	return found;
}
console.log("nth");
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

/*
The recursive version of nth will, similarly, 
look at an ever smaller part of the “tail” of 
the list and at the same time count down the index 
until it reaches zero, at which point it can return 
the value property of the node it is looking at. 
To get the zeroeth element of a list, you simply 
take the value property of its head node. To get 
element N + 1, you take the Nth element of the list 
that’s in this list’s rest property.
*/

function nthRecursive(list, index){
	
	if (!list) return undefined; //from the answers
	else if (index == 0) return list.value;
	else	return nthRecursive(list.rest, index-1);
	
	
}
console.log("nthRecursive");
console.log(nthRecursive(arrayToList([10, 20, 30]), 1));
// → 20

function prepend(value, list){
	var list = {value: value, rest: list};
	return list;
}
console.log("prepend");
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

/*Deep comparison

The == operator compares objects by identity. 
But sometimes, you would prefer to compare the 
values of their actual properties.

Write a function, deepEqual, that takes two 
values and returns true only if they are the same 
value or are objects with the same properties 
whose values are also equal when compared with 
a recursive call to deepEqual.

To find out whether to compare two things by 
identity (use the === operator for that) or 
by looking at their properties, you can use 
the typeof operator. If it produces "object" 
for both values, you should do a deep comparison. 
But you have to take one silly exception into 
account: by a historical accident, typeof null 
also produces "object".

*/
/* Hints
Your test for whether you are dealing with a real 
object will look something like typeof x == "object" && x != null. 
Be careful to compare properties only when both 
arguments are objects. In all other cases you can just 
immediately return the result of applying ===.

Use a for/in loop to go over the properties. You need to test 
whether both objects have the same set of property names 
and whether those properties have identical values. The first 
test can be done by counting the properties in both objects 
and returning false if the numbers of properties are different. 
If they’re the same, then go over the properties of one object, 
and for each of them, verify that the other object also has 
the property. The values of the properties are compared by 
a recursive call to deepEqual.

Returning the correct value from the function is best 
done by immediately returning false when a mismatch is 
noticed and returning true at the end of the function.
*/

function deepEqual(obj1, obj2){
	if (typeof(obj1)=="object" && typeof(obj2)=="object" 
		&& obj1 != null && obj2 != null){ //there was a typo: typeof(obj2)!=null
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
console.log(deepEqual(NaN, NaN));
console.log(deepEqual(null, null));

/*Answers*/
/*
function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;
  
  var propsInA = 0, propsInB = 0;

  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propsInA == propsInB;
}
*/