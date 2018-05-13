// [7/13/2012] Challenge #76 [easy] (Title case)
// https://www.reddit.com/r/dailyprogrammer/comments/wjzly/7132012_challenge_76_easy_title_case/
// May 13, 2018
// This monster is practically a one-liner :D

/*
	Write a function that transforms a string into title case. 
	This mostly means: capitalizing only every first letter of every word in the string. 
	However, there are some non-obvious exceptions to title case which can't easily be hard-coded. 
	Your function must accept, as a second argument, a set or list of words that should not be capitalized. 
	Furthermore, the first word of every title should always have a capital leter.
*/


function titlecase(string,exceptions) {
  // let tokens = string.split(/\W+/);
  return string
  .split(" ")
  .map((item, index) => {
    let firstLetter = item.charAt(0);
    firstLetter = exceptions.includes(item.toLowerCase()) && index !=0 ? firstLetter.toLowerCase() : firstLetter.toUpperCase();
    return firstLetter + item.slice(1).toLowerCase();
  })
  .join(" ");
}

let exceptions = ["jumps", "the", "over"];
console.log(titlecase("the quick brown fox jumps over the lazy dog", exceptions));

let exceptions2 = ["are", "is", "in", "your", "my"];
console.log(titlecase("THE vitamins ARE IN my fresh CALIFORNIA raisins", exceptions2));