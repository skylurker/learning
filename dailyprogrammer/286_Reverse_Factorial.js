// [2016-10-03] Challenge #286 [Easy] Reverse Factorial
// https://www.reddit.com/r/dailyprogrammer/comments/55nior/20161003_challenge_286_easy_reverse_factorial/
// Oct 4th 2016
// JS

function reverseFact(input){
  var result = input + " ";
  var cnt = 1;
  /* wanted to avoid using (cnt - 1) in the return statement, but...
   nooooope you can't use this condition! check tracing for input = 18
   */
 // while(input > cnt) {
 //while(input > 1 && input > cnt) {


  //for(var cnt = 2; input > 1; cnt++) {
  while(input > 1){
    // console.log("input before " + input);
    // console.log("cnt before " + cnt);
    // console.log(" input mod cnt = " + input%cnt);
      if (input % cnt != 0) {
        return result + " NONE";
      }
      input /= cnt;
    /* this one is to avoid using "cnt - 1" in the return statement.
       I guess it takes more time, but is a bit more readable;
       anyways, the factorials here are not that big.
    */
      if (input != 1) cnt++;
     // console.log("input " + input);
     // console.log("cnt " + cnt);
    }
 // console.log("cnt after FOR " + cnt);
  return result + "= " + cnt + "!";
}

/*
function reverseFact(input){
  var cnt = 1;
  while(input % cnt == 0){
    input /= cnt;
    cnt++;
  }
  return cnt + "!";
}
*/
console.log(reverseFact(18));
console.log(reverseFact(26));
console.log(reverseFact(3628800));
console.log(reverseFact(479001600));
console.log(reverseFact(6));
console.log(reverseFact(120));
console.log(reverseFact(150));