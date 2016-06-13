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
      if (isRamp(i)==true) cnt++;   
    }
  console.log("Total ramp numbers: " + cnt);
}

 rampNumbers(input);
 rampNumbers(challengeInput);


