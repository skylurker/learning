// https://www.reddit.com/r/dailyprogrammer/comments/4ybbcz/20160818_challenge_279_intermediate_text_reflow/
// Sept 12, 2016
// JS
text = "In the beginning God\n\n created the heavens and the earth. Now the earth was\nformless and empty, darkness was over the surface of the deep, and the Spirit of\nGod was hovering over the waters.";

// \n\n stands for new paragraph
// can be changed to, say,
// wrap(input, width, paragraphDelimiter) { input = input.split(paragraphDelimiter); ...}

function isInWord(string, strPos){
  if (/\s/.test(string[strPos]) == true)
    return false;
  else return true;
}
/*
console.log(isInWord("01234 6 8", 5));
console.log(isInWord("01234 6 8", 7));
console.log(isInWord("01234 6 8", 3));
console.log(isInWord("01234 6 8", 8));
*/
function wrap(input, width){
  // divide into paragraphs, process each paragraph
        output = input.split("\n\n").forEach(function(p){  // Sept 28: map instead of forEach??
      // delete newlines
      p = p.replace("\n", " ");

      while(p){

      }
      // return the modified paragraph
      return out;
    }).join("\n\n");



  return output;

    // replace(/\n\n/g, " ").split(" ");
  /*
  while (input){
    if(isInsideWord){
      moveToEdge;

    }
  }
  */

  /*
    for(i = 0; i < input.length / width; i++){
      console.log(input.substring(i * width, (i + 1)*width));
    }
    */
}

// console.log(wrap(text, 40));