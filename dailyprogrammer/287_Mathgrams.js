// https://www.reddit.com/r/dailyprogrammer/comments/576o8o/20161012_challenge_287_intermediate_mathagrams/
// Mathgrams
// JS
// Oct 13th 2016



function solve(a, b, c){
  // dunno yet what format to use
  digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  digits2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  digits3 = "123456789";
  arra = a.split('');
  arrb = b.split('');
  arrc = c.split('');

  // make it availableDigits = removeDigits(arr)
  function removeDigits(arr){
    for (var i = 0; i<arr.length; i++){
      digits3 = digits3.replace(arr[i].toString(), "");
                  /*var index = digits3.indexOf(arr[i]);
        if (index > -1) {
                    digits3.splice(index, 1);
                }
        */
          }
  }

  removeDigits(arra);
  removeDigits(arrb);
  removeDigits(arrc);
  console.log(digits3);


  // first digit of either a or b CAN'T be 9
  // first digit of c can't be 1 or 2
  // first digit of a or b can't be > than first digit of c
  // try the hundreds
  // weeee can try to separate data as follows:
  // 1xx = 1*100 + x1*10 + x2*1
  // orrr say 1xx + xxx = 468 means that xx + xxx = 368
  // or, well, bruteforce permutations

  // soooooo
  // let's say it's def + ghi = jkl
  // d != 9, g != 9, j != 1, j != 2, any != those that are not in availableDigits
  // d + g <= j <= 9
  // maybe it would be easier to change x-s to zeroes first;
  // then (for a time) the leading zeroes change to the smallest digits???


  resulta = arra.join('');
  resultb = arrb.join('');
  resultc = arrc.join('');
  console.log(resulta, " + ", resultb, " = ", resultc);
}

solve("1xx", "xxx", "468");