// [2016-12-05] Challenge #294 [Easy] Rack management 1
// https://www.reddit.com/r/dailyprogrammer/comments/5go843/20161205_challenge_294_easy_rack_management_1/
// December 12, 2016
// Javascript

function scrabble(chars, word){
  charsArr = chars.split('');
  wordArr = word.split('');
  while (wordArr.length > 0) {
    letter = wordArr[0];
    var charIndex = charsArr.indexOf(letter);
    if(charIndex > -1) {
      wordArr.splice(0,1);
      charsArr.splice(charIndex,1);

     // debugging
     // console.log("Letter: ", letter, " charsArr: ", charsArr.join(''), " wordArr: ", wordArr.join(''));

    } else return false;
  };
  return true;
}


console.log(scrabble("ladilmy", "daily")); // -> true
console.log(scrabble("eerriin", "eerie")); // -> false
console.log(scrabble("orrpgma", "program")); // -> true
console.log(scrabble("orppgma", "program")); // -> false