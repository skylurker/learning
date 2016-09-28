// Sept 22 2016
// https://www.reddit.com/r/dailyprogrammer/comments/4uhqdb/20160725_challenge_277_easy_simplifying_fractions/?st=itehoqy5&sh=97d98068
// [2016-07-25] Challenge #277 [Easy] Simplifying fractions
// JS, no bonus

var input1 = "4 8\n" +
"1536 78360\n" +
"51478 5536\n" +
"46410 119340\n" +
"7673 4729\n" +
"4096 1024";

// entry point =)
function main(input){
  return input.split("\n")
    .map( function (s) {
            var a = s.split(" "); 
            return simplify(parseInt(a[0], 10), parseInt(a[1], 10));
  }).join("\n");
}
//console.log(input1);
// uses Euclid's algorithm (subtracted-based) to find the greatest common divisor
function getGCD(a, b){
  while (a != b){
    if(a > b) {a = a - b;} 
    else {b = b - a;}
  }

  return a;
}

// num = numenator, den = denominator
function simplify(num, den){
  return num / getGCD(num, den) + " " + den / getGCD(num, den);
}

//console.log(getGCD(1071, 462));
//console.log(simplify(1536, 78360));
console.log(main(input1));