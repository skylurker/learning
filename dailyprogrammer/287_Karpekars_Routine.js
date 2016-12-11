// https://www.reddit.com/r/dailyprogrammer/comments/56tbds/20161010_challenge_287_easy_kaprekars_routine/
// JS
// Oct 11 2016

function largest_digit(n){
    n = (n + "").split('').sort();
        return n[n.length-1];
}
// console.log(largest_digit(1234));

// helper function yo
function rightPadArray(arr){
  for (var i = arr.length; i < 4; i++){
      arr.push(0);
  };
  return arr;
}

// Bonus 1
// now does pad with zeroes!
function desc_digits(n){
  n = (n + "").split('').sort().reverse(); // descending order
  n = rightPadArray(n);
  return n.join(''); // back to String (not Integer, to work with 0000 too)
}
// console.log(desc_digits(123));

// Bonus 2
function asc_digits(n){
  n = (n + "").split('').sort().reverse(); // descending order
  n = rightPadArray(n);
  return n.reverse().join(''); // back to ascending and String (not Integer, to work with 0123 too)
}
// console.log(asc_digits(132));

function hasSame4Digits(a){
  a = (a + "").split('');
  a = rightPadArray(a).sort();
  if (a[0] == a[a.length - 1]) return true;
  else return false;
}
console.log(hasSame4Digits(3333));