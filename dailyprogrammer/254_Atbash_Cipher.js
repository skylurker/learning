// Around April 27th, 2016
// [2016-02-16] Challenge #254 [Easy] Atbash Cipher
// https://www.reddit.com/r/dailyprogrammer/comments/45w6ad/20160216_challenge_254_easy_atbash_cipher/
 
/* 
Atbash is a simple substitution cipher. It works by substituting the first letter of an alphabet 
for the last letter, the second letter for the second to last and so on, effectively reversing the alphabet.
For this challenge you'll be asked to implement the Atbash cipher and encode (or decode) some English language words. 
If the character is NOT part of the English alphabet (a-z), you can keep the symbol intact.
*/

var plain = "abcdefghijklmnopqrstuvwxyz";
// var cipher = "ZYXWVUTSRQPONMLKJIHGFEDCBA";

var sample = "foobar";
var sample2 = "gsrh rh zm vcznkov lu gsv zgyzhs xrksvi";
var sample3 = "wizard";
var sample4 = "/r/dailyprogrammer";

var lettersTotal = plain.length;

function atbash(input){
  var output = "";
  for (i=0; i<input.length; i++){
    
    // output0 += plain.indexOf(input[i]);
    // output0 += " ";
    charIndex= plain.indexOf(input[i]);
    if (charIndex == -1) {
      output += input[i];
    } else {
    output += plain[lettersTotal - charIndex - 1];
    };   
  }
//  console.log(output0);
  console.log(output);
};
atbash(sample);
atbash(sample2);
atbash(sample3);
atbash(sample4);
