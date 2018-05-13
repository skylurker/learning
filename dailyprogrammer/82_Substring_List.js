// [7/27/2012] Challenge #82 [easy] (Substring list)
// https://www.reddit.com/r/dailyprogrammer/comments/x8rl8/7272012_challenge_82_easy_substring_list/
// 13 May, 2018

/* 
	Write a function that takes a number n as an argument and returns (or outputs) every possible 
	unique substrings (not counting "") of the first n letters of the alphabet (in any order you like).
*/

function substrings(n){
  /*  
  	Wanted to try something with ASCII and String.fromCharCode(i), but it seems too hard for me tonight
  */
  let abc = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < n; i++){
    for (let j = i + 1; j < n + 1; j++){
    	console.log(abc.slice(i, j));
  	}
  } 
}

substrings(5);