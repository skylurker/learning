// JAVASCRIPT
// September 08-09, 2016
// [easy]Converting notes
// https://www.reddit.com/r/dailyprogrammer_ideas/comments/51kuhx/easyconverting_notes/ 

var inp1 = "373";
var inp2 = [100,50,20,10,5,2,1];

function solver(n, arr){

 for (i = 0, n2 = arr[i]; i < arr.length; i++, n2 = arr[i]){
 var cnt = 0;
 while(n >= n2){
     n -= n2;
   cnt++;
   }
 console.log(n2 + " " + cnt);

      } 
}

solver(inp1, inp2);