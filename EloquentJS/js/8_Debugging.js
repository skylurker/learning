/* Eloquent Java Script */

/* Retry */
console.log("Retry");

function MultiplicationUnitFailure() {}

function primitiveMultiply(a, b) {

  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicationUnitFailure();
}

function multiply(a, b) {

  for (;;) {
  
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (e instanceof MultiplicationUnitFailure)
	console.log("Multiplication failed");
      else
	throw e;
    }
  }
}

console.log(multiply(2, 5));