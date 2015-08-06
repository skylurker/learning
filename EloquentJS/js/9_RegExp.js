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
