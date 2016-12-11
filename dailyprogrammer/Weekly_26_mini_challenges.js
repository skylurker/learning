// https://www.reddit.com/r/dailyprogrammer/comments/56mfgz/weekly_26_mini_challenges/d8lesvq
// JS
// Oct 10 2016

input1 = "a*bc**def****g";
function starStruck(input){
  var match;
  var pattern = /\*{2,}/g;
  while (match = pattern.exec(input))
    console.log("found ", match[0].length, " stars");
}

starStruck(input1);

// OR if you need just a single number, then
function starStruck2(input){
  var match;
  var cnt = 0;
  var pattern = /\*{2,}/g;
  while (match = pattern.exec(input))
     cnt += match[0].length;
  console.log(cnt);
}

starStruck2(input1);

/////////
// dunno if okay
inp1 = "zipdjzap zip zzzzzzap";
inp2 = "zipzapzipzzzaphzazipzazapzgzazapzapzapzapzipzapzapzap";
inp3 = "zip dsjdkgf";
inp4 = "zip dszipzapf";
function zipZapNotZipZip(input){
  var match;
  var pattern = /zip|zap/g;
  var arr = [];
  while (match = pattern.exec(input))
    arr.push(match[0]);
  var cnt = 0
  for (var i = 0; i < arr.length; i++){
    if (cnt > 1)
      return false;
    if (arr[i] == "zip")
      cnt++;
    if (arr[i] == "zap")
      cnt--;
  }
  if (cnt <= 0)
    return true;
  else return false;
}
console.log(zipZapNotZipZip(inp1));
console.log(zipZapNotZipZip(inp2));
console.log(zipZapNotZipZip(inp3));
console.log(zipZapNotZipZip(inp4));