// JS, 09/Sept/2016
// https://www.reddit.com/r/dailyprogrammer_ideas/comments/4d5ehh/easy_drill_baby_drill/
// Find all of the numbers from 1-1000 that are divisible by 7

function divisibleBy7(begin, end){
        var result = [];
          for (var i = begin; i < end +1; i++){
      if (i % 7 == 0) result.push(i);
    }
          return result;
}
console.log(divisibleBy7(1, 1000));

