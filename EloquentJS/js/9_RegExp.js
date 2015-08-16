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

/* Одинарные кавычки заменить на двойные, но оставить апострофы */

var text = "The words of the banished King, \'I swear REVENGE!\'... Full o\'hate, full o\'pride, oh, we screamed for revenge! \'Nightfall\' quietly it creptinan'changedusall";

console.log("Blockquotes");
console.log(text);
//console.log(text.replace (/(\W)\'/g, "$1\""));
//console.log(text.replace(/\'(\W)/g, "\"$1"));

console.log(text.replace (/\W\'|\'\W/g, function(str){
  return str.replace("\'", "\"");
}));