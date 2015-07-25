/* Eloquent Java Script */
/* Higher Order Functions */

/* Flattening */
var input = [[1, 2, 3],
	     [4, 5],
	     [6, 7, 8, 9]];
console.log(input.reduce(function (arrayA, arrayB) {
			  return arrayA.concat(arrayB);
}));
