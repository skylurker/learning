// https://www.reddit.com/r/dailyprogrammer/comments/55zdxx/20161005_challenge_286_intermediate_zeckendorf/
// OCT 05 2016
// Dunno if okay

 fns= [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377];

function zeckendorf(number){
  result = "";

  while(number>0){
    var i=0;
    while(fns[i]<=number){ // sooooo bruteforce
      i++;
    }
    number-=fns[i-1];
    console.log(number);
    result+=" + ";
    result+= fns[i-1];
  }

  return result;
}
console.log(zeckendorf(100));
console.log(zeckendorf(30));