/* Eloquent JS */
/* RegExp */
"use strict";

var re1 = new RegExp("abc");
var re2 = /abc/;

console.log(re1.test("abcde"));
console.log(re2.test("abcde"));
console.log(re1.test("abxde"));
console.log(re2.test("abxde"));

console.log("папа".replace("п", "м"));

console.log("Belekoroz".replace(/[eo]/g, "ё"));

console.log(/\bcat\b/.test("cat\' lala"));
console.log(/\bcat\b/.test("concatenate"));

/* RegExp Golf */
function regExpGolf() {
console.log("RegExp Golf");
var regexp = [];
var text = [];

regexp[0] = /ca(r|t)/i;
/* doesn't work properly
 * -> "regexp[" 0 "], text[" 2 "]" 9_RegExp.js:47
Array [ "Cat", "t" ] 9_RegExp.js:48
"regexp[" 0 "], text[" 3 "]" 9_RegExp.js:47
Array [ "car", "r" ]
*/
regexp[1] = /ca[rt]/i;
regexp[2] = /pr?op/i;
regexp[3] = /ferr(et|y|ari)/i;
regexp[4] = /\b\w*?ious\b/i;
// answers: /ious\b/
regexp[5] = /\s[.,:;]/;
regexp[6] = /\b\w{6,}\b/;
// answers: /\w{7,}/
regexp[7] = /\b[^e]+?\b/i;
// doesn't work properly!
// answers: /\b[a-df-z]+\b/i

text[0] = "The words of the banished King, \'I swear REVENGE!\'... Full o\'hate, full o\'pride, oh, we screamed for revenge! \'Nightfall\' quietly it creptinan'changed ; usall";
text[1] = "Some random text whatever";
text[2] = "Catelyn Stark is a character from : ASOIAF where F does not stand for Ferrari";
text[3] = "Scarlings and props, there are no furious ferrymen here . yeah";
text[4] = "Lollipop is a Android API level 17 or so. No ferrets included , though";

for (var j = 0; j < text.length; j++) {
  console.log("text\[", j, "\] ", text[j]);
}

for (var i = 0; i < regexp.length; i++) {
  for (var k = 0; k < text.length; k++) {
    console.log("regexp\[", i, "\], text\[", k, "\]");
    console.log(regexp[i].exec(text[k]));
  }
}

/*
console.log(regexp1.exec(text1));
console.log(regexp11.exec(text2));
console.log(regexp2.exec(text1));
console.log(regexp3.exec(text1));
console.log(regexp4.exec(text1));
console.log(regexp5.exec(text1));
console.log(regexp6.exec(text1));
console.log(regexp7.exec(text1));
console.log(regexp1.exec(text1));
*/
};

regExpGolf();

/* Одинарные кавычки заменить на двойные, но оставить апострофы */

var text = "The words of the banished King, \'I swear REVENGE!\'... Full o\'hate, full o\'pride, oh, we screamed for revenge! \'Nightfall\' quietly it creptinan'changedusall";

console.log("Blockquotes");
console.log(text);
//console.log(text.replace (/(\W)\'/g, "$1\""));
//console.log(text.replace(/\'(\W)/g, "\"$1"));

console.log(text.replace (/\W\'|\'\W/g, function(str){
  return str.replace("\'", "\"");
}));