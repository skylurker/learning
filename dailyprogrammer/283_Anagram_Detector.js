// [2016-09-12] Challenge #283 [Easy] Anagram Detector
// https://www.reddit.com/r/dailyprogrammer/comments/52enht/20160912_challenge_283_easy_anagram_detector/
// Sept 12, 2016
// JS

function prepared(str){
  return str
    .toLowerCase()
    .replace(/\W/, "")
          .split("")
    .sort()
          .join('');
}

function check(str1, str2){
  if (prepared(str1) == prepared(str2)) return str1 + " is an anagram of " + str2;
  else return str1 + " is NOT an anagram of " + str2;
}

console.log(check("wisdom", "mid sow"));
console.log(check("Vacation Times", "I'm Not as Active")); // ???

console.log(check("Astronomers", "Moon starer"));