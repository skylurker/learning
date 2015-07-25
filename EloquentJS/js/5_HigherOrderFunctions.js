/* Eloquent Java Script */
/* Higher Order Functions */

var ancestry = JSON.parse(ANCESTRY_FILE);
var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

/* Flattening */
var input = [[1, 2, 3],
	     [4, 5],
	     [6, 7, 8, 9]];
console.log(input.reduce(function (arrayA, arrayB) {
			  return arrayA.concat(arrayB);
}));

/* Mother-child age difference */

// Not everyone has an object with their mother. Let's filter them out:
//var hasMother = ancestry.filter(function(person) {
function hasMother(person) {
  return byName[person.mother] in ancestry;
};
//var ageDifference = hasMother.map(function(child) {
function ageDifference(child) {
  var mother = byName[child.mother];
  return child.born - mother.born;
};
console.log(average(ancestry
    .filter(hasMother)
    .map(ageDifference)));