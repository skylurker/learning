// Around May 5th 2016?
// [Weekly #24] Mini Challenges. Ramp Numbers
// https://www.reddit.com/r/dailyprogrammer/comments/3o4tpz/weekly_24_mini_challenges/cvudq0c

input = 123;
challengeInput = 99999;

/* 1. The most primitive solution */
function isRamp(number) {
  numString = number.toString();
  for (j=1; j<numString.length; j++) {
    if (numString[j]<numString[j-1])
        return false;
  }
  return true;
}

function rampNumbers(n){
  cnt = 0;
    for (i=0; i<n; i++) {
      if (isRamp(i)==true) cnt++;   // to use Solution 2, change isRamp to isRamp2
    }
  console.log("Total ramp numbers: " + cnt);
}

 rampNumbers(input);
 rampNumbers(challengeInput);

/* 2. isRamp modified */
// similar to this solution
// https://www.reddit.com/r/dailyprogrammer/comments/3o4tpz/weekly_24_mini_challenges/cvum9p8
function isRamp2(number){
  return number.toString() == number.toString().split('').sort().join(''); // obligatory quote marks in join('') !! otherwise it's 123 -> 1,2,3
}
