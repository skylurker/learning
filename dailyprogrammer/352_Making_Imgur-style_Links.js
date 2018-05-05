// [2018-02-20] Challenge #352 [Easy] Making Imgur-style Links
// https://www.reddit.com/r/dailyprogrammer/comments/7yyt8e/20180220_challenge_352_easy_making_imgurstyle/
// May 05, 2018

let alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

let input1 = 15674;

// https://www.reddit.com/r/dailyprogrammer/comments/7yyt8e/20180220_challenge_352_easy_making_imgurstyle/dul9n2r/
// Due to 7026425611433322325 being above Number.MAX_SAFE_INTEGER I used a library called bignumber.js. 
// let input2 = 7026425611433322325;

let input3 = 187621;
let input4 = 237860461;
let input5 = 2187521;
let input6 = 18752;

function convertToBase62(input){
  let result = "";
  while(input > 61){
    result = alphabet[input % 62] + result;
    input = parseInt(input / 62);
  }
  result = alphabet[input] + result;
  
  return result;
}


console.log(convertToBase62(input1));
// console.log(convertToBase62(input2)); // omitting this one since it needs an external library
console.log(convertToBase62(input3));
console.log(convertToBase62(input4));
console.log(convertToBase62(input5));
console.log(convertToBase62(input6));